const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']
const finalResult = document.querySelector('.result');

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

// Função precisa ser quebrada em partes.
form.addEventListener('submit', event => {
  event.preventDefault()

  let userScore = 0

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

