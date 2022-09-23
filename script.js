const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const question = document.querySelector(".question")
const questionNumber = document.querySelector(".QuestionNumber")
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const popUp = document.querySelector(".popUp");
const pop = document.querySelector(".pop");
const submit = document.querySelector(".submit");
const end = document.querySelector(".end");
const final = document.querySelector(".final");

let current;
let totalQuestion = 3;

let btn1Answer;
let btn2Answer;
let btn3Answer;
let btn1Image;
let btn2Image;
let btn3Image;
let btn1Select;
let btn2Select;
let btn3Select;

let randomQuestionIndex;
let correctAnswer;
let correctImg;
let choosenAnswer;
let score;
let choice;

let Q1correctAnswer = [
    {number:"1",image:"./img/ChineseHeritage.png"},
    {number: "2",image:"./img/CulturalInteractions.png"},
    {number: "3",image:"./img/PublicPolices.png"}]
let Q1wrongAnswer = [
    {number:"4",image:"./img/Malaysia.png"},
    {number:"5",image:"./img/FoodCourt.png"},
    {number:"6",image:"./img/HeritageHistory.png"},
    {number:"7",image:"./img/Singaporean.png"},
    {number:"8",image:"./img/TropicalClimate.png"},
    {number:"9",image:"./img/LivinigCultural.png"}]
        
let Q2correctAnswer = [
    {number:"1",image:"./img/Cotton Trade.png"},
    {number:"2",image:"./img/Hornbill Casque Trade.png"},
    {number:"3",image:"./img/Laka Wood Trade.png"}]
let Q2wrongAnswer = [
    {number:"4",image:"./img/Fish Trade.png"},
    {number:"5",image:"./img/Gold Metal Trade.png"},
    {number:"6",image:"./img/Oil Trade.png"},
    {number:"7",image:"./img/Silk Trade.png"},
    {number:"8",image:"./img/Spice Trade.png"},
    {number:"9",image:"./img/Tea Trade.png"}]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    current = 0;
    totalQuestion = 3;
    score = 0;
    Question()
})

window.addEventListener('dblclick', function(event) {
    event.preventDefault();
    }, { passive: false });

ans1.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans3.style.border = ""
        ans2.style.border = ""
        ans1.style.border = "7px solid red"
        ans1.style.borderRadius = "24px"
        ans1.classList.add("selected")
        choice = btn1Answer
    }
})
ans2.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans1.style.border = ""
        ans3.style.border = ""
        ans2.style.border = "7px solid red"
        ans2.style.borderRadius = "24px"
        ans2.classList.add("selected")
        choice = btn2Answer
    }
})
ans3.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans1.style.border = ""
        ans2.style.border = ""
        ans3.style.border = "7px solid red"
        ans3.style.borderRadius = "24px"
        ans3.classList.add("selected")
        choice = btn3Answer
    }
})

submit.addEventListener("click", () => {
    if(choice == null){
        return
    }
    if(choice == correctAnswer){
        score += 1;
        popUp.classList.remove("hide")
        pop.innerHTML = `
        <img class="next" src="./img/correct.png">`
    }
    else{
        popUp.classList.remove("hide")
        /*pop.innerHTML = `
        <img class="next" src="./img/keepItUp.png">`*/
        pop.innerHTML = `
        <img class="next" src="./img/keepItUpV2.png">
        <p style="z-index: 1;">正确答案是</p>
        <p style="z-index: 1;">The correct answer is</p>
        <img class="right" style="z-index: 1;" src="${correctImg}">`
    }
    choosenAnswer = true;
    let next = document.querySelector(".next")
    next.addEventListener("click", () => {
        ans1.style.border = ""
        ans2.style.border = ""
        ans3.style.border = ""
        choice = null
        popUp.classList.add("hide")
        Question()
    })
})

function Question(){
    choosenAnswer = false
    let newQuestion

    if(current == totalQuestion){
        console.log(score)
        game.classList.add('hide')
        final.classList.remove("hide")
        if(score == totalQuestion){
           end.src="./img/100.png"
        }
        else if(score == 2){
            end.src="./img/66.png"
        }
        else if(score == 1){
            end.src="./img/33.png"
        }
        else if(score == 0){
            end.src="./img/0.png"
        }
        let playAgain = document.querySelector(".playAgain")
        playAgain.addEventListener("click", () => {
            final.classList.add("hide")
            game.classList.remove("hide")
            current = 0;
            totalQuestion = 3;
            score = 0;
            Question()
    })

        return
    }

    current += 1;
    questionNumber.innerHTML = current + "/" + totalQuestion;

    randomQuestionIndex = Math.floor(Math.random() * 2);
    let randomRightIndex = Math.floor(Math.random() * 3);
    let randomwrong1Index = Math.floor(Math.random() * 6);
    let randomwrong2Index = Math.floor(Math.random() * 6);
    let randomwrong3Index = Math.floor(Math.random() * 6);

    for (let i = 0; i < 10; i++) {
        if(randomwrong1Index == randomwrong2Index){
            randomwrong1Index = Math.floor(Math.random() * 6);
            randomwrong2Index = Math.floor(Math.random() * 6);
            randomwrong3Index = Math.floor(Math.random() * 6);
        }
        if(randomwrong1Index == randomwrong3Index){
            randomwrong1Index = Math.floor(Math.random() * 6);
            randomwrong2Index = Math.floor(Math.random() * 6);
            randomwrong3Index = Math.floor(Math.random() * 6);
        }
        if(randomwrong2Index == randomwrong3Index){
            randomwrong1Index = Math.floor(Math.random() * 6);
            randomwrong2Index = Math.floor(Math.random() * 6);
            randomwrong3Index = Math.floor(Math.random() * 6);
        }
    }

    if(randomQuestionIndex == 0){
        question.innerHTML = `
        <p>是什么塑造了新加坡华族文化？</p>
        <p>What has shaped Chinese Singaporean culture?</p>`
        
        correctAnswer = Q1correctAnswer[randomRightIndex].number
        btn1Answer = Q1wrongAnswer[randomwrong1Index].number
        btn2Answer = Q1wrongAnswer[randomwrong2Index].number
        btn3Answer = Q1wrongAnswer[randomwrong3Index].number

        ans1.src = Q1wrongAnswer[randomwrong1Index].image
        ans2.src = Q1wrongAnswer[randomwrong2Index].image
        ans3.src = Q1wrongAnswer[randomwrong3Index].image
        let correctAnswerIndex = Math.floor(Math.random() * 3)+1;
        let correctAnswerId = "btn" + correctAnswerIndex;

        correctImg = Q1correctAnswer[randomRightIndex].image
        document.getElementById(correctAnswerId).src = correctImg

        document.getElementById(correctAnswerId).src = Q1correctAnswer[randomRightIndex].image

        if(correctAnswerIndex == 1){
            btn1Answer = correctAnswer
        }
        if(correctAnswerIndex == 2){
            btn2Answer = correctAnswer
        }
        if(correctAnswerIndex == 3){
            btn3Answer = correctAnswer
        }
    }
    if(randomQuestionIndex == 1){
        question.innerHTML = `
        <p>哪一个是14世纪淡马锡贸易的商品？</p>
        <p>Which product was traded in Temasek during the 14th century?</p>`

        correctAnswer = Q2correctAnswer[randomRightIndex].number
        btn1Answer = Q2wrongAnswer[randomwrong1Index].number
        btn2Answer = Q2wrongAnswer[randomwrong2Index].number
        btn3Answer = Q2wrongAnswer[randomwrong3Index].number

        ans1.src = Q2wrongAnswer[randomwrong1Index].image
        ans2.src = Q2wrongAnswer[randomwrong2Index].image
        ans3.src = Q2wrongAnswer[randomwrong3Index].image

        let correctAnswerIndex = Math.floor(Math.random() * 3)+1;
        let correctAnswerId = "btn" + correctAnswerIndex;
        correctImg = Q2correctAnswer[randomRightIndex].image
        document.getElementById(correctAnswerId).src = correctImg
        document.getElementById(correctAnswerId).src = Q2correctAnswer[randomRightIndex].image

        if(correctAnswerIndex == 1){
            btn1Answer = correctAnswer
        }
        if(correctAnswerIndex == 2){
            btn2Answer = correctAnswer
        }
        if(correctAnswerIndex == 3){
            btn3Answer = correctAnswer
        }
    }
}