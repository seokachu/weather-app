/**
 * korea_districts.json의 모든 동 단위 좌표를 자동으로 생성하는 스크립트
 *
 * 작동 방식:
 * 1. korea_districts.json에서 동 단위 항목(level1-level2-level3) 추출
 * 2. locationCoordinates.ts에서 기존 구/시 좌표 확인
 * 3. 각 동에 대해 구/시 좌표를 기반으로 동 좌표 생성
 * 4. 생성된 동 좌표를 locationCoordinates.ts에 추가
 *
 * 사용 방법:
 * node scripts/fetchDongCoordinates.js
 *
 * 참고:
 * - 동 좌표는 구/시 좌표를 그대로 사용합니다
 * - 기상청 API는 5km 격자 단위이므로 구 단위 좌표로도 충분히 정확합니다
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// korea_districts.json 파일 읽기
const districtsPath = path.join(
  __dirname,
  '../src/shared/data/korea_districts.json'
);
const districts = JSON.parse(fs.readFileSync(districtsPath, 'utf-8'));

// 기존 좌표 파일 읽기
const coordinatesPath = path.join(
  __dirname,
  '../src/shared/data/locationCoordinates.ts'
);
let coordinatesContent = fs.readFileSync(coordinatesPath, 'utf-8');

// 동 단위 항목만 필터링
const dongItems = districts.filter((item) => {
  const parts = item.split('-');
  return parts.length === 3;
});

console.log(`총 ${dongItems.length}개의 동 단위 항목 발견`);

// 기존 좌표 추출
const existingCoordinates = {};
const coordinateRegex =
  /'([^']+)':\s*{\s*lat:\s*([\d.]+),\s*lon:\s*([\d.]+)\s*}/g;
let match;
while ((match = coordinateRegex.exec(coordinatesContent)) !== null) {
  existingCoordinates[match[1]] = {
    lat: parseFloat(match[2]),
    lon: parseFloat(match[3]),
  };
}

// 동 좌표 생성 (구 좌표 기반)
const newDongCoordinates = {};
let addedCount = 0;
let skippedCount = 0;

dongItems.forEach((item) => {
  const parts = item.split('-');
  const level1 = parts[0];
  const level2 = parts[1];
  const level3 = parts[2];

  const guKey = `${level1}-${level2}`;
  const dongKey = `${level1}-${level2}-${level3}`;

  // 이미 좌표가 있으면 스킵
  if (existingCoordinates[dongKey]) {
    skippedCount++;
    return;
  }

  // 구 좌표가 있으면 사용 (동 좌표는 구 좌표와 동일하게 설정)
  // 실제로는 정확한 동 좌표 데이터가 필요하지만,
  // 기상청 API는 5km 격자 단위이므로 구 단위 좌표로도 충분히 정확합니다.
  if (existingCoordinates[guKey]) {
    const guCoord = existingCoordinates[guKey];
    newDongCoordinates[dongKey] = {
      lat: guCoord.lat,
      lon: guCoord.lon,
    };
    addedCount++;
  }
});

console.log(`${addedCount}개의 동 좌표 생성됨`);
console.log(`${skippedCount}개의 동 좌표는 이미 존재함`);

// 새로운 좌표를 파일에 추가
if (Object.keys(newDongCoordinates).length > 0) {
  // 기존 파일에서 마지막 }; 찾기
  const lastBraceIndex = coordinatesContent.lastIndexOf('};');

  if (lastBraceIndex !== -1) {
    // 동 좌표 섹션 추가
    const newCoordinatesEntries = Object.entries(newDongCoordinates)
      .map(([key, coord]) => {
        return `  '${key}': { lat: ${coord.lat}, lon: ${coord.lon} },`;
      })
      .join('\n');

    // 마지막 }; 전에 추가
    const beforeBrace = coordinatesContent.substring(0, lastBraceIndex);
    const afterBrace = coordinatesContent.substring(lastBraceIndex);

    const updatedContent =
      beforeBrace +
      `\n  // 동 단위 좌표 (자동 생성 - 구 좌표 기반)\n` +
      newCoordinatesEntries +
      '\n' +
      afterBrace;

    fs.writeFileSync(coordinatesPath, updatedContent, 'utf-8');
    console.log('✅ 좌표 파일 업데이트 완료!');
    console.log(
      `📝 ${
        Object.keys(newDongCoordinates).length
      }개의 동 좌표가 추가되었습니다.`
    );
  } else {
    console.error('❌ 파일 형식을 찾을 수 없습니다.');
  }
} else {
  console.log('ℹ️  추가할 좌표가 없습니다.');
}
