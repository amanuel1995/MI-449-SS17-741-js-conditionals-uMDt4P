// Initial Response and actions
var button = document.getElementById('try')
button.addEventListener('click', function () {
  var response = window.confirm('Would you like to play or cancel?')
  var firstChoice
  if (response === true) { // wants to play
    firstChoice = 'You pressed OK! Let\'s do this!'
    var sceneChoice = window.prompt('enter scene type: forest , urban , fictional')
    if (sceneChoice === null || sceneChoice === undefined) {
      firstChoice = 'You entered nothing. Refresh this page'
      document.getElementById('body').innerHTML = firstChoice
    } else if (sceneChoice.trim().toUpperCase() === 'FOREST') {
      firstChoice = 'Oh you like the forest. But it\'s scary out here!'
      document.getElementById('body').innerHTML = firstChoice
    } else if (sceneChoice.trim().toUpperCase() === 'URBAN') {
      firstChoice = 'Huh, you\'re the city boy!'
      document.getElementById('body').innerHTML = firstChoice
    } else if (sceneChoice.trim().toUpperCase() === 'FICTIONAL') {
      firstChoice = 'You like to imagine. You\'re into fantasy, right!'
      document.getElementById('body').innerHTML = firstChoice
    } else {
      firstChoice = 'You just suck. Can you even read?'
      document.getElementById('body').innerHTML = firstChoice
    }
    var age = window.prompt('How old are you, by the way?')
    if (age === null || age === undefined) {
      var magicNum = Math.random()
      if (magicNum > 0.5) {
        firstChoice = 'You don\'t know how old you are, smh!'
      } else if (magicNum < 0.5) {
        firstChoice = 'Interesting! You don\'t want to say huh!'
        document.getElementById('body').innerHTML = firstChoice
      } else {
        firstChoice = 'C\'mmon I gotta know how old you are to show you the appropriate adventure'
        document.getElementById('body').innerHTML = firstChoice
      }
    } else if (age >= 18) {
      firstChoice = 'You are an adult. Good!'
      document.getElementById('body').innerHTML = firstChoice
    } else if (age < 18) {
      firstChoice = 'You are underage. I can\'t take you on this adventure'
      document.getElementById('body').innerHTML = firstChoice
    } else {
      firstChoice = 'You are so damn dumb. Go get some education.'
      document.getElementById('body').innerHTML = firstChoice
    }
  } else { // doesn't want to play.
    firstChoice = 'You pressed Cancel! You don\'t want to play.!'
    document.getElementById('body').innerHTML = firstChoice
  }
  document.getElementById('body').innerHTML = firstChoice
})
