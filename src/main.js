const rollDice = () => {
  const numSides = document.getElementById('dice-selector').value
  const randomRoll = Math.ceil(Math.random() * numSides)
  document.getElementById('dice').innerHTML = randomRoll
}
