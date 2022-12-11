<div align=center>
<img width="400" alt="image" src="https://user-images.githubusercontent.com/97591083/206909591-b2ddad55-e407-43b3-be1a-2581d68544f3.png">
</div>

## 목차
- [기획배경](#기획배경)
- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 기간](#프로젝트-기간)
- [주요 자료](#주요-자료)
- [팀원 소개 및 기여도](#팀원-소개-및-기여도)
- [설치](#설치)
- [기능 소개](#기능-소개)
- [시스템 아키텍처](#시스템-아키텍처)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)

## 기획배경

- 포스트 코로나 시대를 맞아 타인과의 접촉을 줄이면서 건강을 챙길 수 있는 방법으로 등산이 대두되었다. 특히, 스마트폰을 적극 활용할 수 있는 2030세대 산행족이 늘면서, 등산 때 활용할 수 있는 모바일 앱 서비스를 기획하게 되었다.

## 프로젝트 소개

- 산림청 공공데이터를 기반으로 100대 명산 지도 및 정보를 확인하고 폴리라인을 통해 해당산 등산 기록을 통해 나만의 등산 달력을 만드는 등산 어플 서비스

## 프로젝트 기간

- SSAFY 자율 프로젝트 2022.10.11 ~ 2022.11.18 (6주)

## 주요 자료
- [NOTION🖋️](https://forest-dungeon-7d8.notion.site/116186235dda438bad3335ffa9e722fa)
- [FIGMA🎨](https://www.figma.com/file/x1mGmXckprJQ1jdGI3qefr/%EC%98%AC%EB%9D%BC%EC%98%A4%EB%9D%BC%EA%B3%B0?node-id=0%3A1&t=MSlrJ63e2KduK9kE-1)
- [UCC🎥](https://youtu.be/vP4pGheT7BA)

## 팀원 소개 및 기여도

|   이름   |     [강동관](https://github.com/whatistheMatter823)         |     [정윤해](https://github.com/JEONGYOONHAE)     |     [장수영](https://github.com/dearsyjang)     |     [배근혜](https://github.com/hyehye66)     |     [이현정](https://github.com/Hyunbird)     |     [최혁주](https://github.com/spaceforvincent)     |
| :------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
|  포지션  |                 Team Leader<br/>Data<br/>CI/CD                 |         Back-end<br/>CI/CD          |            Front-end<br/>UI/UX            | Front-end<br/>UI/UX | Front-end<br/>UI/UX | Front-end<br/>UI/UX |
| 담당<br/>기능 | 데이터 처리<br/>Spring Boot<br> Dockerize & 배포 | Spring Boot <br/>Dockerize & 배포 | 회원<br/>산 지도 & 정보<br/>등산 챌린지 |       채팅        |     등산 기록     |     등산 달력     |

## 설치

서비스를 사용하기 위해서는 다음과 같은 방법으로 실행합니다.
레포지토리를 clone 받습니다.

**[ BACK-END ]**

1. 백엔드를 실행합니다.

```java
run application
```

**[ FRONT-END ]**

1. 안드로이드 폰에서 apk 설치 및 실행합니다.
2. 안드로이드 스튜디오를 이용할 경우, pacakge.json에 정의된 패키지 및 모듈을 설치합니다.
```jsx
npm install
```
3. 설치 완료 후, 프론트엔드를 실행합니다.
```jsx
npm run android
```


## 기능 소개

| 구분                             | 기능                           | 설명                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| 회원                             | 회원가입<br/>로그인 & 로그아웃 | - id, pw, nickname 작성을 통한 회원관리<br/>- id, nicname 중복 검사 |
| 산 지도                          | 산 지도 조회                   | - 100대 명산 클러스터 & 마커            |
| 산 지도                          | 산 검색                        | - 100대 명산 검색<br/>- 하단 모달창 세미정보 조회  |
| 산 정보 |산 상세정보|- 산 기본정보 (높이, 지역, 소개)<br />\- 100대 명산 선정 이유 <br />- 등산로 이미지, 등산로 나이도 <br />- 현재 날씨 ( 온도, 습도, 날씨)|
| 등산 달력 | 등산 달력                      | \- 등산 일정 등록, 수정, 취소 가능 <br />- 등산 기록 조회    |
| 등산 기록 | 등산 기록                      | \- 위성 지도 및 주요 시설 위치 <br />- 등산 경로 별 거리, 소요시간 <br />- 현재 위치 및 고도 확인 <br />- 등산 누적 거리 및 시간 저장 |
| 커뮤니티  | 등산 챌린지                    | \- 전체 및 월별 누적 거리 기준 회원 랭킹 <br />- 전체 누적 거리 Top5 차트 |
| 커뮤니티  | 채팅                           | - 채팅방 생성<br />- 채팅방 검색                             |



### 💚회원

- 사용자는 회원가입시, 아이디, 닉네임, 비밀번호 입력이 필요하며, 아이디 중복확인, 닉네임 중복확인 절차를 거쳐야합니다.

<div>
<img src="img_source/Untitled.png" width="400" height="900">
<img src="img_source/Untitled%201.png" width="400" height="900">
</div>

### 💚100대 명산 지도 및 검색

- 사용자는 구글지도를 통해 100대 명산 클러스터와 마커를 확인할 수 있습니다.
- 사용자는 산 검색을 할 수 있으며, 검색 완료 시 마커 이동과 함께 하단 모달창(bottomsheet)로 간단한 정보를 확인할 수 있습니다.
- 사용자는 하단 모달창(bottomsheet)에서 산 이름 혹은 정보 클릭 시, 상세 정보 페이지로 이동할 수 있습니다.

<div>
<img src="img_source/%25ED%2581%25B4%25EB%259F%25AC%25EC%258A%25A4%25ED%2584%25B0%25EB%25A7%2581.gif" width="400" height="800">
<img src="img_source/Untitled.gif" width="400" height="800">
</div>

### 💚산 상세 정보 조회

- 사용자는 상세 정보 페이지에서 산림청 데이터 기반, 산 정보(높이, 주소, 별칭), 상세 설명, 100대 명산 선정 이유, 난이도, 등산로 경로를 조회할 수 있습니다.
- 사용자는 open weather 데이터 기반, 산 현재 날씨(온도, 습도, 메인날씨)를 확인할 수 있습니다.

<img src="img_source/Untitled%202.png" width="400" height="1000">

### 💚등산 기록

- 사용자는 현재 사용자의 위치 파악이 가능합니다.
- 사용자는 현재 사용자의 실시간 위치 데이터 기반 경로를 작성할 수 있습니다.
- 사용자는 등산한 누적 거리와 시간, 고도 파악이 가능합니다.
- 사용자는 긴급 전화 버튼으로 119 연결이 가능합니다.

<div>
<img src="img_source/Untitled%203.png" width="300" height="700">
<img src="img_source/Untitled%204.png" width="300" height="700">
</div>

### 💚등산 달력

- 사용자는 등산한 정보 확인이 가능합니다.
- 사용자는 날짜, 산 이름, 등산 거리와 시간, 경로 확인이 가능합니다.

<div>
<img src="img_source/Untitled%205.png" width="300" height="700">
<img src="img_source/Untitled%206.png" width="300" height="700">
<img src="img_source/Untitled%207.png" width="300" height="700">
</div>

### 💚커뮤니티 - 등산챌린지

- 사용자는 등산기록과 전체 사용자 기준으로 전체 누적거리, 월별 누적거리를 통해 랭킹을 확인할 수 있습니다.
- 사용자는 전체 누적거리 Top5 등산거리 차트를 확인할 수 있습니다.
<div>
<img src="img_source/KakaoTalk_20221124_144350942.gif" width="400" height="900">
<img src="img_source/Untitled%208.png" width="400" height="900">
</div>

### 💚커뮤니티 - 채팅

- 사용자는 채팅방을 생성할 수 있습니다.
- 사용자는 사용자 간 실시간 대화가 가능합니다.

<div>
<img src="img_source/Untitled%209.png" width="300" height="700">
<img src="img_source/Untitled%2010.png" width="300" height="700">
</div>

## 시스템 아키텍처

![Untitled](img_source/%25EC%258B%259C%25EC%258A%25A4%25ED%2585%259C%25EA%25B5%25AC%25EC%2584%25B1%25EB%258F%2584.png)

## 기술 스택

![Untitled](img_source/Untitled%2011.png)

**[ FRONT-END ]**

- **React Native**: 올라오라곰 Project의 안드로이드 앱 구현을 위한 모바일 프레임워크 (CLI 사용)
- **JavaScript**
- **CSS**
- **Axios**: Java Spring Boot와의 데이터 비동기 통신
- **Google Map**: 산 지도 클러스터링, 마커 / 등산기록 폴리라인 구현
- **WebSocket**: 실시간 채팅을 위한 웹

**[ BACK-END ]**

- **Spring Boot** : 올라오라곰 Project의 전반적인 Rest Controller 구현.
- **Spring Security** : WebSecurityConfigurerAdapter를 상속받아 Filter를 적용, 사용자 권한에 맞는 기능을 수행하도록 구현.
- **JWT** : JSON Web Token을 활용하여 회원 인증 및 안정성있는 정보 교환을 할 수 있도록 활용.
- **JPA (Hibernate)** : ORM인 Hibernate를 활용하여 객체 중심의 개발을 할 수 있도록 하였고, SQL을 직접 작성하지 않고 Entity 필드가 되는 객체를 통해 DB를 동작시켜 유지보수에 용이하게 활용.
  - 동일한 쿼리에 대한 캐시 기능을 사용하기 때문에 높은 효율성 기대
- **MySql** : RDBMS로 올라오라곰의 사용자, 등산 기록, 등산 달력, 챌린지 등 필요한 데이터를 저장.
- **AWS**
  - EC2 서비스를 이용하여 Ubuntu 서버를 구축 (호스팅).
- Google Cloud Storage Cloud : GCS 서비스를 이용하여 산 이미지, 등산 기록을 저장하기 위해 사용.
- **WebSocket** : 웹 상에서 쉽게 소켓 통신을 하게 해주는 라이브러리를 활용하여 등산 메이트 매칭, 지역별 그룹 채팅 기능을 구현.
- **STOMP** : Http에 모델링된 frame 기반의 메세징 프로토콜을 통해 메세지 전송을 좀 더 효율적으로 하기 위해 활용.
  - `STOMP Handler`를 구현하여 Subscribe를 통해 통신하고자 하는 주체(Topic)를 판단하여 실시간, 지속적으로 감시하고 해당 요청이 들어오면 처리하도록 구현. **(Broker 역할 수행)**

**[ DATA ]**

- **산림청 공공데이터 100대 명산**
- **Open Weather**

## 폴더 구조

**[ FRONT-END ]**

```markdown
📁 ClimbingBear
├── 📁.bundle
├── 📁**tests**
├── 📁android
├── 📁ios
├── 📁src
│ ├── 📁apis          # Axios 데이터 통신
│   ├── 📄Auth.js
│   ├── 📄Climbing.js
│   ├── 📄Map.js
│   └── 📄Rank.js
│ ├── 📁assets
│   ├── 📁fonts
│   ├── 📁images
│   └── 📁temp
│ ├── 📁components
│   ├── 📁auth
│     └──📄AuthInput.js
│   ├── 📁calendar
│     ├──📄ArrowLeft.js
│     ├──📄ArrowRight.js
│     ├──📄BlankStamp.js
│     ├──📄HaveBeenStamp.js
│     ├──📄ModifyDeleteModal.js
│     ├──📄NotHaveBeenStamp.js
│     ├──📄SearchBar.js
│     ├──📄SearchRegisterModal.js
│     └──📄ToastMessage.js
│   ├── 📁chat
│     ├──📄CreateRoomInput.js
│     ├──📄CreateRoomModal.js
│     ├──📄DeleteRoomModal.js
│     ├──📄EnterRoomModal.js
│     └──📄SearchBar.js
│   ├── 📁climbing
│     ├──📄BeforeClimbTimer.js
│     ├──📄ClimbintButton.js
│     ├──📄ClimbingFinishInfo.js
│     ├──📄ClimbingInfo.js
│     ├──📄ClimbingMap.js
│     ├──📄PlaceTypeButton.js
│     └──📄SaveEndModal.js
│   ├── 📁common
│     └──📄TextFont.js
│   ├── 📁map
│     ├── 📄MountainSemiDetail.js  
│     └── 📄SearchBar.js
│   └─ 📁rank
│     ├── 📄RankItem.js
│     ├── 📄RankMonth.js
│     └── 📄RankYear.js
│ ├── 📁navigation
│   ├── 📄AuthNavigation.js
│   ├── 📄CalendarNavigation.js
│   ├── 📄ChatNavigation.js
│   ├── 📄LogoutNavigation.js
│   ├── 📄MapNavigation.js
│   ├── 📄RankGraphNavigation.js
│   ├── 📄RankNavigation.js
│   └── 📄SideBar.js          # 통합 DrawerNavigation 사이드바
│ ├── 📁screens
│   ├── 📁auth
│     ├── 📄LoginScreen.js
│     ├── 📄LogoutScreen.js
│     └── 📄SignupScreen.js
│   ├── 📁calendar
│     ├── 📄CalendarHome.js
│     └── 📄CalendarRecord.js
│   ├── 📁chat
│     ├── 📄ChatHome.js
│     └── 📄ChatRoom.js
│   ├── 📁climbing
│     ├── 📄ClimbingFinish.js
│     ├── 📄ClimbingGPS.js
│     ├── 📄ClimbingHome.js
│     └── 📄ClimbingHomefix.js
│   ├── 📁map
│     ├── 📄MapHome.js
│     └── 📄MountainDetail.js
│   └── 📁rank
│     ├── 📄RankGraph.js
│     └── 📄RankHome.js
│ └── 📁store          # redux-toolkit
│   ├── 📄Auth.js
│   ├── 📄Climbing.js
│   ├── 📄Map.js
│   └── 📄index.js
├── 📄.buckconfig
├── 📄.eslintrc.js
├── 📄.flowconfig
├── 📄.gitignore
├── 📄.node-version
├── 📄.prettierrc.js
├── 📄.ruby-version
├── 📄.watchmanconfig
├── 📄App.js
├── 📄Gemfile
├── 📄app.json
├── 📄babel.config.js
├── 📄index.js
├── 📄metro.config.js
├── 📄package-lock.json
├── 📄package.json
├── 📄react-native.config.js
└── 📄yarn.lock
```

**[ BACK-END ]**

```
└── src
    ├── main
    │ 	├── java
    │ 	│ 	└── com
    │ 	│ 	└── 📁 climbingBear
    │ 	│ 	└── 📁 demo
    │ 	│ 	├── 📄 Application.java
    │ 	│ 	├── 📁 domain
    │ 	│ 	│ 	├── 📁 user
    │ 	│ 	│ 	│ 	├── 📁 controller
    │ 	│ 	│ 	│ 	├── 📁 dto
    │ 	│ 	│ 	│ 	├── 📁 exception
    │ 	│ 	│ 	│ 	├── 📁 repository
    │ 	│ 	│ 	│ 	├── 📁 service
    │ 	│ 	│ 	│ 	└── 📁 entity
    │ 	│ 	│ 	├── 📁 chat
    │ 	│ 	│ 	│ 	├── 📁 controller
    │ 	│ 	│ 	│ 	├── 📁 dto
    │ 	│ 	│ 	│ 	├── 📁 exception
    │ 	│ 	│ 	│ 	├── 📁 repository
    │ 	│ 	│ 	│ 	├── 📁 service
    │ 	│ 	│ 	│ 	└── 📁 entity
    │ 	│ 	│ 	├── 📁 mntn
    │ 	│ 	│ 	│ 	├── 📁 controller
    │ 	│ 	│ 	│ 	├── 📁 dto
    │ 	│ 	│ 	│ 	├── 📁 exception
    │ 	│ 	│ 	│ 	├── 📁 repository
    │ 	│ 	│ 	│ 	├── 📁 service
    │ 	│ 	│ 	│ 	└── 📁 entity
    │ 	│ 	│ 	└── 📁 record
    │ 	│ 	│ 	 	├── 📁 controller
    │ 	│ 	│ 	 	├── 📁 dto
    │ 	│ 	│ 	 	├── 📁 exception
    │ 	│ 	│ 	 	├── 📁 repository
    │ 	│ 	│ 	 	├── 📁 service
    │ 	│ 	│ 	 	└── 📁 entity
    │ 	│ 	└── 📁 global
    │ 	│ 	├── 📁 config
    │ 	│ 	│ 	└── 📁 swagger
    │ 	│ 	│ 	├── 📄 SecurityConfig
    │ 	│ 	│ 	└── 📄 SwaggerConfig
    │ 	│ 	├── 📁 util
    │ 	│ 	│ 	└── 📁 jwt
    │ 	│ 	│ 	├── 📄 AccessTokenInterceptor
    │ 	│ 	│ 	├── 📄 RefreshTokenInterceptor
    │ 	│ 	│ 	└── 📄 JwtProvider
    │ 	│ 	└── 📁 common
    │ 	│ 	└── 📄 CommonResponse
    │ 	│  
    │ 	└── 📁 resources
    │ 	├── 📁 static
    │ 	│ 	└── 📄 climbingbear-367901-07c9a11fe26a.json
    │ 	├── 📁 templates
    │ 	└── 📄 application.properties
```
