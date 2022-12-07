const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']
const finalResultContainer = document.querySelector('.result');
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

const showUserScore = () => {
  scrollTo(0,0)

  finalResultContainer.classList.remove('d-none')
}

const animateUserScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === userScore) {
      clearInterval(timer)
    }

    finalResultContainer.querySelector('span').textContent = `${counter}%`
    counter++
  }, 15)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  calculateUserScore(userAnswers)
  showUserScore()
  animateUserScore()
})

