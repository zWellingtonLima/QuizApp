const form = document.querySelector('.quiz-form-container')
const nextQuestionBtn = document.querySelector('.next-question')
const questions = document.querySelectorAll('.questions')
const answerContainer = document.querySelector('.answer')
const questionsBoardContainer = document.querySelector('.question-board-container')
const svgPath = document.querySelector('path')
const finishBtn = document.querySelector('[data-finish="sendQuestions"]')
const questionsLength = 4
const correctAnswers = ['A', 'C', 'A', 'B']

const getUserAnswers = () => {
  let userAsnwers = []
  
  console.log(form.inputQuestion1.value)
  
  return userAsnwers
}

const getInputsQuestion = questionNumber => document.querySelectorAll(`[name="inputQuestion${questionNumber}"]`)

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

let counterQuestion = 1
let counterQuestionAnswer = 1

nextQuestionBtn.addEventListener('click', () => {
    // Questions
    const currentQuestion = document.querySelector(`.question-${counterQuestion}`)
    const nextQuestion = currentQuestion.nextElementSibling

    if (!currentQuestion.classList.contains('hidden')) {
      currentQuestion.classList.add('hidden')

    }

    counterQuestion++

    if (counterQuestion <= 4) {
      nextQuestion.classList.remove('hidden')
    }

    // if (nextQuestion.classList.contains(`question-${counterQuestion}`)) {
    //   currentQuestion.nextElementSibling.classList.remove('hidden')
    // } 

    //Answers
    const currentQuestionAnswers = document.querySelector(`.question-answer-${counterQuestionAnswer}`)
  
    if (!currentQuestionAnswers.classList.contains('hidden')) {
      currentQuestionAnswers.classList.add('hidden')
    }

    if (currentQuestionAnswers.nextElementSibling.classList.contains(`question-answer-${++counterQuestionAnswer}`)) {
      currentQuestionAnswers.nextElementSibling.classList.remove('hidden')
    }    
    

    nextQuestionBtn.setAttribute('disabled', 'true')
    svgPath.style.fill = '#66472f'
    svgPath.style.animation = 'showUp 2s ease 6s backwards'
  

  if (counterQuestion > questionsLength) {
    finishBtn.removeAttribute('disabled')
    finishBtn.classList.remove('hidden')
    questionsBoardContainer.querySelector('.goodbye').textContent = 'Parabéns! Aperte abaixo para ver sua pontuação.'
    questionsBoardContainer.querySelector('.title').textContent = ''
    nextQuestionBtn.classList.add('hidden')
  }
  
})

form.addEventListener('submit', e => {
  e.preventDefault()

  console.log(form.inputQuestion1.value);
})




// console.log(input.checked)
// console.log(input.getAttribute('value'))
