## **📗 목차**


🏆 [프로젝트 소개](#-프로젝트-소개)

👨🏻‍💻 [팀원 소개](#-팀원-소개)

🛠 [개발 도구](#-개발-도구)

⏰ [프로젝트 일정](#-프로젝트-일정)

🔗 [API명세서와 ERD설계도](#-API명세서와-ERD설계도)
  
📝 [메뉴구조도](#-메뉴구조도)
  
✨ [화면 구현 및 코드 리뷰](#-화면-구현-및-코드-리뷰)
  - [회원가입 화면 구현 영상](#회원가입-화면-구현-영상)
  - [로그인 화면 구현 영상](#로그인-화면-구현-영상)
  - [펀딩 메인 페이지 화면 구현 영상](#펀딩-메인-페이지-화면-구현-영상)
  - [펀딩 상세 페이지 화면 구현 영상](#펀딩-상세-페이지-화면-구현-영상)
  
👨🏻‍💻 [느낀점](#-느낀점)

<br/>

## **🏆 프로젝트 소개**

- 프로젝트 제목 - 펀딩 및 기부 서비스 테스트

- 프로젝트 목적 - 배운 것들을 복습 및 활용, 협업에 대한 이해

- 분류 - 팀프로젝트

- 제작 기간 - 2023.05.03 ~ 2023.06.07

<br/>

## **👨🏻‍💻 팀원 소개**

<br/>

> **팀장: 정의현** 
- 사용한 통계에 프로젝트 설계
- 펀딩페이지 CRUD 기능 구현 및 CSS
- 로그인 및 회원가입 기능 구현
- security jwt 및 accessToken 디테일 작업
- 파일 입출력
- API 명세서
- 관리자 CRUD 기능 구현
- OAuth2 로그인, 회원가입 기능 구현
- 결제 기능 구현

> **팀원: 김수현** 
- 메인 페이지 기능 구현 및 CSS
- header 작업
- ppt 작업

> **팀원: 김상현** 
- 기부페이지 CRUD 기능구현 및 CSS
- 로그인 회원가입 페이지 CSS
- ERD 명세서
- security jwt 및 accessToken 틀 작업

> **팀원: 이해강** 
- 데이터 크롤링
- 검색 기능

<br/>

## **🛠 개발 도구**

<br/>

### FrontEnd

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 

### BackEnd

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 

### 형상 관리
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

<br/>

***ORM: Mybatis***

<br/>

## **⏰ 프로젝트 일정**


![스크린샷(1)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/4f7ea0ba-3d55-4106-9672-da1fde38a496)

<br/><br/>

**참고 웹사이트:** https://happybean.naver.com/

<br/>

## **🔗 API명세서와 ERD설계도**

### API 명세서

https://third-tempo-8c0.notion.site/4b573b520b424c3590c6ce244e1df794?v=f2f7a9bebd714ea3be176765f004f3d2

<br/>

### ERD 설계도


<div align="center">
 
 ### 펀딩 ERD
 
</div>

![KakaoTalk_20230605_153904436](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/c6a471b0-85f3-4d27-a258-0ac460f730d4)

<br/><br/>

<div align="center">
 
 ### 기부 ERD

![KakaoTalk_20230605_154821409](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/86dc51b4-dca5-4fa9-bfb5-7398474b865f)


 
</div>

<br/><br/>

## **📝 메뉴구조도**

![스크린샷(2)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/263c80b5-0421-4bb8-b7ac-96c53100b837)

<br/>

## **✨ 화면 구현 및 코드 리뷰**

<br/>

### **회원가입 화면 구현 영상**

<details>
<summary>이메일 유효성 검사</summary>
<div markdown="1">

![이메일 유효성 검사](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/0bf30e4f-bf10-4864-a202-cba2c63a045d)
  
</div>
</details>

<details>
<summary>그 외 유효성 검사 및 회원가입 성공</summary>
<div markdown="1">

![그 외 유효성 검사 및 회원가입 성공](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/2dac8417-6567-427f-855a-fe6c728a2fd1)
  
</div>
</details>

<br/>

### **로그인 화면 구현 영상**

<details>
<summary>로그인 유효성 검사 및 예외 처리</summary>
<div markdown="1">

![로그인 유효성 검사 및 예외처리](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/f095cb2f-d0a7-4127-9279-44e37efbe79a)
  
</div>
</details>

<br />

### **펀딩 메인 페이지 화면 구현 영상**

<details>
<summary>1. 카테고리 적용</summary>
<div markdown="1">
  
![카테고리 - Clipchamp로 제작 (1)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/402755b6-cfc9-4570-8a93-0c4274a2d2e8)

  
</div>
</details>

<details>
<summary>2. 정렬(전체, 진행중, 종료)</summary>
<div markdown="1">

![정렬(전체, 진행중, 종료)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/8b3de60f-18f2-4500-bc2b-12b6f255214b)
  
</div>
</details>

<details>
<summary>3. 정렬(최신 순, 참여 금액 순, 참여율 순, 종료 임박 순)</summary>
<div markdown="1">
<br/>

- 최신 순
  
![최신 순 - Clipchamp로 제작](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/6ee7a5ac-fa0e-491a-ab49-4d046c3c7a93)

<br/><br/>

- 참여금액 순
  
![참여 금액 순 - Clipchamp로 제작 (1)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/2c598491-a31d-4f0b-887e-b296e686cd10)

<br/><br/>

- 참여율 순

![참여율 순 - Clipchamp로 제작 (1)](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/8034d691-c756-449c-b0fe-bd40a648a002)

<br/><br/>

- 종료 임박 순

![종료 임박 순 - Clipchamp로 제작](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/edbb6514-334a-4ae8-a8a5-dff336992268)
  
</div>
</details>

### **펀딩 상세 페이지 화면 구현 영상**

<details>
<summary>현재 진행 중</summary>
<div markdown="1">

![상세페이지 - Clipchamp로 제작](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/03dbfdd9-aa06-49b6-ae18-cbc3eb8a917a)

</div>
</details>

<details>
<summary>펀딩 참여(결제)</summary>
<div markdown="1">

![결제 처음 - Clipchamp로 제작](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/efa13972-cf36-46ce-8d24-88ef1951057a)

<br/><br/>

![KakaoTalk_20230624_165355960_01](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/3fab79c9-46f7-4985-8761-4cdb7d354bed)

<br/><br/>

![KakaoTalk_20230624_165355960_02](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/bf156ff1-3fbe-4c58-aba3-f42d68983b0c)

<br/><br/>

![KakaoTalk_20230624_165355960_03](https://github.com/KORIT-KLJK/CrowdFunding-portfolio/assets/121987405/d8413386-8d92-42d4-a32c-69af3ceb6727)

<br/><br/>

</div>
</details>


