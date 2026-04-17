# 개발자 포트폴리오 웹페이지

## 프로젝트 개요
개발자를 위한 포트폴리오 웹페이지. 깔끔하고 현대적인 디자인으로 기술 스택, 프로젝트, 경력을 효과적으로 보여주는 것이 목표.

## 기술 스택
- **Next.js** (App Router)
- **Tailwind CSS**
- **TypeScript**
- 배포: Vercel

## 페이지 구성
1. **Hero** — 이름, 직함, 한 줄 소개, CTA 버튼 (Contact / Resume)
2. **About** — 간단한 자기소개, 관심 분야
3. **Skills** — 사용 기술 스택 아이콘/뱃지 목록
4. **Projects** — 프로젝트 카드 그리드 (썸네일, 설명, GitHub/Demo 링크)
5. **Contact** — 이메일, GitHub, LinkedIn 등 링크

## 디자인 원칙
- 다크/라이트 모드 지원
- 깔끔한 타이포그래피, 충분한 여백
- 부드러운 스크롤 애니메이션 (Framer Motion 또는 CSS)
- 모바일 반응형 필수

## 코드 규칙
- `app/` 디렉토리 기반 App Router 사용
- 컴포넌트는 `components/` 폴더에 분리
- 콘텐츠 데이터(프로젝트, 스킬 등)는 `data/` 폴더에 별도 관리
- 불필요한 주석, 임시 코드 남기지 않기

## 코드 컨벤션
- 언어: TypeScript 엄격 모드 (`strict: true`)
- 컴포넌트: PascalCase (예: `HeroSection.tsx`)
- 함수/변수: camelCase
- 상수: UPPER_SNAKE_CASE
- CSS: Tailwind 유틸리티 클래스 우선, 커스텀 CSS는 최소화
- 폴더명: kebab-case (예: `components/hero-section/`)
- 줄바꿈: 컴포넌트당 하나의 파일, 100줄 초과 시 분리 고려
- import 순서: 외부 라이브러리 → 내부 모듈 → 스타일
