console.log('Привет, мир!')



let answers = [
    {
        id: 1,
        question: "Сколько стран?",
        reply: "Гражданам 195 стран"
    },
    {
        id: 2,
        question: "Самая богатая страна в мире?",
        reply: "США – ВВП $25.46 трлн."
    },
    {
        id: 3,
        question: "Самая бедная страна в мире?",
        reply: "Бурунди, Африка"
    },
    {
        id: 4,
        question: "Самая большая страна в мире?",
        reply: "Россия"
    },
    {
        id: 5,
        question: "Самая маленькая страна в мире?",
        reply: "Ватикан"
    },
    {
        id: 6,
        question: "Количество континентов",
        reply: "7, Азия, Африка, Северная Америка, Южная Америка, Антарктида, Европа и Австралия."
    }
]

const container = document.getElementById("container-main")

function renderAnswers() {
    
   answers.forEach((answer) => {
    container.innerHTML += `
    <div class="flex justify-between items-center bg-blue-800 my-5 p-3 rounded-xl">
        <p class="text-slate-50 text-lg">${answer.question}</p>
        <button class="hover:cursor-pointer" id="button-answer-open-${answer.id}"><i class="fa-solid fa-chevron-down text-slate-50" ></i></button>
        <button class="hover:cursor-pointer hidden" id="button-answer-close-${answer.id}"><i class="fa-solid fa-chevron-up text-slate-50""></i></button>
    </div>
    <div class="hidden mx-3" id="container-answer-${answer.id}">
        <p class="text-blue-900 font-normal">${answer.reply}</p>
    </div>
    `
   })

   answers.forEach((answer) => {
    const buttonOpenAnswer = document.getElementById(`button-answer-open-${answer.id}`)
    const makeOpenAnswer = () => openAnswer(answer) 
    buttonOpenAnswer.addEventListener ("click", makeOpenAnswer )

    const buttonCloseAnswer = document.getElementById(`button-answer-close-${answer.id}`)
    const makeCloseAnswer = () => closeAnswer(answer) 
    buttonCloseAnswer.addEventListener ("click", makeCloseAnswer )
   })
}


function openAnswer(answer) {

    console.log(answer)

    const containerAnswer = document.getElementById(`container-answer-${answer.id}`)
    containerAnswer.style.display = "flex"
    
    const buttonOpenAnswer = document.getElementById(`button-answer-open-${answer.id}`)
    buttonOpenAnswer.style.display = "none"

    const buttonCloseAnswer = document.getElementById(`button-answer-close-${answer.id}`)
    buttonCloseAnswer.style.display = "flex"

}

function closeAnswer(answer) {

    console.log(answer)

    const containerAnswer = document.getElementById(`container-answer-${answer.id}`)
    containerAnswer.style.display = "none"
    
    const buttonOpenAnswer = document.getElementById(`button-answer-open-${answer.id}`)
    buttonOpenAnswer.style.display = "flex"

    const buttonCloseAnswer = document.getElementById(`button-answer-close-${answer.id}`)
    buttonCloseAnswer.style.display = "none"

}



renderAnswers()