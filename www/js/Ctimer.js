let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;
var time1 = localStorage.getItem("cusTim1") ;
var time2 = localStorage.getItem("cusTim2") ;
var time3 = localStorage.getItem("cusTim3") ;
var col1 = localStorage.getItem("cusCol1");
var col2 = localStorage.getItem("cusCol2");
var col3 = localStorage.getItem("cusCol3");
var currentCol = 1;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  var offset = - length - length * value / (timePercent);
  progressBar.style.strokeDashoffset = offset; 
  pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`; 
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');

let intervalTimer;
let timeLeft;
//let combinedWholeTime = time1 + time2 + time3;
let wholeTime = time1 * 60; // manage this to set the whole time 
let isPaused = false;
let isStarted = false;

var ledState = 0;


update(wholeTime,wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  }
}

for (var i = 0; i < setterBtns.length; i++) {
    setterBtns[i].addEventListener("click", function(event) {
        var param = this.dataset.setter;
        switch (param) {
            case 'minutes-plus':
                changeWholeTime(1 * 60);
                break;
            case 'minutes-minus':
                changeWholeTime(-1 * 60);
                break;
            case 'seconds-plus':
                changeWholeTime(1);
                break;
            case 'seconds-minus':
                changeWholeTime(-1);
                break;
        }
      displayTimeLeft(wholeTime);
    });
}

function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);
  
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0 && currentCol==1){
      if (col1 === "red"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("rt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("rt",newRTtotal);
      } else if (col1 === "blue"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("bt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("bt",newRTtotal);
      } else if (col1 === "green"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("gt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("gt",newRTtotal);
      } else if (col1 === "yellow"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("yt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("yt",newRTtotal);
      } else if (col1 === "white"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("wt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("wt",newRTtotal);
      }else if (col1 === "purple"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("pt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("pt",newRTtotal);
      }else if (col1 === "turquoise"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("tt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("tt",newRTtotal);
      }
      led();
      currentCol++;
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      wholeTime = time2 * 60;
      displayTimeLeft(wholeTime);
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');
      return ;
    } else if(timeLeft < 0 && currentCol==2){
      if (col2 === "red"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("rt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("rt",newRTtotal);
      } else if (col2 === "blue"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("bt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("bt",newRTtotal);
      } else if (col2 === "green"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("gt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("gt",newRTtotal);
      } else if (col2 === "yellow"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("yt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("yt",newRTtotal);
      } else if (col2 === "white"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("wt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("wt",newRTtotal);
      }else if (col2 === "purple"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("pt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("pt",newRTtotal);
      }else if (col2 === "turquoise"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("tt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("tt",newRTtotal);
      }
      led();
      currentCol++;
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      wholeTime = time3 * 60;
      displayTimeLeft(wholeTime);
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');
      return ; 
    }else if(timeLeft < 0 && currentCol==3){
      if (col3 === "red"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("rt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("rt",newRTtotal);
      } else if (col3 === "blue"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("bt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("bt",newRTtotal);
      } else if (col3 === "green"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("gt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("gt",newRTtotal);
      } else if (col3 === "yellow"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("yt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("yt",newRTtotal);
      } else if (col3 === "white"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("wt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("wt",newRTtotal);
      }else if (col3 === "purple"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("pt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("pt",newRTtotal);
      }else if (col3 === "turquoise"){
      var totalThisRun = parseInt(wholeTime);
      var totalBeforeThisRun = parseInt(localStorage.getItem("tt"));
      var newRTtotal = totalThisRun + totalBeforeThisRun;
      localStorage.setItem("tt",newRTtotal);
      }
      led();
      currentCol=1;
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      wholeTime = time3 * 60;
      displayTimeLeft(wholeTime);
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');
      return ; 
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}
function pauseTimer(event){
  if(isStarted === false){
    timer(wholeTime);
    isStarted = true;
    this.classList.remove('play');
    this.classList.add('pause');
    
    setterBtns.forEach(function(btn){
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });

  }else if(isPaused){
    this.classList.remove('play');
    this.classList.add('pause');
    timer(timeLeft);
    isPaused = isPaused ? false : true
  }else{
    this.classList.remove('pause');
    this.classList.add('play');
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true ;
  }
}

function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

pauseBtn.addEventListener('click',pauseTimer);

function led(){
  if (currentCol==1){
         // alert("toggle LED #13");
        // extract the IP the user gives us.
        hostIP = $("#targetIP").val();
        // if they did not give us one, use 'defaultHostIP'.
        if (! hostIP) {
            hostIP = "192.168.4.1";
            // Insert the IP we will use in to the form
            $("#targetIP").val(hostIP);
        }
        // create our partial URL with REST API
        //targetURL = "http://192.168.4.1/red/on"
        ledIntermediateState = "error"; // if we ever see this, we have problems.
        // toggle the state based on our last state.
        if (ledState === 0) {
            targetURL = "http://192.168.4.1/" + col1 + "/on"
            ledState = 1;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to OFF";
        } else {
            targetURL = "http://192.168.4.1/" + col1 + "/off"
            ledState = 0;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to ON";
            let timerInterval
            if (timeLeft <= 0){
              Swal.fire({
              title: 'First Custom Colour Complete',
              html: 'Starting second custom colour in 3 seconds',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                $( "#pause" ).click();
              }
            })
        }
      }
        $("#led13").html(ledIntermediateState);
        // Actually make the call to the webserver.
        $.get(myurl, function (data) {
            //console.log(data);
            $("#led13").html(data);
        });
      } else if (currentCol==2){
         // alert("toggle LED #13");
        // extract the IP the user gives us.
        hostIP = $("#targetIP").val();
        // if they did not give us one, use 'defaultHostIP'.
        if (! hostIP) {
            hostIP = "192.168.4.1";
            // Insert the IP we will use in to the form
            $("#targetIP").val(hostIP);
        }
        // create our partial URL with REST API
        //targetURL = "http://192.168.4.1/red/on"
        ledIntermediateState = "error"; // if we ever see this, we have problems.
        // toggle the state based on our last state.
        if (ledState === 0) {
            targetURL = "http://192.168.4.1/" + col2 + "/on"
            ledState = 1;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to OFF";
        } else {
            targetURL = "http://192.168.4.1/" + col2 + "/off"
            ledState = 0;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to ON";
            let timerInterval
            if (timeLeft <= 0){
            Swal.fire({
              title: 'Second Custom Colour Complete',
              html: 'Starting third custom colour in 3 seconds',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                $( "#pause" ).click();
              }
            })
        }
      }
        $("#led13").html(ledIntermediateState);
        // Actually make the call to the webserver.
        $.get(myurl, function (data) {
            //console.log(data);
            $("#led13").html(data);
        });

      }else if (currentCol==3){
         // alert("toggle LED #13");
        // extract the IP the user gives us.
        hostIP = $("#targetIP").val();
        // if they did not give us one, use 'defaultHostIP'.
        if (! hostIP) {
            hostIP = "192.168.4.1";
            // Insert the IP we will use in to the form
            $("#targetIP").val(hostIP);
        }
        // create our partial URL with REST API
        //targetURL = "http://192.168.4.1/red/on"
        ledIntermediateState = "error"; // if we ever see this, we have problems.
        // toggle the state based on our last state.
        if (ledState === 0) {
            targetURL = "http://192.168.4.1/" + col3 + "/on"
            ledState = 1;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to OFF";
        } else {
            targetURL = "http://192.168.4.1/" + col3+ "/off"
            ledState = 0;
            myurl = encodeURI(targetURL);
            ledIntermediateState = "IOT set to ON";
            let timerInterval
            if (timeLeft <= 0){
            Swal.fire({
              title: 'Your Custom Program is Complete',
              html: 'Press play to run your custom program again',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
        }
        }
        $("#led13").html(ledIntermediateState);
        // Actually make the call to the webserver.
        $.get(myurl, function (data) {
            //console.log(data);
            $("#led13").html(data);
        });

      }

    }

