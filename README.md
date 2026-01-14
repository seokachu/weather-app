# 🌦️ 기상청 날씨 서비스 (Weather App)

기상청 API를 활용하여 사용자의 위치 기반 날씨 정보와 즐겨찾는 지역의 날씨를 실시간으로 확인할 수 있는 모바일 웹 서비스입니다.

### 🔗 서비스 링크

- **배포 URL**: [https://weather-app-gamma-three-78.vercel.app](https://weather-app-gamma-three-78.vercel.app)
- **GitHub Repository**: [https://github.com/seokachu/weather-app](https://github.com/seokachu/weather-app)

---

### 🛠️ 사용 기술 스택

- **Frontend**: React (Vite), TypeScript, Tailwind CSS
- **State Management**: React Hooks (Custom Hooks), LocalStorage
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Deployment**: Vercel

---

### 🚀 프로젝트 실행 방법

```bash
# 레포지토리 클론
git clone [레포지토리-주소]

# 의존성 설치
npm install

# 로컬 서버 실행
npm run dev
```

### ✨ 구현 기능 설명

#### 1. 내 위치 기반 실시간 날씨

- **Geolocation API 활용**: 브라우저 내장 기능을 통해 사용자의 현재 위도와 경도 좌표를 확보합니다.
- **현재 주소 도출**: 확보한 좌표를 바탕으로 사용자가 현재 위치한 행정구역 명칭을 도출하여 화면에 표시합니다.

#### 2. 지역 검색 및 기상청 좌표 변환

- **동네 이름 검색**: 전국 법정동(공식 명칭) 데이터를 활용하여 사용자가 원하는 지역을 자유롭게 검색할 수 있습니다.
- **격자 좌표(nx, ny) 매핑**: 검색된 주소명을 기상청 API 전용 격자 좌표로 변환하여 실시간 단기 예보 데이터를 호출합니다.

#### 3. 즐겨찾기 관리 및 닉네임 수정

- **관심 지역 등록**: 별표(Star) 클릭 시 `LocalStorage`에 저장되어 브라우저 재접속 시에도 데이터가 유지됩니다.
- **닉네임 수정**: 즐겨찾기 목록에서 이름을 수정할 수 있는 편집 기능을 구현하여 사용자 편의성을 강화했습니다.

#### 4. 예외 상황 처리 및 UX 개선

- **위치 권한 대응**: 위치 권한 거부 시, 에러 화면 대신 전용 안내 배너와 검색 유도 UI(`EmptyWeatherView`)를 노출하여 사용자의 혼란을 방지했습니다.
- **데이터 부재 대응**: 검색 결과가 없거나 API 응답 에러 발생 시 **"해당 장소의 정보가 제공되지 않습니다."**라는 명확한 가이드를 제공합니다.

---

### 💡 기술적 의사결정 및 이유

#### 1.

#### 2.

#### 3.

---

### 📂 폴더 구조

```text
src/
 ├── entities/     # 즐겨찾기 도메인 로직 및 훅
 ├── features/     # 검색, 토글, 닉네임 수정 기능
 ├── shared/       # 공통 UI(Button, Banner), 좌표 변환 유틸
 ├── widgets/      # WeatherCard, Header, Skeleton 등 독립 UI
 └── pages/        # MainPage, FavoritePage (Route 구성)

```
