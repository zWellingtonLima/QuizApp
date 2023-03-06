const form = document.querySelector('.quiz-form-container')
const nextQuestionBtn = document.querySelector('.next-question')
const questions = document.querySelectorAll('.questions')
const answerContainer = document.querySelector('.answer')
const questionsBoardContainer = document.querySelector('.question-board-container')
const svgPath = document.querySelector('path')
const finishBtn = document.querySelector('[data-finish="sendQuestions"]')
const finalMessage = document.querySelector('.goodbye')
const plusMessage = document.querySelector('.plus-message')

const questionsLength = 4
const correctAnswers = ['A', 'C', 'A', 'B']

let counterQuestion = 1
let counterQuestionAnswer = 1

const getUserAnswers = () => {
  let userAsnwers = []
  
  correctAnswers.forEach((_, index) => {
    userAsnwers.push(form[`inputQuestion${index + 1}`].value)
  })
  
  return userAsnwers
}


const hideCurrentQuestionAndShowNext = () => {
  const currentQuestion = document.querySelector(`.question-${counterQuestion}`)
  const nextQuestion = currentQuestion.nextElementSibling
  const shouldHideCurrentQuestion = !currentQuestion.classList.contains('hidden')
  const showNextQuestionIfExists = counterQuestion <= questionsLength

  shouldHideCurrentQuestion ? currentQuestion.classList.add('hidden') : ''

  counterQuestion++

  showNextQuestionIfExists ? nextQuestion.classList.remove('hidden') : ''
}

const hideCurrentAnswersAndShowNext = () => {
  const currentQuestionAnswers = document.querySelector(`.question-answer-${counterQuestionAnswer}`)
  const shouldHideCurrentAnswers = !currentQuestionAnswers.classList.contains('hidden')
  const nextAnswers = currentQuestionAnswers.nextElementSibling
  const showNextAnswersIfExists = nextAnswers.classList.contains(`question-answer-${++counterQuestionAnswer}`)

  shouldHideCurrentAnswers ? currentQuestionAnswers.classList.add('hidden') : ''

  showNextAnswersIfExists ? nextAnswers.classList.remove('hidden') : ''
}

const disableNextQuestionBtn = () => {
  nextQuestionBtn.setAttribute('disabled', 'true')

  svgPath.style.fill = '#66472f'
  svgPath.style.animation = 'showUp 2s ease 5s backwards'
}

const handleActivateFinishBtnQuiz = () => {
  finishBtn.removeAttribute('disabled')
  finishBtn.classList.remove('hidden')

  finalMessage.classList.remove('hidden')

  questionsBoardContainer.querySelector('.title').textContent = ''

  nextQuestionBtn.classList.add('hidden')

  form.style.marginLeft = 0
}

let score = 0

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalMessage.textContent = `${counter}%`
    counter++
  }, 15);

  return counter
}

const renderUserScoreComparison = () => {
  const userAnswers = getUserAnswers()

  plusMessage.classList.remove('hidden')

  plusMessage.textContent = `O gabarito é: ${correctAnswers.join(', ')} e suas respostas foram: ${userAnswers.join(', ')}.`
}

answerContainer.addEventListener('click', e => {
  //Insere true na opção clicada
  const input = e.target.querySelector('input')
  
  if (input) {
    input.setAttribute('checked', 'true')
  }

  //Remove o disabled do nextQuestionBtn
  nextQuestionBtn.removeAttribute('disabled')

  // Altera a cor do SVG depois de remover o disabled
  svgPath.style.fill = '#f78002'
  svgPath.style.animation = ''
})

nextQuestionBtn.addEventListener('click', () => {
  const lastQuestionReached = counterQuestion >= questionsLength

  hideCurrentQuestionAndShowNext()
  hideCurrentAnswersAndShowNext()   
    
  disableNextQuestionBtn()
  
  lastQuestionReached ? handleActivateFinishBtnQuiz() : ''
})

form.addEventListener('submit', e => {
  e.preventDefault()

  finishBtn.setAttribute('disabled', 'true')

  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)

  animateFinalScore()

  renderUserScoreComparison()
})
