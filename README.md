# Chrome Momentum Clone

>크롬 앱 Momentum 클론 프로젝트  
>https://a11chan.github.io/my-momentum/

</br>

## 1. 제작 기간
* 2022/03/07 ~ 2022/03/21

</br>

## 2. 사용 기술
* HTML5
* CSS
* SASS
* JavaScript

</br>

## 3. 프로젝트 목표
* To Do 앱 클론 코딩을 통한 JavaScript 기초 학습
* 이전에 배웠던 HTML, CSS, SASS 복습
* 외부 API 활용

</br>

## 4. 주요 기능  
- 필수기능  
  - [x] 랜덤 배경 이미지  
  - [x] 실시간 시계  
  - [x] 로컬 스토리지를 사용한 로그인  
  - [x] 로컬 스토리지를 사용한 투두리스트  
  - [x] 날씨와 위치 (geolocation)  
- 추가기능  
  - [x] 반응형
  - [x] 사용자 리셋  
  - [x] 할 일 목록 취소선  
  - [x] 격언, 날씨 상세 링크  
  - [x] 날씨 상태에 맞는 아이콘 로딩  
  - [ ] ToDo 수정 기능  
  - [ ] ToDo 복원 기능  
  - [ ] 출근 예상 시간 지도로 보여주기  
  - [ ] 출근 준비할 동안 들을 배경음악 재생  
  - [ ] 메인 컬러 추출 플러그인 사용하여 테마 변경

</br>

## 5. 주요 코드
``` javascript

const API_KEY = "c35045143ed613ee20048c6710e31f03";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
      });
}
function onGeoErr() {
  alert("Cant' find you. No weather infomation for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

```