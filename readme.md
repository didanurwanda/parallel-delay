## Parallel Delay

Run many function in sequential timeout

## Download

NPM

```
npm install parallel-delay --save
```

Bower

```
bower install parallel-delay --save
```

or download [here](https://github.com/didanurwanda/parallel-delay/archive/master.zip)

```HTML
<script type="text/javascript" src="path/to/parallel-delay/delay.js"></script>
```

## Define

NodeJS

```JavaScript
var delay = require('parallel-delay');
```

RequireJS

```JavaScript
define([
	'/bower_components/parallel-delay/delay'
], function(delay) {
	// your code
});
```

or global variable name '*delay*'

## Quick Start

Default setting

```JavaScript
var one = function(callback) {
    callback(null, 'message one');
}
var two = function(callback) {
    callback(null, 'message two');
}
var there = function(callback) {
    callback(null, 'message there');
}

delay([ one, two, there ], function(err, message) {
    console.log(message);
});
```

General timeout

```JavaScript
var one = function(callback) {
    callback(null, 'message one');
}
var two = function(callback) {
    callback(null, 'message two');
}
var there = function(callback) {
    callback(null, 'message there');
}

delay(2000, [ one, two, there ], function(err, message) {
    console.log(message);
});
```

Individual timeout


```JavaScript
var one = function(callback) {
    callback(null, 'message one');
}
var two = function(callback) {
    callback(null, 'message two');
}
var there = function(callback) {
    callback(null, 'message there');
}

delay([ 
    [one, 1500],
    [two, 1000],
    [there, 1500]
], function(err, message) {
    console.log(message);
});
```

General and Individual timeout

```JavaScript
var one = function(callback) {
    callback(null, 'message one');
}
var two = function(callback) {
    callback(null, 'message two');
}
var there = function(callback) {
    callback(null, 'message there');
}

delay(1000, [ 
    [one, 2000],
    two,
    there
], function(err, message) {
    console.log(message);
});
```


## Contributor 
* [Dida Nurwanda](http://www.didanurwanda.com)
