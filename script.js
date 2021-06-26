var span = document.getElementById('time');

function time() {
  var d = new Date();
  // var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var am_pm = 'AM'
  // if (s < 10) {
	// s = "0" + s;
  // }
  if (m < 10) {
	m = "0" + m;
  }
  if (h < 10) {
	h = "0" + h;
  }
  if (h >12){
    am_pm = 'PM'
  }
  if (h > 12){
    h = h - 12;
  }
  span.textContent = h + ":" + m + ' ' + am_pm;
}

setInterval(time, 1000);