let selectmenu = document.querySelectorAll(`select`);
let timebox = document.querySelector(`.time`);
let setAlarmBtn = document.querySelector(`button`);
let ringTone = new Audio("./files/ringtone.mp3");
let alarmTime;
let alarmState = `noset`;
let content = document.querySelector(`.content`);

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? `0` + i : i;

  let option = `<option value="${i}" > ${i} </option>`;
  selectmenu[0].firstElementChild.insertAdjacentHTML(`afterend`, option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0` + i : i;

  let option = `<option value="${i}" > ${i} </option>`;
  selectmenu[1].firstElementChild.insertAdjacentHTML(`afterend`, option);
}
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? `0` + h : h;
  m = m < 10 ? `0` + m : m;
  s = s < 10 ? `0` + s : s;

  timebox.innerHTML = `${h} : ${m} : ${s} `;
  if (alarmTime == `${h}:${m}`) {
    console.log("ring");
    ringTone.play();
    ringTone.loop = true;
  }
}, 1000);
setAlarmBtn.addEventListener(`click`, () => {
  alarmTime = `${selectmenu[0].value}:${selectmenu[1].value}`;
  console.log(alarmTime);

  if (alarmTime.includes(`hour`) || alarmTime.includes(`minute`)) {
    return alert(`Please select a valid time`);
  }
  if (alarmState == `noset`){
    content.classList.add(`disable`);
    setAlarmBtn.innerText = `Clear Alarm`;
    alarmState=`set`;
}else{
content.classList.remove(`disable`);
alarmTime =``;
ringTone.pause();
alarmState =`noset`;
setAlarmBtn.innerText = `Set Alarm`;

}

});
function checkState(alarmState){
    if (alarmState == `noset`){
        content.classList.add(`disable`);
        setAlarmBtn.innerText = `Clear Alarm`;
        alarmState=`set`;
}else{
    content.classList.remove(`disable`);
    alarmTime =``;
    ringTone.pause();
    alarmState =`noset`;
    setAlarmBtn.innerText = `Set Alarm`;


}

}
