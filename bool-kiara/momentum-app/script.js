// Onload
window.onload = function() {
    showDate();
    showTime();
    userGreeting();
    focusQuestion();
    mainFocusTitle();
    showQuotes();
    toDoTitleNow();
}

// Date
let appDate = document.getElementById('date-container');

function showDate() {
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let month = monthsArray[date.getMonth()];
    let nameDay = daysArray[date.getDay()];
    let day = date.getDate();
    // let year = date.getFullYear();
    appDate.textContent = nameDay + ", " + month + " " + day; //", " + year
}

// Time
let appTime = document.getElementById('time-container');

function showTime() {
    let time = new Date();
    let hours = time.getHours();
    let ampm = time.getHours() >= 12 ? "PM" : "AM";
    let minutes = time.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = forMinutes(minutes);
    appTime.textContent = hours + ":" + minutes + " " + ampm;
    setTimeout(showTime, 1000);
}

function forMinutes(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

// Greeting
let appGreeting = document.getElementById('greeting');

function userGreeting() {
    let hours = new Date().getHours();
    let greeting = "";
    if (hours < 12) {
        greeting = "Good morning, ";
    }
    else if (hours < 18) {
        greeting = "Good afternoon, ";
    }
    else {
        greeting = "Good evening, ";
    }
    appGreeting.textContent = greeting;
}

// Name
let appName = document.getElementById('name');
let nameEdit = document.getElementById('edit-icon')

nameEdit.addEventListener('click', () => {
    appName.focus();
})

appName.addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) {
        enter.preventDefault();
    }
});

// Focus
let appFocusQuestion = document.getElementById('focus-question');
let appFocusAnswer = document.getElementById('focus-answer');
let appMainFocusTitle = document.getElementById('mfocus-title');
let appMainFocus = document.getElementById('mfocus-input');
let appFocusContainer = document.getElementById('focus-container');
let appMFocusContainer = document.querySelector('.mfocus-container');
let appMFocusCheckbox = document.getElementById('mfocus-checkbox');
let removeMFocus = document.getElementById('mfocus-remove');

function focusQuestion() {
    let hours = new Date().getHours();
    let question = "";
    if (hours < 12) {
        question = "What is your main focus this morning?";
    }
    else if (hours < 18) {
        question = "What is your main focus this afternoon?";
    }
    else {
        question = "What is your main focus this evening?";
    }
    appFocusQuestion.textContent = question;
}

appFocusAnswer.addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) {
        if (this.value === "") {
            alert("Please enter your main focus.");
            return false;
        }
        else transferAnswer();
    }
});

function mainFocusTitle() {
    let hours = new Date().getHours();
    let focusTitle = "";
    if (hours < 12) {
        focusTitle = "THIS MORNING";
    }
    else if (hours < 18) {
        focusTitle = "THIS AFTERNOON";
    }
    else {
        focusTitle = "THIS EVENING";
    }
    appMainFocusTitle.textContent = focusTitle;
}

function transferAnswer() {
    appMainFocus.textContent = appFocusAnswer.value;
    appFocusAnswer.value = "";
    appFocusContainer.classList.toggle('hide');
    appMFocusContainer.classList.toggle('show');
}

appMFocusCheckbox.onclick = function () {
    let input = this.nextElementSibling;
    input.classList.toggle('checked');
};

removeMFocus.onclick = function () {
    let input = this.previousElementSibling;
    input.textContent = "";
    if (input.classList.contains('checked')) {
        input.classList.toggle('checked');
    }
    appMFocusCheckbox.checked = false;
    appFocusContainer.classList.toggle('hide');
    appMFocusContainer.classList.toggle('show');
};

// Quotes
let quotesArray = [
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." — Hellen Keller',
'"Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible." — Francis of Assisi',
'"Keep your face always toward the sunshine - and shadows will fall behind you." — Walt Whitman',
'"No matter what people tell you, words and ideas can change the world." — Robin Williams',
'"The best preparation for tomorrow is doing your best today." — H. Jackson Brown, Jr.',
'"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you." — Ralph Waldo Emerson',
'"The only journey is the one within." — Rainer Maria Rilke',
'"No act of kindness, no matter how small, is ever wasted." — Aesop',
'"Don\'t judge each day by the harvest you reap but by the seeds that you plant." — Robert Louis Stevenson',
'"If you believe in yourself and have dedication and pride - and never quit, you\'ll be a winner. The price of victory is high but so are the rewards." — Bear Bryant',
'"It is during our darkest moments that we must focus to see the light." — Aristotle Onassis'
];
let appQuotes = document.getElementById('quotes-text');
let appQuotesAuthor = document.getElementById('quotes-author');
let appQuotesContainer = document.querySelector('.add-quotes-container');
let appAddQuoteIcon = document.getElementById('add-quote-icon');
let appQuoteCancel = document.getElementById('quote-cancel');
let appQuoteSubmit = document.getElementById('quote-submit');
let enteredQuote = document.getElementById('new-quote');
let enteredAuthor = document.getElementById('new-quote-author');


function showQuotes() {
    let i = Math.floor(Math.random() * (quotesArray.length));
    let quote = quotesArray[i];
    let quoteIndex = quote.indexOf('"',5) + 1;
    let quoteText = quote.slice(0, quoteIndex);
    let quoteAuthor = quote.slice(quoteIndex + 1);
    appQuotes.textContent = quoteText;
    appQuotesAuthor.textContent = quoteAuthor;
    setTimeout(showQuotes, 3500);
}

appAddQuoteIcon.onclick = function() {
    appQuotesContainer.classList.toggle('show-faster');
};

appQuoteCancel.onclick = function() {
    appQuotesContainer.classList.toggle('show-faster');
};

window.addEventListener('click',(exit) => {
    if (exit.target === appQuotesContainer) {
        appQuotesContainer.classList.toggle('show-faster');
    }
})

appQuoteSubmit.onclick = function() {
    let newQuote = ' "' + enteredQuote.value + '"';
    let newAuthor = ' —' + enteredAuthor.value;
    if(newQuote.length > 3 && newAuthor.length > 2) {
        let addedQuote = newQuote + newAuthor;
        quotesArray.push(addedQuote);
        appQuotes.textContent = newQuote;
        appQuotesAuthor.textContent = newAuthor;
        appQuotesContainer.classList.toggle('show-faster');
        enteredQuote.value = "";
        enteredAuthor.value = "";
    }
    else {
        alert('Input cannot be empty.')
    }
};

// ToDo
let toDoBtn = document.getElementById('todo-trigger');
let popup = document.querySelector('.popup-container');
let toDoTitle = document.getElementById('todo-title');
let toDoInput = document.getElementById('todo-input');
let toDoList = document.querySelector('.todo-list-container');

toDoBtn.onclick = function () {
    popup.classList.toggle('show');
};

function toDoTitleNow() {
    let hours = new Date().getHours();
    let title = "";
    if (hours < 12) {
        title = "Today";
    }
    else if (hours < 18) {
        title = "Today";
    }
    else {
        title = "Tonight";
    }
    toDoTitle.textContent = title;
}

toDoInput.addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) {
        if (this.value === "") {
            alert("Input cannot be empty.");
            return false;
        }
        else addInput();
    }
});

function addInput() {
    let input = toDoInput.value;
    toDoInput.value = "";
    let newInput = document.createElement('div');
    newInput.classList.add('input-wrapper');
    newInput.innerHTML = `
    <span class="input-text" contenteditable="true">`+ input +`</span>
    <img class="todo-done-icon" title="Task Done" src="images/checkmark icon.svg">
    <img class="input-remove-icon" title="Remove Task" src="images/plus icon thin.svg">
    `
    toDoList.append(newInput);
    let toDoDone = document.getElementsByClassName('todo-done-icon');
    for (let j = 0; j < toDoDone.length; j++) {
        toDoDone[j].onclick = function() {
            let text = this.previousElementSibling;
            text.classList.toggle('checked');
        };
    }
    let removeInput = document.getElementsByClassName('input-remove-icon');
    for (let i = 0; i <= removeInput.length; i++) {
        removeInput[i].onclick = function() {
            let wrap = this.parentElement;
            wrap.parentElement.removeChild(wrap);
        };
    }
}

// Front Page
let answer = document.getElementById('answer');
let frontPage = document.getElementById('front-page');
let secondPage = document.getElementById('container');

answer.addEventListener('keydown', function(enter) {
    if (enter.keyCode === 13) { 
        if (this.value === "") {
            alert("Please enter your name.");
            return false;
        } 
        else {
            appName.textContent = answer.value;
            frontPage.classList.toggle('hide');
            secondPage.classList.toggle('show');
        };
    }
});

// Themes
let nextButton = document.getElementById('next-theme');
let prevButton = document.getElementById('prev-theme');
let body = document.getElementById('main');
let img = 1;

function changeTheme() {
    body.style.backgroundImage = "url('images/bg" + img + ".jpg')";
    img += 1;
    if (img === 11) {
        img = 1;
    }
}

nextButton.addEventListener('click', changeTheme)