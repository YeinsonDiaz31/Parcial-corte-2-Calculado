var opera;
var operb;
var operaciones;
const lista =[];

function init() {

    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("resi");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("puntoo");
    var back = document.getElementById("his");

    //eventos

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";

    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";

    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";

    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";

    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";

    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";

    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";

    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";

    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";

    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";

    }

    reset.onclick = function (e) {
        resetear();

    }

    suma.onclick = function (e) {
        opera = resultado.textContent;
        operaciones = "+";
        limpiar();
    }

    resta.onclick = function (e) {
        opera = resultado.textContent;
        operaciones = "-";
        limpiar();
    }

    multiplicacion.onclick = function (e) {
        opera = resultado.textContent;
        operaciones = "*";
        limpiar();
    }
    division.onclick = function (e) {
        opera = resultado.textContent;
        operaciones = "/";
        limpiar();
    }

    igual.onclick = function (e) {
        operb = resultado.textContent;
        resolver();

    }

    back.onclick = function (e){

        resultado.textContent = lista;
        
    }


    punto.onclick = function(e){
        if (resultado.textContent=="") {
            alert("operación no permitida");
        } else {
            resultado.textContent = resultado.textContent + ".";
        }
    
    }

    function limpiar() {
        resultado.textContent = "";

    }

    function resetear() {

        resultado.textContent = "";
        opera = 0;
        operb = 0;
        operaciones = "";
    }


    function resolver() {
        var res = 0;
        switch (operaciones) {
            case "+":
                res = parseFloat(opera) + parseFloat(operb);
                lista.push(opera+"+"+operb +"="+res)
                break;

            case "-":
                res = parseFloat(opera) - parseFloat(operb);
                lista.push(opera+"-"+operb+"="+res)
                break;

            case "*":
                res = parseFloat(opera) * parseFloat(operb);
                lista.push(opera+"*"+operb+"="+res)
                break;

            case "/":
                res = parseFloat(opera) / parseFloat(operb);
                lista.push(opera+"/"+operb+"="+res)
                break;
        }



        resetear();
        resultado.textContent = res;


    }

}