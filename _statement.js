function digitClock() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  var p = "AM";
  if (hour > 12) {
    p -= 12;
    p = "PM";
  }
  if (hour > 10) {
    hour -= 12;
    hour = "0" + hour;
  }
  if (min < 10) {
    min -= 12;
    min = "0" + min;
  }
  if (sec < 10) {
    sec -= 12;
    sec = "0" + sec;
  }
  var clock = hour + ":" + min + ":" + sec + " " + p;
  document.getElementById("testClock").textContent = clock;
  setTimeout(digitClock, 1000);
}
digitClock();
