const players = [];

function validateCamps(name, surname, dni, email, phone, date, account) {
  if (name === '' || surname === '' || dni === '' || email === '' || phone === '' || date === '' || account === '') {
    return false;
  } else {
    return true;
  };
};

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    alert('El email que has introducido no es válido');
    return false;
  };
};

function validateName(name) {
  if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name)) {
    return true;
  } else {
    alert('El nombre que has introducido no es válido');
    return false;
  };
};

function validateSurname(surname) {
  if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(surname)) {
    return true;
  } else {
    alert('El/los apellido/s que has introducido no es válido');
    return false;
  };
};

function validatePhone(phone) {
  if (/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/.test(phone)) {
    return true;
  } else {
    alert('El teléfono que has introducido no es válido');
    return false;
  };
};

function validateDate(date) {
  if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(date)) {
    return true;
  } else {
    alert('La fecha que has introducido no es válida');
    return false;
  };
};

function validateDni(dni) {
  if (/^[0-9]{8,8}[A-Za-z]$/.test(dni)) {
    return true;
  } else {
    alert('El DNI que has introducido no es válido');
    return false;
  };
};

function validateAccount(account) {
  if (/^[A-Z]{2}[0-9]{22}$/.test(account)) {
    return true;
  } else {
    alert('La cuenta bancaria que has introducido no es válida');
    return false;
  };
};

function addPlayer(name, surname, email, type) {
  let amateur = document.getElementById('begginer');
  let profesional = document.getElementById('profesional');

  if (type === 'amateur') {
    amateur.innerHTML = '<div>' + '<p>' + name + ' ' + surname + '</p>' + '<p>' + email + '</p>' + '<p>' + type + '</p>' + '</div>';
  } else {
    profesional.innerHTML = '<div>' + '<p>' + name + ' ' + surname + '</p>' + '<p>' + email + '</p>' + '<p>' + type + '</p>' + '</div>';
  };
};

function printPlayers(amateur, professional, dni) {
  amateur.innerHTML = '';
  professional.innerHTML = '';
  for (var i = 0; i < players.length; i++) {
    let player = players[i];
    if (player[7] === 'amateur') {
      amateur.innerHTML += '<div class="bg-grey2 list2">' + '<p>' + player[0] + ' ' + player[1] + ' ' + player[3] + ' ' + player[7] + '</p>' + '</div>';
    } else if (player[7] === 'profesional') {
      professional.innerHTML += '<div class="bg-grey2 list2">' + '<p>' + player[0] + ' ' + player[1] + ' ' + player[3] + ' ' + player[7] + '</p>' + '</div>';
    };
  };
};

function checkDuplicatePlayer(dni) {
  for (var i = 0; i < players.length; i++) {
    let player = players[i]
    if (player[2] == dni) {
      return false;
    };
  }
  return true;
};

function diffAnys(date1, date2, format = "A") {
  if (date1 == undefined || date2 == undefined) return -1;
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  switch (format) {
    case "A":
      return years;
      break;
    case "M":
      return moths;
      break;
    default:
      return days;
  };
};

function isValidPlayer(pMinAnys) {
  let dataNai = document.getElementById("date").value;
  let aDate = dataNai.split("/");
  let bornDate = new Date(aDate[2], aDate[1] - 1, aDate[0]);
  let currentDate = new Date();
  let age = diffAnys(currentDate, bornDate);
  return (age >= pMinAnys);
};

function validateAge(type) {
  if (!isValidPlayer(16)) {
    alert("Los jugadores tienen que ser mayores de 16 años");
    return false;
  } else if (isValidPlayer(18) && type == 'amateur') {
    alert('Para participar como amateur debes ser mayor de 16 y menor de 18 años');
    return false;
  } else if (!isValidPlayer(18) && type == 'profesional') {
    alert('Para participar como profesional debes ser mayor de 18 años');
    return false;
  } else {
    return true;
  };
};

function validateInfo() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const dni = document.getElementById('dni').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const account = document.getElementById('account').value;
  const type = document.getElementById('type').options[document.getElementById('type').selectedIndex].value;
  const amateur = document.getElementById('begginer');
  const profesional = document.getElementById('profesional');

  if (validateCamps(name, surname, dni, email, phone, date, account)) {
    if (validateEmail(email) && validateName(name) && validateSurname(surname) && validatePhone(phone) && validateDate(date) && validateDni(dni) && validateAccount(account) && validateAge(type)) {
      if (checkDuplicatePlayer(dni)) {
        players.push([name, surname, dni, email, phone, date, account, type]);
        players.sort();
        printPlayers(amateur, profesional, dni);
        document.datosP.reset();
      } else {
        alert('jugador repetido');
      };
    };
  } else {
    alert('Es necesario rellenar todos los campos del formulario');
  };
};
