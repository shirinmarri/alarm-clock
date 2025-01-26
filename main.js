let selectmenu = document.querySelectorAll(`select`);
let timebox = document.querySelector(`.time`);
let setAlarmBtn = document.querySelector(`button`);
let ringTone = new Audio("./files/ringtone.mp3");
let alarmTime = null;
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

checkState();
});
function checkState(){
    console.log(alarmState);
    if (alarmState ===`noset`){
        content.classList.add(`disable`);
        setAlarmBtn.innerText = `Clear Alarm`;
        alarmState=`set`
} else {
    content.classList.remove(`disable`);
    alarmTime =``;
    ringTone.pause();
    alarmState =`noset`;
    setAlarmBtn.innerText = `Set Alarm`;


}

}
// let selectmenu = document.querySelectorAll(`select`);
// let timebox = document.querySelector(`.time`);
// let setAlarmBtn = document.querySelector(`button`);
// let ringTone = new Audio("./files/ringtone.mp3");
// let alarmTime = null;  // Initialize alarmTime properly
// let alarmState = `noset`; // Ensure alarmState starts correctly
// let content = document.querySelector(`.content`);

// // Populate hours dropdown (00-23)
// for (let i = 23; i >= 0; i--) {
//   let formattedHour = i < 10 ? `0` + i : i;
//   let option = `<option value="${formattedHour}">${formattedHour}</option>`;
//   selectmenu[0].firstElementChild.insertAdjacentHTML(`afterend`, option);
// }

// // Populate minutes dropdown (00-59)
// for (let i = 59; i >= 0; i--) {
//   let formattedMinute = i < 10 ? `0` + i : i;
//   let option = `<option value="${formattedMinute}">${formattedMinute}</option>`;
//   selectmenu[1].firstElementChild.insertAdjacentHTML(`afterend`, option);
// }

// // Update time every second
// setInterval(() => {
//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();
//   h = h < 10 ? `0` + h : h;
//   m = m < 10 ? `0` + m : m;
//   s = s < 10 ? `0` + s : s;

//   timebox.innerHTML = `${h} : ${m} : ${s}`;
  
//   // Debugging: Log alarmTime each second
//   console.log("Current alarmTime:", alarmTime);

//   // Check if alarm should ring
//   if (alarmTime && alarmTime === `${h}:${m}`) {
//     console.log("Alarm ringing!");
//     ringTone.play();
//     ringTone.loop = true;
//   }
// }, 1000);

// // Button click to set/clear alarm
// setAlarmBtn.addEventListener(`click`, () => {
//   let selectedHour = selectmenu[0].value;
//   let selectedMinute = selectmenu[1].value;

//   // Debugging: Log selected values
//   console.log("Selected hour:", selectedHour);
//   console.log("Selected minute:", selectedMinute);

//   if (selectedHour === "hour" || selectedMinute === "minute") {
//     alert(`Please select a valid time`);
//     return;
//   }

//   alarmTime = `${selectedHour}:${selectedMinute}`;
//   console.log("New alarm set for:", alarmTime);

//   checkState(); // Toggle alarm state
// });

// // Function to handle alarm state
// function checkState() {
//   console.log("Current state before change:", alarmState);
  
//   if (alarmState === `noset`) {
//     content.classList.add(`disable`);
//     setAlarmBtn.innerText = `Clear Alarm`;
//     alarmState = `set`; // Update global state
//   } else {
//     content.classList.remove(`disable`);
//     alarmTime = null; // Reset alarmTime properly
//     ringTone.pause();
//     alarmState = `noset`; // Update global state
//     setAlarmBtn.innerText = `Set Alarm`;
//   }

//   console.log("Updated state:", alarmState);
// }
