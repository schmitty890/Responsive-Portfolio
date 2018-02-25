(function() {
	var formFunctionality = (function () {
	    
	  // Keep this variable private inside this closure scope
	  var array = [93, 95, 88, 0, 55, 91];
	  
	  var one = function() {
		console.log('one');
	  };

	  var two = function() {
	    console.log('two');
	  };

	  // Explicitly reveal public pointers to the private functions 
	  // that we want to reveal publicly

	  return {
	    init: one,
	    two: two
	  }
	})();

	formFunctionality.init();
	formFunctionality.two();
})();
