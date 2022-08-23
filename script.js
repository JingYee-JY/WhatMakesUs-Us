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
let choosenAnswer;
let score;
let choice;

let Q1correctAnswer = [
    {number:"1",image:"./img/ChineseHeritage.png"},
    {image: "2",image:"./img/CulturalInteractions.png"},
    {image: "3",image:"./img/PublicPolices.png"}]
let Q1wrongAnswer = [
    {number:"4",image:"./img/AsiaHeritage.png"},
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
let Q2correctAnswerSelect = [
        {image:"./img/Cotton Trade Select.png"},
        {image:"./img/Hornbill Casque Trade Select.png"},
        {image:"./img/Laka Wood Trade Select.png"}]
let Q2wrongAnswerSelect = [
        {image:"./img/Fish Trade Select.png"},
        {image:"./img/Gold Metal Trade Select.png"},
        {image:"./img/Oil Trade Select.png"},
        {image:"./img/Silk Trade Select.png"},
        {image:"./img/Spice Trade Select.png"},
        {image:"./img/Tea Trade Select.png"}]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    current = 0;
    totalQuestion = 3;
    score = 0;
    Question()
})

ans1.addEventListener("click", () => {
    if(choosenAnswer == false & randomQuestionIndex == 0){
        ans2.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans3.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans1.style.backgroundColor = "black"
        choice = btn1Answer
    }
    else if(choosenAnswer == false & randomQuestionIndex == 1){
        ans2.innerHTML = `<img class="answer" src="${btn2Image}">`
        ans3.innerHTML = `<img class="answer" src="${btn3Image}">`
        ans1.innerHTML = `<img class="answer" src="${btn1Select}">`
        choice = btn1Answer
    }
})
ans2.addEventListener("click", () => {
    if(choosenAnswer == false & randomQuestionIndex == 0){
        ans1.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans3.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans2.style.backgroundColor = "black"
        choice = btn2Answer
    }
    else if(choosenAnswer == false & randomQuestionIndex == 1){
        ans1.innerHTML = `<img class="answer" src="${btn1Image}">`
        ans3.innerHTML = `<img class="answer" src="${btn3Image}">`
        ans2.innerHTML = `<img class="answer" src="${btn2Select}">`
        choice = btn2Answer
    }
})
ans3.addEventListener("click", () => {
    if(choosenAnswer == false & randomQuestionIndex == 0){
        ans2.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans1.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans3.style.backgroundColor = "black"
        choice = btn3Answer
    }
    else if(choosenAnswer == false & randomQuestionIndex == 1){
        ans2.innerHTML = `<img class="answer" src="${btn2Image}">`
        ans1.innerHTML = `<img class="answer" src="${btn1Image}">`
        ans3.innerHTML = `<img class="answer" src="${btn3Select}">`
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
        <img class="correct" src="./img/correct.png">
            <button class="next">
                <img class="nextbtn" src="./img/next.png">
            </button>`
    }
    else{
        popUp.classList.remove("hide")
        pop.innerHTML = `
        <img class="correct" src="./img/keepItUp.png">
            <button class="next">
                <img class="nextbtn" src="./img/next.png">
            </button>`
    }
    choosenAnswer = true;
    let next = document.querySelector(".next")
    next.addEventListener("click", () => {
        ans1.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans2.style.backgroundColor = "rgba(255, 255, 255,0)"
        ans3.style.backgroundColor = "rgba(255, 255, 255,0)"
        popUp.classList.add("hide")
        Question()
    })
})

function Question(){
    choosenAnswer = false
    let correctImg
    let newQuestion

    if(current == totalQuestion){
        console.log(score)
        final.classList.remove("hide")
        if(score == totalQuestion){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone1.png">
            </div>
            <div class="top"></div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/100.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 2){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone1.png">
            </div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/66.png">
            <button class="playAgain">
            <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 1){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone1.png">
            </div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/33.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 0){
            final.innerHTML = `
            <div class="top"></div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/0.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
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
        <p>What shaped Chinese Singaporean culture?</p>`
        
        correctAnswer = Q2correctAnswer[randomRightIndex].number
        btn1Answer = Q2wrongAnswer[randomwrong1Index].number
        btn2Answer = Q2wrongAnswer[randomwrong2Index].number
        btn3Answer = Q2wrongAnswer[randomwrong3Index].number

        ans1.innerHTML = `<img class="answer" src="${Q1wrongAnswer[randomwrong1Index].image}">`
        ans2.innerHTML = `<img class="answer" src="${Q1wrongAnswer[randomwrong2Index].image}">`
        ans3.innerHTML = `<img class="answer" src="${Q1wrongAnswer[randomwrong3Index].image}">`
        let correctAnswerIndex = Math.floor(Math.random() * 3)+1;
        let correctAnswerId = "btn" + correctAnswerIndex;
        document.getElementById(correctAnswerId).innerHTML = `<img class="answer" src="${Q1correctAnswer[randomRightIndex].image}"/>`

        if(correctAnswerIndex == 1){
            btn1Answer = correctAnswer
            btn1Image = Q2correctAnswer[randomRightIndex].image
            btn1Select = Q2correctAnswerSelect[randomRightIndex].image
        }
        if(correctAnswerIndex == 2){
            btn2Answer = correctAnswer
            btn2Image = Q2correctAnswer[randomRightIndex].image
            btn2Select = Q2correctAnswerSelect[randomRightIndex].image
        }
        if(correctAnswerIndex == 3){
            btn3Answer = correctAnswer
            btn3Image = Q2correctAnswer[randomRightIndex].image
            btn3Select = Q2correctAnswerSelect[randomRightIndex].image
        }
    }
    if(randomQuestionIndex == 1){
        question.innerHTML = `
        <p>以下哪一个是14世纪淡马锡贸易的商品？</p>
        <p>Below which one is Temasek traded product on 14th century？</p>`

        correctAnswer = Q2correctAnswer[randomRightIndex].number
        btn1Answer = Q2wrongAnswer[randomwrong1Index].number
        btn2Answer = Q2wrongAnswer[randomwrong2Index].number
        btn3Answer = Q2wrongAnswer[randomwrong3Index].number

        btn1Image = Q2wrongAnswer[randomwrong1Index].image
        btn2Image = Q2wrongAnswer[randomwrong2Index].image
        btn3Image = Q2wrongAnswer[randomwrong3Index].image

        btn1Select = Q2wrongAnswerSelect[randomwrong1Index].image
        btn2Select = Q2wrongAnswerSelect[randomwrong2Index].image
        btn3Select = Q2wrongAnswerSelect[randomwrong3Index].image

        ans1.innerHTML = `<img class="answer" src="${Q2wrongAnswer[randomwrong1Index].image}">`
        ans2.innerHTML = `<img class="answer" src="${Q2wrongAnswer[randomwrong2Index].image}">`
        ans3.innerHTML = `<img class="answer" src="${Q2wrongAnswer[randomwrong3Index].image}">`
        let correctAnswerIndex = Math.floor(Math.random() * 3)+1;
        let correctAnswerId = "btn" + correctAnswerIndex;
        document.getElementById(correctAnswerId).innerHTML = `<img class="answer" src="${Q2correctAnswer[randomRightIndex].image}"/>`

        if(correctAnswerIndex == 1){
            btn1Answer = correctAnswer
            btn1Image = Q2correctAnswer[randomRightIndex].image
            btn1Select = Q2correctAnswerSelect[randomRightIndex].image
        }
        if(correctAnswerIndex == 2){
            btn2Answer = correctAnswer
            btn2Image = Q2correctAnswer[randomRightIndex].image
            btn2Select = Q2correctAnswerSelect[randomRightIndex].image
        }
        if(correctAnswerIndex == 3){
            btn3Answer = correctAnswer
            btn3Image = Q2correctAnswer[randomRightIndex].image
            btn3Select = Q2correctAnswerSelect[randomRightIndex].image
        }
    }
}