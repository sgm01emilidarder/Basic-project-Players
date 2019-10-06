function checkDuplicatePlayer(dni) {
  for (var i = 0; i < players.length; i++) {
    let player = players[i]
    if (players == '') {
      return true;
    } else if (player[2] == dni) {
      return false;
    };
  }
  return true;
};

function printPlayers(amateur, professional, dni) {
  amateur.innerHTML = '';
  professional.innerHTML = '';
  for (var i = 0; i < players.length; i++) {
    let player = players[i];
    if (player[7] === 'amateur') {
      amateur.innerHTML += '<div>' + '<p>' + player[0] + ' ' + player[1] + ' ' + player[3] + ' ' + player[7] + '</p>' + '</div>';
    } else if (player[7] === 'profesional') {
      professional.innerHTML += '<div>' + '<p>' + player[0] + ' ' + player[1] + ' ' + player[3] + ' ' + player[7] + '</p>' + '</div>';
    };
  };
};

export default { checkDuplicatePlayer, printPlayers };
