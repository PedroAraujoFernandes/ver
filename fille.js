let texto = document.getElementById("texto");
let troco = 0;


class tempoDeVaga{
    constructor(valor){
        this.valor = valor;
    }
    
    pagar(valor, troco){
        if(valor < 1 || valor === null){
            texto.innerHTML = `o valor é invalido`;
            console.log("o valor é invalido");
            
        }else{
            if(valor >= 3){
                   const troco = valor - 3;
                   texto.innerHTML = `o valor do troco é ${troco.toFixed(2)}R$, você tem uma 120 minutos.`;
    
                }
                else{
                    if(valor >= 1.75){
                        const troco = valor - 1.75;
                        texto.innerHTML = `o valor do troco é ${troco.toFixed(2)}R$, você tem 60 minutos.`;
                    }
                    else{
                        if(valor >= 1){
                         const troco = valor - 1;
                         console.log(troco);
                        texto.innerHTML = `o valor do troco é ${troco.toFixed(2)}R$, você tem 30 minutos.`;
                    }
                }
    }
}
}
}


function validar(){
    let yoyo = new tempoDeVaga;
    let valorInserido = document.getElementById("campo").value;
    valorInserido = Number(valorInserido);

    yoyo.pagar(valorInserido);
    
}


