# 🎬 FilmJourney - 나만의 영화 감상 기록 웹앱

**FilmJourney**는 TMDB API를 기반으로 제작한, 나만의 영화 감상을 기록할 수 있는 영화 다이어리 웹 애플리케이션입니다. 로그인한 유저는 영화 검색부터 리뷰 작성, 즐겨찾기, 감상 이력을 캘린더로 확인할 수 있는 다양한 기능을 통해 자신만의 영화 기록을 만들어갈 수 있습니다.
<p align="center">
  <img src="https://github.com/user-attachments/assets/fa47c756-a492-4d0b-80f7-a1f1f25cb0cb" width="200" height="430" />
  <img src="https://github.com/user-attachments/assets/1ed169fd-6150-413b-96ba-12d7fd71cbae" width="200" height="430" />
  <img src="https://github.com/user-attachments/assets/f457f4dc-6a6c-4bea-a6ac-870e366d274b" width="200" height="430" />
  <img src="https://github.com/user-attachments/assets/14649310-dffa-41f1-9833-1818ef6224d9" width="200" height="430" />
</p>


## 🛠️ 사용 기술

- **Frontend**: React, JavaScript
- **UI 라이브러리**: Material-UI (MUI)
- **인증 및 데이터베이스**: Firebase (Google 로그인, Firestore)
- **캘린더 라이브러리**: FullCalendar
- **영화 데이터 API**: TMDB (The Movie Database)

---

## ✨ 주요 기능

### 🔐 구글 로그인
- Firebase Authentication을 통한 Google OAuth 로그인 지원
- 로그인한 유저만 리뷰 작성 가능

### 🔍 영화 검색 (Search 탭)
- TMDB API 연동으로 실시간 영화 검색
- 검색 결과에서 상세 페이지로 이동 가능

### 🎞️ 영화 상세 페이지
- 영화 기본 정보(줄거리, 포스터, 장르, TMDB 평점) 확인
- "리뷰 남기기" 버튼을 통해 해당 영화 리뷰 작성 가능
- 해당 영화에 대한 다른 유저들의 리뷰 열람 가능

### 📝 리뷰 작성 및 관리
- 영화별 리뷰 작성 가능 (텍스트 + 별점 + 날짜)
- 본인의 리뷰는 수정 및 삭제 가능
- 내가 남긴 별점은 개인 리뷰에만 기록됨 (TMDB 평점과는 별도)

### 📅 리뷰 기록 캘린더 (Review 탭)
- FullCalendar를 통해 작성한 리뷰 날짜별 영화 감상 시각화
- 영화 포스터가 달력에 표시되며, 클릭 시 리뷰 확인 가능

### ❤️ 즐겨찾기 (Favorite 탭)
- 하트를 클릭하여 영화 즐겨찾기 가능
- 즐겨찾기한 영화는 별도 탭에서 모아보기


## 💻 UI 및 반응형

- 현재는 **PC 환경에서도 모바일 앱 스타일의 화면**으로 고정되어 있습니다.
- 추후에는 **반응형 UI 구현**을 통해 다양한 화면 크기를 자연스럽게 지원할 계획입니다.

---

## 🌐 배포 주소

Netlify를 통해 배포 완료:  
👉[https://film-journey.netlify.app/](https://film-journey.netlify.app/)
