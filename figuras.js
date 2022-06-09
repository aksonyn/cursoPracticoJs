

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

//Codigo Triangulo
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

//Interaccion con el HTML

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




