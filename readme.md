# dbnc

a very simple debounce function.

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