var mraa = require('mraa');
var pinID = 13;
var durationMSec = 500;

function blink(pin) {
    pin.write(1);
    setTimeout(function () {
        pin.write(0);
    }, durationMSec);
}

var ledPin = new mraa.Gpio(pinID);
ledPin.dir(mraa.DIR_OUT);

setInterval(blink, durationMSec * 2, ledPin);
