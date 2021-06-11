let identifiant = document.getElementById('identifiant')
let password = document.getElementById('password')
let email = document.getElementById('email')
let emailConfirmation = document.getElementById('email-confirm')
let annee = document.getElementById('annee')
let age = document.getElementById('age')
let form = document.querySelector('form')

let error = '';

function validIdentifiant(value) {
  if (value === '') {
    return 'l\'identifiant est obligatoire\n'
  }

  return '';
}

function validPassword(value) {
  if (value.length < 6) {
    return 'le mot de passe doit contenir au moins 6 caractères\n'
  }

  return '';
}

function validEmail(email, emailConfirmation) {
  if (email !== emailConfirmation) {
    return 'Les 2 adresses emails doivent être identiques\n'
  }

  return '';
}

form.addEventListener('submit', (event) => {
  error = ''
  error += validEmail(email.value, emailConfirmation.value)
  for(var count=0; count<form.elements.length; count++) {
    switch (form.elements[count].name) {
      case 'identifiant':
        error+= validIdentifiant(form.elements[count].value)
        break;
      case 'password':
        error += validPassword(form.elements[count].value)
        break; 
      case 'annee':
        var ageCalc = 2020-form.elements[count].value
        age.innerText = `${ageCalc} ans`
        break;
    }
  }

  if (error !== '') {
    alert(error)
    event.preventDefault()
  }
})