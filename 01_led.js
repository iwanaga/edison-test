var mraa = require('mraa');
var pinID = 13;
var durationMSec = 500;

function blink(pin, duration) {
    pin.write(1);      // LED ON
    setTimeout(function () {
        pin.write(0);  // LED OFF
    }, duration);
}

var ledPin = new mraa.Gpio(pinID);
ledPin.dir(mraa.DIR_OUT);

setInterval(blink,  durationMSec * 2,
            ledPin, durationMSec);
