

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

//Codigo Triangulo
function alturaTriangulo(lado1, lado2, base){
    if (lado1 === lado2 && lado1 === base){
        altura= Math.sqrt(Math.pow(lado1,2)-Math.pow((lado2/2),2));
        alert(altura);
    }else if(lado1 === lado2 && lado1 != base){
        altura= Math.sqrt(Math.pow(lado1,2)-Math.pow((base/2),2));
        alert(altura);
    }else{
        alert("Tu triangulo no es isosceles ni equilatero");
    }
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;    
}


//Codigo Circunferencia
const PI = Math.PI;

function diametro(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const fDiametro = diametro(radio);
    return fDiametro * PI;
}

function areaCirculo(radio){
   return (radio * radio) * PI;
};

//Interaccion con el HTML Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Interaccion con el HTML Circulo

function calcularDiametroCirculo(){
    const input =document.getElementById("inputCirculo");
    const value = input.value;

    const Cdiametro = diametro(value);
    alert(Cdiametro);

}

function calcularPerimetroCirculo(){
    const input =document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroC = perimetroCirculo(value);
    alert (perimetroC);

}

function calcularAreaCirculo(){
    const input =document.getElementById("inputCirculo");
    const value = input.value;

    const areaC = areaCirculo(value);
    alert (areaC);

}

//Interaccion con el HTML Triangulo

function calcularPerimetroTriangulo(){
    const inputLado1 =document.getElementById("lado1");
    const inputLado2 =document.getElementById("lado2");
    const inputBase =document.getElementById("base");

    const valueLado1= Number(inputLado1.value);
    const valueLado2= Number(inputLado2.value);
    const valueBase= Number(inputBase.value);

    const Tperimetro=perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(Tperimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 =document.getElementById("lado1");
    const inputLado2 =document.getElementById("lado2");
    const inputBase =document.getElementById("base");

    const valueLado1= Number(inputLado1.value);
    const valueLado2= Number(inputLado2.value);
    const valueBase= Number(inputBase.value);
    const altura= alturaTriangulo(valueLado1, valueLado2, valueBase);

    const tArea=areaTriangulo(valueBase, altura);
}