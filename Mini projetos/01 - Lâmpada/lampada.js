const botaoLigar = document.querySelector('#botao-ligar-desligar');
const lampada = document.querySelector("#img-lampada");

function lampadaQuebrada(){
    return lampada.src.endsWith("img/lampada-quebrada.jpg");
}

lampada.addEventListener("mouseenter", ()=>{
    if(lampadaQuebrada()){
        lampada.src = "img/lampada-quebrada.jpg";
    }else{
        lampada.src = "img/ligada.jpg";
    }
})

lampada.addEventListener("mouseleave", ()=>{
    if(lampadaQuebrada()){
        lampada.src = "img/lampada-quebrada.jpg";
    }else{
        lampada.src = "img/lampada-apagada.jpg";
    }
})


lampada.addEventListener("dblclick", ()=>{
    lampada.src = "img/lampada-quebrada.jpg";
})

botaoLigar.addEventListener("click",()=>{
    if(lampadaQuebrada()){
        alert("Lâmpada quebrada");
    }else if(lampada.src.endsWith("img/lampada-apagada.jpg")){
        lampada.src = "img/ligada.jpg";
    }else{
        lampada.src = "img/lampada-apagada.jpg";
    }
    
})



