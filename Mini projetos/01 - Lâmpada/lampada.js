const botaoLigar = document.querySelector('#botao-ligar');
const botaoDesligar = document.querySelector('#botao-desligar');
const imagem = document.querySelector("#img-lampada");

imagem.addEventListener("mouseenter", ()=>{
    if(imagem.src.endsWith("img/lampada-quebrada.jpg")){
        imagem.src = "img/lampada-quebrada.jpg"
    }else{
        imagem.src = "img/ligada.jpg";
    }
})

imagem.addEventListener("mouseleave", ()=>{
    if(imagem.src.endsWith("img/lampada-quebrada.jpg")){
        imagem.src = "img/lampada-quebrada.jpg"
    }else{
        imagem.src = "img/lampada-apagada.jpg";
    }
})


imagem.addEventListener("dblclick", ()=>{
    imagem.src = "img/lampada-quebrada.jpg";
})

botaoLigar.addEventListener("click",()=>{
    if(imagem.src.endsWith("img/lampada-quebrada.jpg")){
        alert("Não foi possivel. Lâmpada quebrada")
    }else{
        imagem.src = "img/ligada.jpg";
    }
    
})
botaoDesligar.addEventListener("click", ()=>{
    if(imagem.src.endsWith("img/lampada-quebrada.jpg")){
        alert("Não foi possivel. Lâmpada quebrada")
    }else{
        imagem.src = "img/lampada-apagada.jpg";
    }
    
})



