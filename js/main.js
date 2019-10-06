import {
  validateCamps,
  validateEmail,
  validateName,
  validateSurname,
  validatePhone,
  validateDate,
  validateDni,
  validateAccount,
  validateAge
} from './validate.js';

import {
  checkDuplicatePlayer,
  printPlayers
} from './players.js'

const players = [];

function cleanValues() {
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('dni').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('date').value = '';
  document.getElementById('account').value = '';
};

function validateInfo() {
  const Name = document.getElementById('name').value;
  const Surname = document.getElementById('surname').value;
  const Dni = document.getElementById('dni').value;
  const Email = document.getElementById('email').value;
  const Phone = document.getElementById('phone').value;
  const Date = document.getElementById('date').value;
  const Account = document.getElementById('account').value;
  const Type = document.getElementById('type')[document.getElementById('type').selectedIndex].value;
  const Amateur = document.getElementById('begginer');
  const Profesional = document.getElementById('profesional');

  if (validateCamps(Name, Surname, Dni, Email, Phone, Date, Account)) {
    if (validateEmail(Email) && validateName(Name) && validateSurname(Surname) && validatePhone(Phone) && validateDate(Date) && validateDni(Dni) && validateAccount(Account) && validateAge(Type)) {
      if (checkDuplicatePlayer(Dni)) {
        players.push([Name, Surname, Dni, Email, Phone, Date, Account, Type]);
        printPlayers(Amateur, Profesional, Dni);
        cleanValues();
      } else {
        alert('jugador repetido');
      };
      console.log(players);
    };
  } else {
    alert('Es necesario rellenar todos los campos del formulario');
  };
};
