// Try edit message
//Entrada
/*let s1 = "abcc";
let s2 = "aba";
let acumulado = 0;
let arrLetUsados = [];

  for (strS1=0; strS1<s1.length; strS1++ ){ //toma cada letra del primer string para evaluarla
    console.log("La letra " +  s1[strS1] + " esta dento del string " +s1); //Para saber si muestra la letra a cual string pertenece

      if (arrLetUsados.includes(s1[strS1]) == false){ //Para q sepa si ya paso esa letra entonces no vuelva a consultar
        for (strS2=0; strS2<s2.length; strS2++ ){ //Toma cada letra del segundo string para evaluarla
          console.log("La letra " + s2[strS2] + " esta dento del string " +s2); //Para saber si muestra la letra a cual string pertenece
        }

        arrLetUsados.push(s1[strS1]);
      }
      console.log(arrLetUsados);
   }
 console.log(arrLetUsados);
*/
 /*
 let s1 = "ab";
let s2 = "aba";
let acumulado = 0;
let arrLetUsados = [];

  for (strS1=0; strS1<s1.length; strS1++ ){
    console.log("La letra " +  s1[strS1] + " esta dento del string " +s1)

      if (arrLetUsados.includes(s1[strS1]) == false){
        for (strS2=0; strS2<s2.length; strS2++ ){
          console.log("La letra " + s2[strS2] + " esta dento del string " +s2);
        }
        arrLetUsados.push(s1[strS1]);
      }
      console.log(arrLetUsados);
   }
 
 */

 /* 
 // Try edit message
//Entrada
let s1 = "abcc";
let s2 = "aba";
var countS1=0;
var countS2=0;
let acumulado = 0;
let arrLetUsados = [];

  for (strS1=0; strS1<s1.length; strS1++ ){ //toma cada letra del primer string para evaluarla
    var letra = s1[strS1];
    console.log("La letra " +  s1[strS1] + " esta dento del string " +s1); //Para saber si muestra la letra a cual string pertenece

      if (arrLetUsados.includes(s1[strS1]) == false){ 
        
        for (strS2=0; strS2<s2.length; strS2++ ){ //Toma cada letra del segundo string para evaluarla
          console.log("La letra " + s2[strS2] + " esta dento del string " +s2); //Para saber si muestra la letra a cual string pertenece
        }

        for(i=0; i<s1.length; i++ ){//para recorrer el mismo (s1)
          console.log(s1[i])
          if(letra == s1[i]){
            countS1++;
          }
            console.log("La letra "+ letra + " esta " + countS1);
        }
      }

        //Usando exp regural
      //  var reg = new RegExp('['+ s1[strS1] + ']', 'g');
        //console.log (s1.match(reg).length);
        //console.log("esto es REG "+reg)
        
        arrLetUsados.push(letra);
  }
      console.log(arrLetUsados);
 
 */

/* 
 let s1 = "abcc";
let s2 = "aba";
let acumulado = 0;
let arrLetUsados = [];
let countS1 = 0;
let countS2 = 0;
let letter = "";

for (strS1 = 0; strS1 < s1.length; strS1++) {
  countS1 = 0;
  //   letter = s1[strS1];

  console.log("La letra " + s1[strS1] + " esta dentro del string " + s1);

  if (arrLetUsados.includes(s1[strS1]) == false) {
    countLetters(s1, letter, countS1, strS1);

    // for (i = 0; i < s1.length; i++) {
    //   //este for es para comparar la letra (a) con el resto de su string strS1
    //   if (letter == s1[i]) {
    //     countS1++;
    //   }
    // }

    for (strS2 = 0; strS2 < s2.length; strS2++) {
      console.log("La letra " + s2[strS2] + " esta dentro del string " + s2);
      countLetters(s2, letter, countS2, strS2);
    }
    arrLetUsados.push(s1[strS1]);
  }
  console.log(arrLetUsados);
  //   if (!countS1 == 0) {
  //     console.log("lgyikfv = " + countS1);
  //   } else {
  //     console.log(La letra "${s1[strS1]}" ya fue contada);
  //   }
}

function countLetters(palabra, letter, cuenta, position) {
  letter = palabra[position];
  for (i = 0; i < palabra.length; i++) {
    //este for es para comparar la letra (a) con el resto de su string strS1
    if (letter == palabra[i]) {
      cuenta++;
    }
  }
  if (!cuenta == 0) {
    console.log("lgyikfv = " + cuenta);
  } else {
    console.log(´La letra "${palabra[position]}" ya fue contada´);
  }
}
 */

 /*
 let s1 = "abcc";
let s2 = "aba";
var countS1=0;
var countS2=0;
let acumulado = 0;
let arrLetUsados = [];

  for (strS1=0; strS1<s1.length; strS1++ ){ //toma cada letra del primer string para evaluarla
    countS1 = 0;
    var letra = s1[strS1];
    console.log("La letra " +  s1[strS1] + " esta dento del string " +s1); //Para saber si muestra la letra a cual string pertenece

      if (arrLetUsados.includes(s1[strS1]) == false){ 
        
        for (strS2=0; strS2<s2.length; strS2++ ){ //Toma cada letra del segundo string para evaluarla
          console.log("La letra " + s2[strS2] + " esta dento del string " +s2); //Para saber si muestra la letra a cual string pertenece
        }

        for(i=0; i<s1.length; i++ ){//para recorrer el mismo (s1)
          console.log(s1[i])
          if(letra == s1[i]){
            countS1++;
          }
            console.log("La letra "+ letra + " esta " + countS1 + " veces en el String " + s1);
        }
      }

        //Usando exp regural
      //  var reg = new RegExp('['+ s1[strS1] + ']', 'g');
        //console.log (s1.match(reg).length);
        //console.log("esto es REG "+reg)
        
        arrLetUsados.push(letra);
  }
      console.log(arrLetUsados);
      console.log(countS1);
 
 */

/*
let s1 = "aabcc";
let s2 = "adcaa";
let arrLetUsados = [];
let arrLetUsados2 = [];
let countS1 = 0;
let countS2 = 0;
let countfinal = 0;


for (strS1 = 0; strS1 < s1.length; strS1++) {
  countS1 = 0;
  var letter = s1[strS1];
  if (arrLetUsados.includes(letter) == false) {
    for (j = 0; j < s1.length; j++) {
      if (letter == s1[j]) {
        countS1++;
      }
    }
    arrLetUsados.push(letter);
  }
  
  for (strS2 = 0; strS2 < s2.length; strS2++) {
    countS2 = 0;
    var letter2 = s2[strS2];
    if(letter === letter2){
      if (arrLetUsados2.includes(letter2) == false) {
        for (j = 0; j < s2.length; j++) {
          if (letter2 == s2[j]) {
            countS2++;
          }
        }
        arrLetUsados2.push(letter2);
      }
    }
    if (countS1 < countS2){
      countfinal += countS1;
    }
    else
    {
      countfinal += countS2;
    }
  }  
}
console.log(countfinal);
//return countfinal;
*/


let s1 = "zzzz";
let s2 = "zzzzzzz";
let countfinal = 0;

let obj1 = {
  arrLet: [],
  count: 0, 
  letter: '',
  text: ''
};

let obj2 = {
  arrLet: [],
  count: 0, 
  letter: '',
  text: ''
};

for (strS1 = 0; strS1 < s1.length; strS1++) {
  obj1.letter = s1[strS1];
  obj1.count = 0;
  obj1.text = s1;
  getArray(obj1);
  //console.log(obj1.letter + "-1-" + obj1.count);
  
  for (strS2 = 0; strS2 < s2.length; strS2++) {
    obj2.count = 0;
    obj2.text = s2;
    obj2.letter = s2[strS2];
    
    if(obj1.letter == obj2.letter){
      getArray(obj2);
      //console.log(obj2.letter + "-2-" + obj2.count);
    }
    if (obj1.count < obj2.count){
      countfinal += obj1.count;
    }
    else
    {
      countfinal += obj2.count;
    }
  }  
}
console.log(countfinal);
//return countfinal;


function getArray(obj){
  if (obj.arrLet.includes(obj.letter) == false) {
    for (j = 0; j < obj.text.length; j++) {
      if (obj.letter == obj.text[j]) {
        obj.count ++;
      }
    }
    obj.arrLet.push(obj.letter);
  }
}