
const setNumberOfSides = () => {
  const numSides = document.getElementById('dice-selector').value
  const randomRoll = Math.ceil(Math.random() * numSides)
  document.getElementById('dice').innerHTML = randomRoll
}

const rollDice = () => {

  rollInterval = setInterval(() => {
    setNumberOfSides()
  }, 10);

  setTimeout(() => {
    clearInterval(rollInterval)
  }, 2000);
}