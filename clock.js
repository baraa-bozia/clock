
let date;
let time;
setInterval(() => {
  date = new Date();
  time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  document.getElementById('time').innerHTML = time;
}, 1000);
