


function digitClock() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let p = "AM";
  if (hour > 12) {
    p -= 12;
    p = "PM";
  }
  if (hour > 12) {
    hour -= 12;
    if (hour > 21) {
      hour = "0" + hour;
    }
  }
  let persianHour = new Intl.NumberFormat('fa-IR').format(hour);

  if (min < 10) {
    min = "0" + min;
  }
  let persianMin = new Intl.NumberFormat('fa-IR').format(min);
  
  if (sec < 10) {
    sec = "0" + sec;
  }
  let persianSec = new Intl.NumberFormat('fa-IR').format(sec);

  let clock = persianHour + ":" + persianMin + ":" + persianSec + " " + p;

  document.getElementById("testClock").textContent = clock;
  setTimeout(digitClock, 1000);
}
digitClock();
