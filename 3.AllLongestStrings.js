let inputArray = ["aba", "aa", "ad", "vcd"];
let numCharacters = 0;
let result= [];
inputArray.forEach(function(element) {
	if(element.length >= numCharacters){
      if(element.length == numCharacters)
      {
	       PushElement(element);
      }
      else
      {
    	    result = [];
        	PushElement(element);
      }
	}
});
function PushElement(element)
{
  result.push(element);
  numCharacters = element.length;
}
console.log(result); 
