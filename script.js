// Initial Response and actions
var button = document.getElementById('try')
button.addEventListener('click', function () {
  var response = confirm('Would you like to play or cancel?')
  var firstChoice
  if (response === true) { // wants to play
    firstChoice = 'You pressed OK! Let\'s do this!'
    var sceneChoice = prompt('enter scene type: forest , urban , fictional')
    if (sceneChoice === null || sceneChoice === undefined) {
      firstChoice = 'You entered nothing. Refresh this page'
    } else if (sceneChoice.trim().toUpperCase() === 'FOREST') {
      firstChoice = 'Oh you like the forest. But it\'s scary out here!'
    } else if (sceneChoice.trim().toUpperCase() === 'URBAN') {
      firstChoice = 'Huh, you\'re the city boy!'
    } else if (sceneChoice.trim().toUpperCase() === 'FICTIONAL') {
      firstChoice = 'You like to imagine. You\'re into fantasy, right!'
    } else {
      firstChoice = 'You just suck. Can you even read?'
    }
  } else {
    firstChoice = 'You pressed Cancel! You Suck!'
  }
  document.getElementById('body').innerHTML = firstChoice
})

// if (choice != null) {
//   document.getElementById('demo').innerHTML = 'Hello ' + choice + '! How are you today?'
// }
