let texto = document.getElementById("texto");
let troco = 0;
class valor{
    constructor(valor){
        this.valor = valor;
    }
    
    pagar(valor){
        if(valor < 1 || valor === null){
            console.log("o valor é invalido");
            
        }else{
            if(valor >= 3){
                   let troco = valor - 3;
                texto.innerHTML = `o valor do troco é ${troco}, você tem uma hora e meia`;
            }
            else{
                if(valor >= 1.75){
                     let troco = valor - 1.75;
                    console.log("o valor do troco é: " + troco + "R$ você tem acesso a uma hora");
                }
                else{
                    if(valor >= 1){
                       let troco = valor - 1;
                        console.log("o valor do troco é: " + troco + "R$ você tem acesso a meia hora");
                    }
                }
    }
}
}
}

function validar(){
    let yoyo = new valor;
    let valorInserido = document.getElementById("campo").value;
    valorInserido = Number(valorInserido);
    
    yoyo.pagar(valorInserido);
    texto.innerHTML = "o valor do troco é " + troco;
    
}



