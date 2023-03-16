function BinarioADecimal(num) {
       //console.log(typeof(num)); 
       //'111'
       //Numero por la base elevado a la posicion, donde la posicion empieza a contar derecha a izquierda
       /*
        111 = 1*2**2 + 1*2**1 + 1*2**0
            = 1 * 4 + 1 * 2 + 1 * 1
            = 4 + 2 + 1
            = 7
       */
        let resultado = 0;
        let exponente = num.length-1
        for (let i = 0; i < num.length ; i++) {
            resultado = resultado + num[i] * Math.pow(2,exponente)
            exponente--;
        }    
        console.log(resultado);
        // .length no aplica para numbers
    }
    BinarioADecimal('111');
 function DecimalABinario(num) {
    //Dividir entre 2
    //console.log(typeof num)
    /*
        4 / 2 = 2 (0)
        2 / 2 = 1 (0)
        1 / 2 = 0 (1)
    */
    let resultado = '';
    while (num !== 0) {
        resultado = (num%2) + resultado 
        num = Math.floor(num / 2)
    }
    console.log(resultado);
    }
DecimalABinario(0)
