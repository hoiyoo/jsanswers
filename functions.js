
  
  function argsAsArray(fun, a) {
    return fun.apply(null,a);
  };
  
  
  function speak(fun, a) {
	
	  return fun.call(a);	 
	  };

  
  function functionFunction(a) {
      function subFunction(b) {
            var str = a+", "+b;
            return str;
      }
      return subFunction;
};

function makeClosures(arry, sq) {
    var fns = [];
    for (var i=0; i< arry.length; i++) {
        (function(i) {
            fns[i] = (function() {
                return sq(arry[i]);
            });
        })(i)   
    }
    return fns;
};


function partial(f) {
	  var args = Array.prototype.slice.call(arguments, 1)
	  return function() {
	    var remainingArgs = Array.prototype.slice.call(arguments)
	    return f.apply(null, args.concat(remainingArgs))
	  }
	}


function useArguments(a) {
	
	  var args = arguments;	  
	  var sum=0;
	  for (var i=0; i < args.length; i++)
		  sum += args[i];
	  
	  return sum;
};


var partialUsingArguments = (function() {

	var slice = Array.prototype.slice;
	function partialUsingArguments(fn) {
	
	var orig = slice.call(arguments, 1);
	 
		return function() {
			var partial = slice.call(arguments, 0);
			var args = [];
			for (var i = 0; i < orig.length; i++) {
				args[i] = orig[i] === partialUsingArguments._ ? partial.shift() : orig[i];
			}
			return fn.apply(this, args.concat(partial));
		};
	}
	partialUsingArguments._ = {};
	 
	return partialUsingArguments;
	}());


function callIt(fun) {
	
 var args = Array.prototype.slice.call(arguments, 1);

 return fun.apply(null,args);
		 		  
};


function curryIt(fn) {
	
	var n = fn.length;
		 
	function getCurriedFn(prev) {

		return function(arg) {
			var args = prev.concat(arg);
			if (args.length < n) {
				return getCurriedFn(args);
			} else {
				return fn.apply(this, args);
			}
		}
	};
	
	return getCurriedFn([]);
	}



