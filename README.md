# 못말리는 현기차팀 FrontEnd

### 팀원 소개
* FE 강준우
* FE 한승연

### 협업 전략
* Backlog
  * Product Backlog는 마일스톤으로 설정함
  * Sprint Backlog는 마일스톤에 작성함
* Issue
  * Sprint Backlog를 기반으로 Issue를 생성함
* Branch
  * branch naming: feature/{feature-name}
* PR
  * PR은 서로 리뷰 후 Merge함
  * PR naming: \[Feature\] {작업 내용}
* Commit
  * Issue의 task 작업 크기를 넘지 않도록 함

### 그라운드 룰
* 메시지를 확인했다면 최소한 이모지를 사용해서 반응함
* 스크럼 내용은 기록으로 남김
* 금요일 오전에 main에 dev를 merge함

### 기획/디자인
[Figma](https://www.figma.com/design/OKDklxTfqRuOKwFiXpwwqi/Handoff_%EB%AA%BB%EB%A7%90%EB%A6%AC%EB%8A%94-%ED%98%84%EA%B8%B0%EC%B0%A8~?node-id=0-1&t=UF1RvsAkEytBC7cD-0)

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
    ├── api                         # api 호출 Function
    ├── assets                      # fonts, images, svg resoucres
    ├── components                  # 페이지를 구성하는 components
    ├── constants                   # api, message, pagination 및 공통적으로 사용되는 constants
    ├── hooks                       # custom hooks        
    ├─- mocks                       # MSW를 활용한 mock data, handler                         
    ├── pages                       # 페이지를 구성하는 레이아웃
    ├── providers                   # Context Provider             
    ├── styles                      # Global Style                
    ├── utils                       # date, validator 관련 util 함수
```

### Meeting Minutes
TEAM: [Notion](https://www.notion.so/bside/19054254d3d14ebca54704c52c370e46)

FE: [Notion](https://www.notion.so/bside/4dac5712789243f09ed25a08c1d02670?v=061f3d1be85e4888bfa2769e516364c8)

