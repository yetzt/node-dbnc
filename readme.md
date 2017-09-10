# dbnc

a very simple debounce function.

## constructor

`debunce = new dbnc(wait, max)`

wait is the time to wait for new calls till execution
max is the maximum number of call after which execution is forced

## example

```javascript

var dbnc = require("dbnc");

var debounce = new dbnc(5000);

debounce(function(i){
	console.log("debounced "+i+" calls");
});

debounce(function(i){
	console.log("debounced "+i+" calls");
});

debounce(function(i){
	console.log("debounced "+i+" calls");
});

```