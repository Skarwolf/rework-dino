//Background - Personagem - Obstaculos - Chefe
const ekko = document.querySelector('.ekko');
const background = document.querySelector('.background');



// Personagem - Movimentação - Começo do Código -
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if(event.keyCode === 32){
        if (!isJumping){
       jump();
       }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
        //descendo
            let downInterval = setInterval(() =>{
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false; 
                }else{
                position -= 20;
            ekko.style.bottom = position + 'px';
             }
            }, 20)

        }else {
        //subindo 
        position += 20;
        ekko.style.bottom = position + 'px';
      }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp);

// Personagem - Movimentação - Fim do Código -

// Inicio - Obstaculo - Cogumelo 

function criacaoCogumelo() {
    const cogumelo = document.createElement('div');
    let cogumeloPosition = 1000;
    let randomTime = Math.random() * 6000;

    cogumelo.classList.add('cogumelo');
    cogumelo.style.left = 1000 + 'px';
    background.appendChild(cogumelo);

//Movimenta o Cogumelo
    let leftInterval = setInterval(() => {
        if(cogumeloPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cogumelo);//serve pra remover um elemento - 
        }else if (cogumeloPosition > 0 && cogumeloPosition < 60 && position < 60){
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameOver"><b>GAME OVER ♥</b></h1>';

        }else{
            cogumeloPosition -= 10;
            cogumelo.style.left = cogumeloPosition + 'px';
        }
    }, 20);

    setTimeout(criacaoCogumelo, randomTime);

}

criacaoCogumelo();


