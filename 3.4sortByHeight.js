let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let ordenados =[];
let bloqueados = [];
let resultado = []

for( i=0; i<a.length; i++){
  if(a[i] != -1){
    console.log(a[i]);
    ordenados.push(a[i])
  }
  else{
    bloqueados.push(i);
  }
}
  console.table(bloqueados);
  console.log(ordenados.sort((a, b) => a - b));
  console.log("array B: " + ordenados);
  console.log("array A: " + a);
  let index = 0;
for(j=0; j<a.length; j++){

  let cantidad = bloqueados.filter(x=> x == j).length;
  if(cantidad== 0)
  {
    resultado.push(ordenados[index]);
    index++;
  }
  else 
  {
    resultado.push(-1);
  }
  
}
console.table(resultado);

/*
function sortByHeight(a) {
    
let ordenados =[];
let bloqueados = [];
let resultado = []

for( i=0; i<a.length; i++){
  if(a[i] != -1){
    console.log(a[i]);
    ordenados.push(a[i])
  }
  else{
    bloqueados.push(i);
  }
}
  console.table(bloqueados);
  console.log(ordenados.sort((a, b) => a - b));
  console.log("array B: " + ordenados);
  console.log("array A: " + a);
  let index = 0;
for(j=0; j<a.length; j++){

  let cantidad = bloqueados.filter(x=> x == j).length;
  if(cantidad== 0)
  {
    resultado.push(ordenados[index]);
    index++;
  }
  else 
  {
    resultado.push(-1);
  }
  
}
console.table(resultado);
return resultado;
}




*/