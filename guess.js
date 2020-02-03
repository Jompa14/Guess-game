var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
      palpites.textContent = 'Last tries: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
   
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'CONGRATS!! YOU GUESSED';
      ultimoResultado.style.backgroundColor = 'green';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = '!!!GAME OVER!!!';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'NO!';
      ultimoResultado.style.backgroundColor = 'tomato';
      ultimoResultado.style.color = 'white';
      if(palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = 'Your guess is too low!';
      } else if(palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = 'Your guess is too high!';
      }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
    envioPalpite.addEventListener('click', conferirPalpite);
    var input = document.getElementById("campoPalpite");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("envio").click();
      }
    }); 

    function configFimDeJogo() {
        campoPalpite.disabled = true;
        envioPalpite.disabled = true;
        botaoReinicio = document.createElement('button');
        botaoReinicio.textContent = 'Restart game';
        document.body.appendChild(botaoReinicio);
        botaoReinicio.addEventListener('click', reiniciarJogo);
      }

      function reiniciarJogo() {
        contagemPalpites = 1;
      
        var reiniciarParas = document.querySelectorAll('.resultadoParas p');
        for (var i = 0 ; i < reiniciarParas.length ; i++) {
          reiniciarParas[i].textContent = '';
        }
      
        botaoReinicio.parentNode.removeChild(botaoReinicio);
      
        campoPalpite.disabled = false;
        envioPalpite.disabled = false;
        campoPalpite.value = '';
        campoPalpite.focus();
      
        ultimoResultado.style.backgroundColor = 'white';
      
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      }