const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'A', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAnswers.forEach(answer, index => {
    if (answer === correctAnswers[index]) {

    }
  })
})