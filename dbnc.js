#!/usr/bin/env node

function dbnc(t,n){
	return (this instanceof dbnc) ? (function(self,t){
		self.t = t;
		self.n = n || null;
		self.x = null;
		self.c = 0;
		return function(fn) {
			if (self.x) clearTimeout(self.x);
			self.c++;
			if (self.n && self.c >= self.n) return (function(){
				fn(self.c);
				self.x = null;
				self.c = 0;
			})();
			self.x = setTimeout(function(){
				fn(self.c);
				self.x = null;
				self.c = 0;
			}, self.t);
		};
	})(this,t) : new dbnc(t);
};

module.exports = dbnc;
