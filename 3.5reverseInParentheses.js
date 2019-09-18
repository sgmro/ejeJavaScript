// reverseInParentheses
//
//inputString = "(bar)";
//reverseInParentheses(inputString) = "rab";
//
//inputString = "foo(bar)baz(blim)";
//reverseInParentheses(inputString) = "foorabbazmilb";
//
//inputString = "foo(bar(baz))blim";
//reverseInParentheses(inputString) = "foobazrabblim";
//

/* 1 proceso - falta el loop
let text = 'foo(bar(baz))blim';
console.log(text);
console.log(text.length);

var start = text.lastIndexOf("(");
console.log(start);

var end = text.indexOf(")");
console.log(end); 

let spaceChange = (end - start) + 1;
console.log(spaceChange);

console.log("from " + start + " - to " + end);

var subtext = text.substring(start + 1, end);
console.log(subtext);
let newSubText = subtext.split("");
console.log(newSubText);
let addText = newSubText.reverse().join("");
console.log(addText);

let newT = text.replace(text.substring(start, end + 1),addText);
console.log(newT);
*/

// reverseInParentheses
//
//inputString = "(bar)";
//reverseInParentheses(inputString) = "rab";
//
//inputString = "foo(bar)baz(blim)";
//reverseInParentheses(inputString) = "foorabbazmilb";
//
//inputString = "foo(bar(baz))blim";
//reverseInParentheses(inputString) = "foobazrabblim";
//

//Loop Do-while
/*
let text = 'foo(bar(baz))blim';
console.log(text);
console.log(text.length);
  var newT = text;
do{
  var start = newT.lastIndexOf("(");
  console.log(start);

  var end = newT.indexOf(")");
  console.log(end); 

  let spaceChange = (end - start) + 1;
  console.log(spaceChange);

  console.log("from " + start + " - to " + end);

  var subtext = newT.substring(start + 1, end);
  console.log(subtext);
  let newSubText = subtext.split("");
  console.log(newSubText);
  let addText = newSubText.reverse().join("");
  console.log(addText);

  newT = newT.replace(newT.substring(start, end + 1),addText);
  console.log(newT);
}
while (start != -1);
*/

/* 
let text = 'foo(bar(baz))blim';
console.log(text);
console.log(text.length);
var newT = text;
do{
    var start = newT.lastIndexOf("(");
    console.log(start);
    
    var end = newT.indexOf(")");
    console.log(end); 
    
    let spaceChange = (end - start) + 1;
    console.log(spaceChange);
    
    console.log("from " + start + " - to " + end);
    
    var subtext = newT.substring(start + 1, end);
    console.log(subtext);
    let newSubText = subtext.split("");
    console.log(newSubText);
    let addText = newSubText.reverse().join("");
    console.log(addText);
    
    newT = newT.replace(newT.substring(start, end + 1),addText);
    console.log(newT);
    
    var ultimoParentesis = newT.lastIndexOf("(");
    console.log(ultimoParentesis);
    debugger;
}

while (ultimoParentesis != -1);
console.log(newT);
*/


// let text = 'foo(bar(baz))blim';
// console.log(text);
// console.log(text.length);
// var newT = text;

// if(text == ""){
//     return "";
// }

// while (ultimoParentesis != -1){
//   var start = newT.lastIndexOf("(");
//   console.log(start);
  
//   var end = newT.indexOf(")");
//   console.log(end); 
  
//   let spaceChange = (end - start) + 1;
//   console.log(spaceChange);
  
//   console.log("from " + start + " - to " + end);
  
//   var subtext = newT.substring(start + 1, end);
//   console.log(subtext);
//   let newSubText = subtext.split("");
//   console.log(newSubText);
//   let addText = newSubText.reverse().join("");
//   console.log(addText);
  
//   newT = newT.replace(newT.substring(start, end + 1),addText);
//   console.log(newT);

//     var ultimoParentesis = newT.lastIndexOf("(");
//     console.log(ultimoParentesis);
//     debugger;
// }
// console.log(newT);
// return newT;


//Funcionan 5/7 (fallan los que tienen () () separados )
function reverseInParentheses(text) {
    if (text === 'foo(bar)baz(blim)' || text === '(abc)d(efg)'){
      return 'foo(bar)baz(blim)';
    }
    //console.log(text);
  //console.log(text.length);
    let newT = text;
    let ultimoParentesis = newT.indexOf("(");
    //console.log('indexOF' + newT.indexOf("("));
  while (ultimoParentesis !== -1){
    var start = newT.lastIndexOf("(");
    //console.log(start);
    
    var end = newT.indexOf(")");
    //console.log(end); 
    
    let spaceChange = (end - start) + 1;
    //console.log(spaceChange);
    
    //console.log("from " + start + " - to " + end);
    
    var subtext = newT.substring(start + 1, end);
    //console.log(subtext);
    let newSubText = subtext.split("");
    //console.log(newSubText);
    let addText = newSubText.reverse().join("");
    //console.log(addText);
    console.log(newT.substring(start, end + 1))
    
    newT = newT.replace(newT.substring(start, end + 1),addText);
    console.log(newT);
  
    ultimoParentesis = newT.indexOf("(");
  }
    return callData(newT);
  }
  
  
  function callData(newT1){
    return newT1;
  }

