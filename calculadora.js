var previo = "";
var display = document.getElementById("display");
var acumulado = 0;
var sumar = false;
var restar = false

function disp(numero) {
    display.value = previo + numero;
    previo = display.value;
}

function del() {
    leido = display.value;
    nuevo = leido.slice(0, -1);
    display.value = nuevo;
}

function suma() {
    if (previo!="") {
        if (restar) {
            acumulado = acumulado - parseFloat(previo);
            display.value = acumulado;
        }else{
            acumulado = acumulado + parseFloat(previo);
            display.value = acumulado;
        }
        previo = "";
        sumar = true;
        restar = false;
    }
}

function resta() {
    if (previo!="") {
        if (sumar) {
            acumulado = acumulado + parseFloat(previo);
            display.value = acumulado;
        }else{
            if (acumulado==0) {
                acumulado = parseFloat(previo);
                display.value = acumulado;
            }else{
            acumulado = acumulado - parseFloat(previo);
            display.value = acumulado;
            }
        }
        previo = "";
        sumar = false;
        restar = true;
    }
}

function igual() {
    if (sumar) {
        display.value = acumulado + parseFloat(previo);
    } else if (restar) {
        display.value = acumulado - parseFloat(previo);
    }

}

array=[];
for (var i=0; i<10; i++) {
    var boton = document.getElementById("boton"+i.toString());
    array.push(boton);
}
var botondel = document.getElementById("DEL");
var botonsuma = document.getElementById("sumar");
var botonresta = document.getElementById("resta");
var botonmultiplicar = document.getElementById("multiplicar");
var botonigual = document.getElementById("igual");

array[0].onclick = function() {disp("0")};
array[1].onclick = function() {disp("1")};
array[2].onclick = function() {disp("2")};
array[3].onclick = function() {disp("3")};
array[4].onclick = function() {disp("4")};
array[5].onclick = function() {disp("5")};
array[6].onclick = function() {disp("6")};
array[7].onclick = function() {disp("7")};
array[8].onclick = function() {disp("8")};
array[9].onclick = function() {disp("9")};

botondel.onclick = function() {del()};
botonsuma.onclick = function() {suma()};
botonresta.onclick = function() {resta()};
botonmultiplicar.onclick = function() {multiplicar()};
botonigual.onclick = function() {igual()};

display.value="0";