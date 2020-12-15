// Global Variables
var defaultHostIP = "192.168.4.1";
var hostIP        = "";
var targetURL     = "";
var ledState      = 0;
var ledIntermediateState = "";
var cusCol1       = "";
var cusCol2       = "";
var cusCol3       = "";
var cusTim1       = 0;
var cusTim2       = 0;
var cusTim3       = 0;

//
function onDeviceReady() {
    // update the input field with a placeholder
    $("#targetIP").attr("placeholder", defaultHostIP);
    if (device.platform === "iOS") {
        // hide Exit button. They don't have one on iOS devices.
        $("#exitApp").addClass("hidden");
        // deals with post-iOS-7 change that covers the status bar
        document.body.style.marginTop = "20px";
    } else if (device.platform == 'Android') {
        // Get rid of 300ms delay 
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body); 
        },false);
        // Exit App
        document.getElementById('exitApp').addEventListener('click', function() {
            navigator.app.exitApp();
        });
    } else if (device.platform == 'browser') {
        // hide Exit button. Browser does not exit.
        document.getElementById('exitApp').classList.add("hidden");
    }
    //
    // This fires only when the button is pressed.
    $("#pause").click(function() {
        alert("toggle LED #13");
        // extract the IP the user gives us.
        hostIP = $("#targetIP").val();
        // if they did not give us one, use 'defaultHostIP'.
        if (! hostIP) {
            hostIP = defaultHostIP;
            // Insert the IP we will use in to the form
            $("#targetIP").val(hostIP);
        }
        // create our partial URL with REST API
        targetURL = "http://" + hostIP + "/red/off"
        ledIntermediateState = "error"; // if we ever see this, we have problems.
        // toggle the state based on our last state.
        if (ledState === 0) {
            ledState = 1;
            myurl = encodeURI(targetURL + "0");
            ledIntermediateState = "IOT set to OFF";
        } else {
            ledState = 0;
            myurl = encodeURI(targetURL + "1");
            ledIntermediateState = "IOT set to ON";
        }
        $("#led13").html(ledIntermediateState);
        // Actually make the call to the webserver.
        $.get(myurl, function (data) {
            //console.log(data);
            $("#led13").html(data);
        });
    });
}
//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    // Detect if we are using Cordova/Phonegap or a browser.
    // https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
    var isCordovaApp = (typeof window.cordova !== "undefined");

    // Is it a device we know?
    if ( isCordovaApp === true ) {
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        onDeviceReady();
    }
});


var slider1 = document.getElementById("myRange");
var demo = document.getElementById("demo");
demo.innerHTML = slider1.value;

slider1.oninput = function() {
  demo.innerHTML = this.value;
  cusTim1 = this.value;

}

var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo2");
output.innerHTML = slider2.value;

slider2.oninput = function() {
  output.innerHTML = this.value;
  cusTim2 = this.value
}

var slider3 = document.getElementById("myRange3");
var output2 = document.getElementById("demo3");
output.innerHTML = slider3.value;

slider3.oninput = function() {
  output2.innerHTML = this.value;
  cusTim3 = this.value
}

function setCol1(col1) {
   cusCol1 = col1;
   localStorage.setItem("cusCol1", cusCol1);

}

function setCol2(col2) {
  cusCol2 = col2;
  localStorage.setItem("cusCol2", cusCol2);
}

function setCol3(col3) {
  cusCol3 = col3;
  localStorage.setItem("cusCol3", cusCol3);
}

function setTim1(sl1){
  localStorage.setItem("cusTim1", sl1);
}

function setTim2(sl2){
  localStorage.setItem("cusTim2", sl2);
}

function setTim3(sl3){
  localStorage.setItem("cusTim3", sl3);
}
