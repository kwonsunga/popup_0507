// console.log("Hi");
// setTimeout(function() {
//     console.log("sunga");
// }, 3000);
// setTimeout(function() {
//     console.log("bye");
// }, 3000);
//setTimeout(콜백함수, 시간);
//setTimeout(함수이름, 시간);
//function 함수이름() {}

//setTimeout(익명함수, 시간)
//setTimeout(function (){}, 시간)
//setTIMEount(()=>{), 시간})

//1.5초 후에 modal 창이 뜨도록 바꾸기
//DOM 들고오기
//CSS DOM 으로 조작 display: inline
//setTimeout 사용

//X버튼 누르면 다시 안보이게
//버튼은 이벤트리스너 추가해야함
//display: none

const modalEl = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
//form을 DOM으로 들고옴
const declineBtn = document.getElementById("decline");
const modalCloseBtns = document.getElementById("modal-choice-btns");

setTimeout(function(){
    modalEl.style.display = "inline"
}, 1500);

declineBtn.addEventListener('mouseenter', function(){
    // console.log("Hovered");
    modalCloseBtns.classList.toggle("modal-choice-btns-reverse");
});

modalCloseButton.addEventListener("click", function(){
    modalEl.style.display ="none"
})

//accept 버튼 누르면 
//console.log로 form 제출 완료 라고 띄우기



consentForm.addEventListener("submit", function(){
    event.preventDefault(); //폼에서 submit을 하면 새로고침이 되는데 이걸 방지
    const consentFormData = new FormData(consentForm);
    // console.log(consentFormData.get('fullName'));
    // console.log(consentFormData.get('email'));
    const name = consentFormData.get("FullName")
   // const email = consentFormData.get("email")

    // console.log("form 제출 완료") //폼에서 버튼은 기본값이 type="submit
//   <div class="modal-inner-loading">
//   <img src="images/loading.svg" class="loading">
//   <p id="upload-text">Uploading your data to the dark web...</p>
// </div>
//HTML에서 DOM을 추가하는 방법 > innerHTML

const modalText = document.getElementById("modal-text")
modalText.innerHTML =  
 `<div class="modal-inner-loading">
<img src="images/loading.svg" class="loading">
<p id="upload-text">Uploading your data to the dark web...</p>
</div>`;

//1.5초 후에 upload-text 의 텍스트값을 Making the sale... 으로 바꾸기
setTimeout(function() {
    const uploadText= document.getElementById("upload-text");
    uploadText.innerText = "Making the sale...";
}, 1500);

//3초 후에 modal-inner의 HTML을
//<h2>고맙습니다</h2>
//<p>개인정보를 모두 팔아넘겼습니다</p>
//<div class="idiot-gif" <img src="images/pirate.gif"></div>

setTimeout(function() {
    const modalInner = document.getElementById("modal-inner")
    modalInner.innerHTML =
    `<h2>고맙습니다 ${name}</h2>
    <p>개인정보를 모두 팔아넘겼습니다</p>
    <div class="idiot-gif"> <img src="images/pirate.gif"></div>`;
    //다 탈취하고 나면 X버튼 누를 수 있게 설정
    modalCloseButton.disabled = false;
    }, 3000);


});



//form에 사용자가 입력한 갑은
//FormData()라는 함수로 쉽게 가져올 수 있다.
//form의 DOM 객체 이름이 form1이다
//const formData = new FormData(form1)
//객체 형식으로 받아서 쓸 수 있다.

