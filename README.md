# 🌤️ 기상청 날씨 서비스 (Weather App)

공공데이터포털의 기상청 단기예보 API를 활용하여 실시간 날씨 정보를 제공하고, 원하는 지역을 즐겨찾기로 관리할 수 있는 React 기반 웹 서비스입니다.

### 🔗 서비스 링크

- **배포 URL**: [https://weather-app-gamma-three-78.vercel.app](https://weather-app-gamma-three-78.vercel.app)
- **GitHub Repository**: [https://github.com/seokachu/weather-app](https://github.com/seokachu/weather-app)

---

### ✨ 주요 기능

- **실시간 날씨 정보**: 기상청 API를 기반으로 현재 온도, 최저/최고 기온 제공
- **지역 검색**: 전국 단위 지역명 검색을 통한 날씨 조회
- **즐겨찾기 관리**:
  - 관심 지역 등록 및 해제 기능 (최대 6개)
  - 즐겨찾기 지역별 맞춤형 **닉네임 수정 기능**
- **직관적인 UX**:
  - `Lucide React` 아이콘을 활용한 세련된 UI
  - `react-hot-toast`를 통한 실시간 액션 피드백 (추가/삭제/수정 알림)

---

### 🛠️ 사용 기술 스택

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Toast**: react-hot-toast
- **Routing**: React Router DOM
- **Deployment**: Vercel

---

### 🚀 프로젝트 실행 방법

```bash
# 레포지토리 클론
git clone [https://github.com/seokachu/weather-app](https://github.com/seokachu/weather-app)
cd weather-app

# 의존성 설치
npm install

# 로컬 서버 실행
npm run dev
```
