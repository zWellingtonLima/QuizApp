const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']
const finalResult = document.querySelector('.result');
let userScore = 0

setInterval(() => {
  innerHeight--
}, 100)

const getUserAnswers = (userAnswer) => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
  return userAnswer
}

// Necessário quebrar o listener em funções isoladas.
form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      userScore += 25
    }
  })

  scrollTo(0,0)

  finalResult.classList.remove('d-none')

  let counter = 0
  const timer = setInterval(() => {
    if (counter === userScore) {
      clearInterval(timer)
    }

    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 15)
})

