// Primer intento -Falla cuando se le ingresa cant absurda num-
// althernathingSums
//
//
//

// let a = [-50, 60, -60, 45, 70];
// let teamA = 0;
// let teamB = 0;
// let pesoTeams =[];

// for (i=0; i<a.length; i++){
//   console.log("num " + a[i]);
//     if (i%2 == true){
//       teamB = teamB + a[i];
//       // console.log("El peso de los de posición par " + teamB);
//     }else{
//       teamA = teamA + a[i];
//       // console.log("El peso de los de posición impar " + teamA)
//     }
// }
// console.log("El peso de los de posición par " + teamB);
// console.log("El peso de los de posición impar " + teamA);
//   if(teamB < 0){
//     teamB = 0;
//   }
//   else if(teamA < 0){
//     teamA = 0;
//   }
//   pesoTeams.push(teamA);
//   pesoTeams.push(teamB);
// console.log("Peso teams " + pesoTeams);

// Segundo intento.

// althernathingSums
//
//
//
// let a = [-50, 60, -60, 45, 70];
// let teamA = 0;
// let teamB = 0;
// let pesoTeams =[];

// a.forEach(function(element, i){
//   console.log("num " + element);
//     if (i%2 == true){
//       teamB = teamB + element;
//       // console.log("El peso de los de posición par " + teamB);
//     }else{
//       teamA = teamA + element;
//       // console.log("El peso de los de posición impar " + teamA)
//     }

// });
// console.log("El peso de los de posición par " + teamB);
// console.log("El peso de los de posición impar " + teamA);
//   if(teamB < 0){
//     teamB = 0;
//   }
//   else if(teamA < 0){
//     teamA = 0;
//   }
//   pesoTeams.push(teamA);
//   pesoTeams.push(teamB);
// console.log("Peso teams " + pesoTeams);

//Tercer intento BY BRAYAN
// althernathingSums
//


// var numbers = [175, 50, 25]; 
// let sumPar = SumArrayPar(numbers); 
// let sumtotal= numbers.reduce(myFunc); 
// let negativeTotal = sumtotal -sumPar;   

// function myFunc(total, num) {   
//   return total + num; } 
// function SumArrayPar(x) { 	
//   let par= [];  
//   for(var i= 0; i < x.length; i = i + 2 )   {  		
//     par.push(x[i]);    }   
//     return par.reduce(myFunc); }

//     console.log(negativeTotal, sumPar );


    ///////

//     let sumPar = SumArrayPar(numbers); 
// let sumtotal= numbers.reduce(myFunc); 
// let negativeTotal = sumtotal -sumPar;  
// let retorno = [];
// retorno.push(sumtotal); 
// retorno.push(negativeTotal); 
// console.table(retorno); 
  
//  function myFunc(total, num) {   
//    return total + num; } 
//  function SumArrayPar(x) { 	
//    let par= [];  
//    for(var i= 0; i < x.length; i = i + 2 )   {  		
//      par.push(x[i]);    }   
//      return par.reduce(myFunc); }


// // BY BRAYAN -funciona-
// function alternatingSums(numbers) {
    
//   let sumPar = SumArrayPar(numbers);
//   let sumtotal= numbers.reduce(myFunc);
//   let negativeTotal = sumtotal -sumPar; 
//   let retorno = []
//   retorno.push(sumPar);
//   retorno.push(negativeTotal);
//   return retorno;
//   }
  
//   function myFunc(total, num) {
//     return total + num;
//   }
//   function SumArrayPar(x)
//   {
//     let par= [];
//    for(var i= 0; i < x.length; i = i + 2 )
//     {
//        par.push(x[i]);
  
//     }
//     return par.reduce(myFunc);
//   }

  // function alternatingSums(numbers) {
    
  //   let sumPar = SumArrayPar(numbers);
  //   let sumtotal= numbers.reduce(myFunc);
  //   let negativeTotal = sumtotal -sumPar; 
  //   let retorno = []
  //   retorno.push(sumPar);
  //   retorno.push(negativeTotal);
  //   return retorno;
  //   }
    
  //   function myFunc(total, num) {
  //     return total + num;
  //   }
  //   function SumArrayPar(x)
  //   {
  //     let par= [];
  //    for(var i= 0; i < x.length; i = i + 2 )
  //     {
  //        par.push(x[i]);
    
  //     }
  //     return par.reduce(myFunc);
  //   }



  ///NEW TRY BY JUAN!!
// let a = [175, 50, 25];
// let par = 0;
// let impar = 0;

// let newA =[];

// for(i=0; i<a.length; i = i +2){
// 	par += a[i];
// }
// console.log("Este es el par "+par);
// if(a.length == 1){
//   impar += 0;
// }

// for(j=1; j<a.length; j = j+2){
//   impar += a[j];
// }
// console.log("este es el impar "+impar);

// newA.push(par);
// newA.push(impar);

// console.log(newA);

//function by JUan

let a = [175, 50, 25];
let acum = 0;
let par = 0;
let impar = 0;


let newA =[];

par = iterateFor(acum, a, 0);

if(a.length == 1){
  impar += 0;
}

impar = iterateFor(acum, a, 1);

newA.push(par);
newA.push(impar);

console.log(newA);

function iterateFor(acumulado, arreglo, index){
  
  for(var i = index; i<arreglo.length; i+=2){
      acumulado += arreglo[i];
  }
  return acumulado;
}


