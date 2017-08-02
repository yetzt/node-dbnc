#!/usr/bin/env node

function dbnc(t){
	return (this instanceof dbnc) ? (function(self,t){
		self.t = t;
		self.x = null;
		self.c = 0;
		return function(fn) {
			if (self.x) clearTimeout(self.x);
			self.c++;
			self.x = setTimeout(function(){
				fn(self.c);
				self.x = null;
				self.c = 0;
			}, self.t);
		};
	})(this,t) : new dbnc(t);
};

module.exports = dbnc;
