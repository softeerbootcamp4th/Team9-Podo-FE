# 못말리는 현기차팀 FrontEnd

[![HYUNDAI SELTOS EVENT](https://www.hyundaiseltos.site/OGImage.png)](https://www.hyundaiseltos.site/)

## 목차
1. [👥 팀원 소개](#-팀원-소개)
2. [🛠️ Tech Stacks](#-Tech-Stacks)
3. [🤝 협업 전략](#-협업-전략)
4. [📖 그라운드 룰](#-그라운드-룰)
5. [🗂️ Components Architecture Diagram](#🗂️-Components-Architecture-Diagram)
6. [🗺️ Route](#🗺️-Route)
7. [🚀 주요 개발 사항](#-주요-개발-사항)
8. [🔗 링크 모음](#-링크-모음)

## 👥 팀원 소개
<table >
  <tbody>
      <td align="center">
        <a href="https://github.com/jw0097">
            <img src="https://avatars.githubusercontent.com/u/76507017?v=4" width="200px;" height="200px;" alt="강준우"/>
<h3><b>강준우</b></h3></a></td>
        <td align="center">
        <a href="https://github.com/leve68">
            <img src="https://avatars.githubusercontent.com/u/128668023?s=400&v=4" width="200px;" height="200px;" alt="한승연"/>
<h3><b>한승연</b></h3></a></td>
  </tbody>
</table>

## 🛠️ Tech Stacks

### Cowork Tools
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### Development
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ts](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)


### Test
![jest](	https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![rtl](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
<img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white">
### Deploy
![aws](https://img.shields.io/badge/Amazon_AWS_S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![cloud](https://img.shields.io/badge/Amazon_AWS_Cloud-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

### ETC
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![MSW](https://img.shields.io/badge/MSW-FF4500?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


## 🤝 협업 전략
### Issue Template
```
## 구현 기능

1-2문장으로 요약.

## 상세 작업 내용

- [x] 작업 내용

## 🔆 참고 사항 (선택)

## ⏰ 예상 소요 기간
```

### PR Template
```
## 🎯 이슈 번호

## 💡 작업 내용

- [x] 작업 내용

## 💡 자세한 설명

## 📗 참고 자료 (선택)

## 📢 리뷰 요구 사항 (선택)

## 🚩 후속 작업 (선택)

## ✅ 셀프 체크리스트
```

### Folder Structure
```
Team9-Podo-FE
├── .github                         # Feature, PR, Bug template
├── public                          # public
└── src
    ├── common                        # fonts, images, svg, video resoucres 
    ├── admin                         # 어드민 페이지
    └── client                        # 이벤트 페이지
        ├── api                         # api 호출 Function
        ├── components                  # 페이지를 구성하는 components
        ├── constants                   # api, message, pagination 및 공통적으로 사용되는 constants
        ├── hooks                       # custom hooks        
        ├─- mocks                       # MSW를 활용한 mock data, handler                         
        ├── pages                       # 페이지를 구성하는 레이아웃
        ├── providers                   # Context Provider
        ├── router                      # 라우터           
        ├── styles                      # Global Style
        ├── types                       # 타입       
        ├── utils                       # date, validator 관련 util 함수
```

### Branch Naming
```
feature/{feature-name}
```

## 📖 그라운드 룰
* Product Backlog를 마일스톤으로 작성함
* 매일 10시 데일리 스크럼을 통해 진행상황을 공유함
* 금요일 오전에 main에 dev를 merge함
* PR은 merge하기 전 서로 리뷰함
* Commit은 Issue task의 작업 크기를 넘지 않도록 함
* 메시지를 확인했다면 최소한 이모지를 사용해서 반응함

## 🗂️ Components Architecture Diagram
![Softeer4th_Podo](https://github.com/user-attachments/assets/648c3bba-690e-4742-b689-7106508da049)
[LucidChart](https://lucid.app/lucidchart/54de6901-4a2c-4e7f-9be6-e04ce897e22b/edit?viewport_loc=-4141%2C-2304%2C7416%2C3874%2C0_0&invitationId=inv_1efdb6e5-bc22-4187-98b5-ce5c579189e2)

## 🗺️ Route

| Page | path | children |
| --- | --- | --- |
| Main | / |  |
| Event1 | /event1 |
| Event1Result | /event1/result |  |
| Event2 | /event2 | quiz1 |
|  |  | quiz2 |
|  |  | quiz3 |
|  |  | quiz4 |
| Event2Result | /event2/result |  |
| AuthModal | /auth-modal |  |

## 🚀 주요 개발 사항
- Bundler 설정 (webpack)
- TDD (jest, storybook)

## 🔗 링크 모음
### 🎨 기획/디자인
[Figma](https://www.figma.com/design/OKDklxTfqRuOKwFiXpwwqi/Handoff_%EB%AA%BB%EB%A7%90%EB%A6%AC%EB%8A%94-%ED%98%84%EA%B8%B0%EC%B0%A8~?node-id=0-1&t=UF1RvsAkEytBC7cD-0)

### 📝 Meeting Minutes
TEAM: [Notion](https://www.notion.so/bside/19054254d3d14ebca54704c52c370e46)

FE: [Notion](https://www.notion.so/bside/4dac5712789243f09ed25a08c1d02670?v=061f3d1)







