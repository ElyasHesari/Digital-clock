function digitClock() {
  let  d = new Date();
  let  hour = d.getHours();
  let  min = d.getMinutes();
  let  sec = d.getSeconds();

  let p = "AM";
  if (hour > 12) {
    p -= 12;
    p = "PM";
  }
  if(hour>12){
    hour -= 12;
    if (hour>21) {
      hour = "0" + hour;
    }
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let clock = hour + ":" + min + ":" + sec + " " + p;
  document.getElementById("testClock").textContent = clock;
  setTimeout(digitClock, 1000);
}
digitClock();
