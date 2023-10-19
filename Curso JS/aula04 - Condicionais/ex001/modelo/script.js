function carregar(){
    let msg = document.getElementById('msg');
    let foto = document.getElementById('imagem');
    let data = new Date();
    //let hora = data.getHours();
    let hora = 
    msg.innerHTML = `Agora são ${hora} Horas.`
    
    if(hora >= 0 && hora < 12){
        foto.src = '../imagens/dia.png';
        document.body.style.background = '#9eb7e6'
    } else if(hora >= 12 && hora < 18){
        foto.src = '../imagens/tarde.png';
        document.body.style.background = '#b79278'
    }else {
        foto.src = '../imagens/noite.png';
    } 
}