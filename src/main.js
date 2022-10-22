const diceAudio = new Audio('dice-roll.mp3')
let rollInterval

const setNumberOfSides = () => {
  const numSides = document.getElementById('dice-selector').value
  const randomRoll = Math.ceil(Math.random() * numSides)
  document.getElementById('dice').innerHTML = randomRoll
}

const rollDice = () => {
  clearInterval(rollInterval)
  rollInterval = setInterval(() => {
    setNumberOfSides()
  }, 10)

  setTimeout(() => {
    clearInterval(rollInterval)
  }, 1200)

  diceAudio.play()
}
