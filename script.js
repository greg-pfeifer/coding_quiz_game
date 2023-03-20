


var count = 100
var paraEl = document.querySelector('p')

var startPage = document.getElementById('startPage')
var pageOne = document.getElementById('pageOne')
var pageTwo = document.getElementById('pageTwo')
var pageThree = document.getElementById('pageThree')
var pageFour = document.getElementById('pageFour')
var pageFive = document.getElementById('pageFive')

function init () {
    var h2 = document.createElement('h2');
    h2.innerText = 'Coding Quiz Challenge';
    h2.classList.add('centered')
    startPage.appendChild(h2);

    var para = document.createElement('p');
    para.innerText = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
    para.classList.add('centered')
    startPage.appendChild(para);

    var button = document.createElement('button')
    button.classList.add('start-button', 'centered')
    button.innerText = 'Start Quiz';
    startPage.appendChild(button);
    
    button.addEventListener('click', function () {
        startPage.classList.add('displayNone')
        startTimer()
        firstPage()
    })
}
init()

function startTimer() {
    var timer = setInterval(function () {
        count--;
        paraEl.innerText = 'Timer: ' + count;
        if (count === 0) {
            clearInterval(timer);
            alert('Times Up!')
        }
    }, 1000);
}

function firstPage() {
    var h2 = document.createElement('h2');
    h2.innerText = 'The condition in an if / else statement is enclosed with __________.'
    h2.classList.add('centered')
    pageOne.appendChild(h2);

    for (i = 0; i < pageOneOptions.length; i++) {
        var optionsObj = pageOneOptions[i]
        var button = document.createElement('button')
        button.innerText = optionsObj.option
        button.classList.add('options-button')
        pageOne.appendChild(button)
    } 
} 

pageOne.addEventListener('click', function(obj){
    if (obj.target.innerText === 'parentheses') {
        alert('Correct! - Moving to next question...');
        pageOne.classList.add('displayNone');
        secondPage();
    } else {alert ('Incorrect - 10 seconds subtracted from timer!');
        count = count - 10};
})

function secondPage() {
    var h2 = document.createElement('h2');
    h2.innerText = 'In relation to JavaScript, what does the acronym OOP stand for?'
    h2.classList.add('centered')
    pageTwo.appendChild(h2);

    for (i = 0; i < pageTwoOptions.length; i++) {
        var optionsObj = pageTwoOptions[i]
        var button = document.createElement('button')
        button.innerText = optionsObj.option
        button.classList.add('options-button')
        pageTwo.appendChild(button)
    } 
} 

pageTwo.addEventListener('click', function(obj){
    if (obj.target.innerText === 'Object Oriented Programming') {
        alert('Correct! - Moving to next question...');
        pageTwo.classList.add('displayNone');
        thirdPage();
    } else {alert ('Incorrect - 10 seconds subtracted from timer!');
        count = count - 10};
})

function thirdPage() {
    var h2 = document.createElement('h2');
    h2.innerText = 'What are the three parameters of a "for" loop?'
    h2.classList.add('centered')
    pageThree.appendChild(h2);

    for (i = 0; i < pageThreeOptions.length; i++) {
        var optionsObj = pageThreeOptions[i]
        var button = document.createElement('button')
        button.innerText = optionsObj.option
        button.classList.add('options-button')
        pageThree.appendChild(button)
    } 
} 

pageThree.addEventListener('click', function(obj){
    if (obj.target.innerText === 'Count, Condition and Incrementor') {
        alert('Correct! - Moving to next question...');
        pageThree.classList.add('displayNone');
        fourthPage();
    } else {alert ('Incorrect - 10 seconds subtracted from timer!');
        count = count - 10};
})

function fourthPage() {
    var h2 = document.createElement('h2');
    h2.innerText = 'In Javascript, how do you call a function?'
    h2.classList.add('centered')
    pageFour.appendChild(h2);

    for (i = 0; i < pageFourOptions.length; i++) {
        var optionsObj = pageFourOptions[i]
        var button = document.createElement('button')
        button.innerText = optionsObj.option
        button.classList.add('options-button')
        pageFour.appendChild(button)
    } 
} 

pageFour.addEventListener('click', function(obj){
    if (obj.target.innerText === 'function( )') {
        alert('Correct! - Moving to scoreboard...');
        pageFour.classList.add('displayNone');
        fifthPage();
    } else {alert ('Incorrect - 10 seconds subtracted from timer!');
        count = count - 10};
})

function fifthPage() {
    var h2 = document.createElement('h2');
    h2.innerText = 'Your score = ' + count + '/100'
    h2.classList.add('centered')
    pageFive.appendChild(h2);
}