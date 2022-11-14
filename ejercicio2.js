/**
 * EJERCICIO 2
 * 2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
/ Precio ----------------------Impuesto/
$ 0.00 - $ 20.00---------------No genera impuesto.
$ 20.01 - $ 40.00--------------30 %
$ 40.01 - $ 500.00-------------40 %
$ 500.01 en adelante-----------50 %



 */


var precio = 500.01;

if (precio <= 20.00 ) {

    console.log("Tu compra esta libre de impuesto, total a pagar es de " + precio );
    
}else if (precio >= 20.01 && precio <=40.00) {
       precio= (precio * 0.30 ) + precio ; 
         
        console.log("El precio de tu compra genero un impuesto del 30% tu total a pagar  es de:  " + precio);
            
   
} else if (precio >= 40.01 && precio <= 500.00 ) {
   precio= (precio * 0.40) + precio; 
 
    console.log("El precio de tu compra genero un impuesto del 40% tu total a pagar es de:  " + precio);
    
} else if (precio >=  500.01){
    precio= (precio * 0.50) + precio; 

    console.log("El precio de tu compra genero un impuesto del 50% tu total a pagar es de:  " + precio);
}




/**
 *  var valor
    valor= prompt('Ingrese el valor del articulo')
    if(valor> 0.00 && valor <= 20.00){
        window.alert("El articulo no genera impuesto")
    }
    else{
        if(valor>20.01 && valor <=40.00){
            window.alert("El valor del impuesto por el articulo es de 30%")
        }
        else{
            if(valor>40.01 && valor<=500.00){
                window.alert("El valor del impuesto por el articulo es de 40%")
            }
            else{
                window.alert("El valor del impuesto por el articulo es de 50%")
            }
        }
    }

 */