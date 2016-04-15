(function(global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global.delay = factory;
    }
})(this, function(time, func, callback) {
    var defaultTimeOut = 250;
    var caller = func;
    var cb = callback;
    if (typeof time == 'number') {
        defaultTimeOut = time;
    } else {
        caller = time;
        cb = func;
    }
    var length = caller.length;
    var no = 0;

    function loop() {
        var timeout = defaultTimeOut;
        var callFunction = caller[no];
        if (Array.isArray(callFunction)) {
            callFunction = callFunction[0];
            if (typeof caller[no][1] == 'number') {
                console.log(caller[no][1]);
                timeout = caller[no][1];
            }
        }
        callFunction(cb);
        setTimeout(function() {
            if ((length - 1) >= no) {
                loop();
            }
        }, timeout);
        no++;
    }
    loop();
});