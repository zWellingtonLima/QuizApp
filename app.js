const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']
const finalResultContainer = document.querySelector('.final-score-container');
let userScore = 0

setInterval(() => {
  innerHeight--
}, 100)

const getUserAnswers = () => correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)  


const calculateUserScore = userAnswers => {
  userAnswers.forEach((answer, index) => {
    const isUserAnswerCorrect = answer === correctAnswers[index] 

    if (isUserAnswerCorrect) {
      userScore += 25
    }
  })
}

const showUserScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  finalResultContainer.classList.remove('d-none')
}

const animateUserScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === userScore) {
      clearInterval(timer)
    }

    finalResultContainer.querySelector('span').textContent = `${counter++}%`
  }, 15)
}

const resetUserScore = () => {
  userScore = 0
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  resetUserScore()
  calculateUserScore(userAnswers)
  showUserScore()
  animateUserScore()
})

