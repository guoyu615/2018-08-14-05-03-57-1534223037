module.exports = function main(s) {
  // Write your code here
  var x = s.split("");   
  var sum = 0;
  for (i = 0; i < x.length; i++) { 
     sum += parseInt(x[i]);
     };
	 return sum
};
