const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C++",
        c: "Pyton",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "CSS",
        b: "CSS",
        c: "PSCC",
        d: "JHTML",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "HTML",
        b: "HTML",
        c: "HTML",
        d: "Hyper Text Marked Languange",
        correct: "d",
    },
    {
        question: "What year was Javascript launched",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function dselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submit.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> You answered correctly at ${score}
                /${quizData.length} question </h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})