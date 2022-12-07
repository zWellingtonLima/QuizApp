const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']
const finalResult = document.querySelector('.result');
let userScore = 0

setInterval(() => {
  innerHeight--
}, 100)

const getUserAnswers = () => {
  const userAnswers = []

  correctAnswers.forEach((answer, index) => {
    userAnswers.push(form[`inputQuestion${index + 1}`].value)
  })

  return userAnswers
}

const calculateUserScore = userAnswers => {
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      userScore += 25
    }
  })

  return userScore
}

// Função precisa ser quebrada em partes.
form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  calculateUserScore(userAnswers)

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

