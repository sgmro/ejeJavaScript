// isLucky Ver Sin Funcion 
/*
let isLucky = false;

let n = 123321;
let n1 = n.toString();
let digitos = n1.length;
let mitad = 0;

let part1 = " ";
let part2 = " ";

if(digitos%2 == 0){
  mitad = digitos/2;

  part1 = n1.slice(0, mitad);
  console.log(part1);
  
  part2 = n1.slice(mitad, n1.length);
  console.log(part2);

    let suma = 0;
    for(i = 0; i < part1.length; i++){
      //para recorrer y realizar la suma.
      //console.log(part1[i]);
      let num = parseInt(part1[i]);
      console.log("este es el número" + num)
      suma = num + suma;

      console.log("La suma de la parte 1 es " + suma)
    }

    let suma2 =0;
    for(i = 0; i < part2.length; i++){
      console.log(part2[i]);
      
      let num = parseInt(part2[i]);
      console.log("este es el número " + num);
      suma2 = num + suma2;

      console.log("La suma de la part 2 es "+ suma2)
    }

    if(suma == suma2){
      isLucky = true;
    }
}

console.log(n1);
console.log(digitos);
console.log(mitad);
console.log(isLucky);
*/


//isLucky Ver Con Funcion
// Try edit message
let isLucky = false;

let n = 100000;
let n1 = n.toString();
let digitos = n1.length;
let mitad = 0;

let part1 = " ";
let part2 = " ";

if(digitos%2 == 0){
  mitad = digitos/2;

  part1 = n1.slice(0, mitad);
  console.log(part1);
  
  part2 = n1.slice(mitad, n1.length);
  console.log(part2);

    let suma = 0;
    
    var suma1= sumDigit (part1);
        console.log("La suma de la parte 1 es " + suma1)
    var suma2= sumDigit (part2);
        console.log("La suma de la parte 2 es " + suma2)

      function sumDigit(parte){
        suma =0; 
        for(i = 0; i < parte.length; i++){
        //para recorrer y realizar la suma.
        console.log(parte[i]);
        let num = parseInt(parte[i]);
        console.log("este es el número" + num)
        suma = num + suma;

        }
        console.log("La suma es... " + suma)
        return suma;
      }


    if(suma1 == suma2){
      isLucky = true;
    }
}

console.log(n1);
console.log(digitos);
console.log(mitad);
console.log(isLucky);

