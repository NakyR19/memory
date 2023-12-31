let isMultiplayer = false;
window.localStorage.setItem('isChallenge', false);
const form = document.getElementById('myform');

document.getElementById('btn1').onclick = function () {
  //remove a ocultação do texto e input do player 1, esconde novamente o texto e input do player 2 caso a opção multiplayer tenha sido
  //selecionada anteriormente, atribui 'false' ao isMultiplayer para definir o jogo como singleplayer
  document.getElementById('P1_txt').hidden = false
  document.getElementById('P1_name').hidden = false
  document.getElementById('P2_txt').hidden = true
  document.getElementById('P2_name').hidden = true
  document.getElementById('play').hidden = false
  document.getElementById('myform').style.blockSize = '250px'
  document.getElementById('invalid_name').hidden = true
  document.getElementById('chMode').hidden = false
  isMultiplayer = false;
}
document.getElementById('btn2').onclick = function () {
  //remove a ocultação do texto e input do player 1 e 2, atribui 'true' ao isMultiplayer para definir o jogo como multiplayer
  document.getElementById('P1_txt').hidden = false
  document.getElementById('P1_name').hidden = false
  document.getElementById('P2_txt').hidden = false
  document.getElementById('P2_name').hidden = false
  document.getElementById('play').hidden = false
  document.getElementById('myform').style.blockSize = '300px'
  document.getElementById('invalid_name').hidden = true
  document.getElementById('chMode').hidden = true
  isMultiplayer = true;
}
//redireciona para a pagina de seleção de tema
document.getElementById('btn3').onclick = function () {
  window.location = "/pages/theme.html";
}
//ativa a função onTap com o jogo challenge mode desativado
document.getElementById('play').onclick = function () {
  onTap();
}
// atribui true ao challenge mode e ativ a função onTap
document.getElementById('chMode').onclick = function () {
 window.localStorage.setItem('isChallenge', true);
 onTap();
}

function onTap() {
  //armazena o nome do P1 e P2
  localStorage['player1Name'] = document.getElementById('P1_name').value;
  localStorage['player2Name'] = document.getElementById('P2_name').value;

  //verifica os seguintes casos: jogo multiplayer e ambos os nomes válidos(menor do que 3 caracteres), jogo singleplayer e o nome do P1
  //válido. Caso algum dos dois seja verdadeiro 'Name' recebe o valor de 'true'.
  if (isMultiplayer && (document.getElementById('P1_name').value.length < 3 || document.getElementById('P2_name').value.length < 3)) {
    document.getElementById('invalid_name').hidden = false
  } else if (!isMultiplayer && document.getElementById('P1_name').value.length < 3) {
    document.getElementById('invalid_name').hidden = false
  } else
    document.getElementById('invalid_name').hidden = true

  //redireciona para a pagina de jogo multiplyer ou singleplyer a depender do boolean de 'isMultiplayer' definido nas funções
  //btn1 e btn2,  determina se o nome é válido apartir do boolean de 'Name', se for false,
  // o jogador receberá um aviso e o jogo não irá iniciar.
  if (isMultiplayer && document.getElementById('invalid_name').hidden)
    window.location = "/pages/multiplayer.html";
  else if (!isMultiplayer && document.getElementById('invalid_name').hidden)
    window.location = "/pages/game.html";
}


