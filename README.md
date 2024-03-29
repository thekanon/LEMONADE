# 1. 설치 및 실행 방법

## 1.1 기본 설치 필요 사항

node v20.11.0
pnpm v8.15.1

## 1.2 프로젝트 설치

### 프로젝트 클론 및 이동

git clone https://github.com/thekanon/LEMONADE.git
cd LEMONADE

### 설치 및 빌드

pnpm install
pnpm build

### 실행

node .output/server/index.mjs

### 접속(web)

http://localhost:3000

### 추가 도구(storybook)

pnpm run storybook

주소 : http://localhost:6006

# 2. 프로젝트 기능 설명

## 2.1 글 목록 페이지

- 주소 : http://localhost:3000/viewPosts
- 기능

  - 글 목록을 보여준다.
  - 최근 본 글을 Local Storage에 저장하여 보여준다.
  - 가로 슬라이드(Carousel) 컴포넌트를 통해 최근 본 글을 보여준다.

- 추가 기능
  - Lead More 버튼을 클릭하여 더 많은 글을 불러올 수 있다.
  - 모바일에서는 글 목록의 일부 컬럼이 생략된 상태로 보여진다.

## 2.2 글 상세 페이지

- 주소 : http://localhost:3000/posts/45
- 기능

  - 글 상세 정보를 보여준다.
  - 댓글 섹션을 보여주고 무한 스크롤을 통해 댓글을 불러온다.
  - userId 클릭 시 유저 정보를 보여주는 레이어 팝업을 보여준다.
  - 뒤로가기 버튼을 누르면 레이어 팝업이 닫힌다.

- 추가 기능
  - IOS에서 제스처의 세기에 따라 스크롤이 지속된다
  - Android에서 물리적 백 버튼을 누르면 레이어 팝업이 닫힌다.

# 3. 프로젝트 Todo

## **1. 프로젝트 초기 설정**

- [x] Nuxt.js 프로젝트 생성하기
- [x] 필요한 Nuxt.js 모듈 및 라이브러리 설치하기
- [x] 프로젝트 디렉토리 구조 설정하기
- [x] 개발 환경 설정하기 (ESLint, Prettier 등)

## **2. API 연동**

- [x] 글 목록 API 연동 및 데이터 페칭 로직 구현
- [x] 글 상세 정보 API 연동 및 데이터 페칭 로직 구현
- [x] 댓글 API 연동 및 무한 스크롤 로직 구현
- [x] 유저 정보 API 연동 로직 구현

## **3. UI 구현**

### 글 목록 페이지

- [x] 글 목록 UI 구현
- [x] Local Storage를 이용한 최근 본 글 기능 구현
- [x] 가로 슬라이드(Carousel) 컴포넌트 구현

### 글 상세 페이지

- [x] 글 상세 정보 UI 구현
- [x] 댓글 섹션 UI 및 무한 스크롤 구현
- [x] userId 클릭 시 유저 정보를 보여주는 레이어 팝업 UI 구현

## **4. 기능 구현**

- [x] 레이어 팝업 뒤로가기 키로 닫을 수 있도록 이벤트 핸들러 구현
- [x] iOS 및 Android 디바이스 별 추가 기능 구현
  - iOS 예: 특정 제스처 인식
  - Android 예: 물리적 백 버튼 커스텀 액션

## **5. 테스트 및 디버깅**

- [x] Storybook을 이용한 컴포넌트 테스트 및 디버깅
- [ ] e2e 테스트 구현
- [ ] 모든 페이지 및 기능에 대한 디버깅 및 테스트 수행
- [ ] 크로스 브라우징 및 디바이스 호환성 테스트
