'use strict';

function BinarioADecimal(num) {
   let suma = 0;
   let exponente= num.length-1;
   for (let i=0; i<num.length; i++){
      suma = suma + (num[i])*Math.pow(2,exponente);
      exponente--;
      
   }
   return (suma);
   }
function DecimalABinario(num) {
   let binario = "";
   let esDivisible = true;
   while (esDivisible===true){
      if (num%2==1){
         binario = "1"+ binario; //100
      }
      else{
         binario = "0"+ binario; //100
      }
      if (num>=2){
         esDivisible=true;
      }
      else{
         esDivisible=false;
      }
      num = parseInt(num/2);
   }
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
