function Quadro(valor1,valor2){
    return 10 + valor1 + valor2;
}

var sim = 50;
var nao = 40;

var total = Quadro(sim,nao);

document.getElementById("teste").innerHTML= total;