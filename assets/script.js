var timer = false;
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let statusButton = document.getElementById("statusButton");
let timerEvent = setInterval(setTime, 1000);

function setTime() {
  if (timer == true) {
    ++totalSeconds;
    console.log(totalSeconds);
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function startTimer() {
  timer = true;
  totalSeconds = 0;
  secondsLabel.innerHTML = 00;
  minutesLabel.innerHTML = 00;
  statusButton.className = "btn btn-danger";
  statusButton.innerHTML = "توقف";
  statusButton.onclick = stopTimer;
  document.getElementById("progressPanel").style.display = "none";
}

function stopTimer() {
  timer = false;
  document.getElementById("progressPanel").style.display = "block";
  statusButton.className = "btn btn-primary";
  statusButton.innerHTML = "ابدأ";
  statusButton.onclick = startTimer;
}

function saveProgess() {
  let text = document.getElementById("exampleFormControlTextarea1").value;
  let timeString = `(${minutesLabel.innerHTML}:${secondsLabel.innerHTML})`;
  document.getElementById("myProgessList").innerHTML += `      
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">عملي</h5>
      <h6 class="card-subtitle mb-2 text-muted">${timeString}</h6>
      <p class="card-text">${text}</p>
    </div>
  </div>`;
}
