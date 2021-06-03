let xCell = document.getElementById('cell1');
let oCell = document.getElementById('cell2');
let firstContainer = document.querySelector('.front-container');
let secondContainer = document.querySelector('.back-container');
let heading = document.getElementById('title');
let xClass = 'x';
let oClass = 'o';
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cellElements = document.querySelectorAll('[data-cell]');
let resetButton = document.getElementById('reset-btn');
let nextButton = document.querySelector('.next-btn');
let prevButton = document.querySelector('.prev-btn');
let oTurn;
let movesStorage = [];
let gameHistory = [];
cols = Array.from(cellElements);

xCell.addEventListener('click', () => {
    firstContainer.classList.add('hide');
    secondContainer.classList.add('show');
    oTurn = false;
    startGame();    
});

oCell.addEventListener('click', () => {
    firstContainer.classList.add('hide');
    secondContainer.classList.add('show');
    oTurn = true;
    startGame();    
});

resetButton.addEventListener('click', startGame);
prevButton.addEventListener('click', prevButtonFunction);
nextButton.addEventListener('click', nextButtonFunction);

function prevButtonFunction() {
    nextButton.classList.add('pop');
    nextButton.classList.remove('hide');
    if (movesStorage.length != 0) {
        let prevMove = movesStorage[movesStorage.length-1];
        let cell = prevMove.place;
        let currentClass = prevMove.mark;
        deleteMark(cell, currentClass);
        gameHistory.push(prevMove);
        movesStorage.pop();
    }
    if (movesStorage.length === 0) {
        prevButton.classList.add('hide');
    }
}

function nextButtonFunction() {
    prevButton.classList.remove('hide');
    if (gameHistory.length != 0) {
        let nextMove = gameHistory[gameHistory.length-1];
        let cell = nextMove.place;
        let currentClass = nextMove.mark;
        placeMark(cell, currentClass);
        movesStorage.push(nextMove);
        gameHistory.pop();
    }
    if (gameHistory.length === 0) {
        nextButton.classList.add('hide');
    }
}

function startGame() {
    movesStorage.length = 0;
    gameHistory.length = 0;
    nextButton.classList.remove('hide');
    prevButton.classList.remove('hide');
    nextButton.classList.remove('pop');
    prevButton.classList.remove('pop');
    heading.innerHTML = "Start!";
    cellElements.forEach(cell => {
        cell.classList.remove(xClass);
        cell.classList.remove(oClass);
        cell.classList.remove('disabled');
        cell.classList.remove('win');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true});
    });
}

function handleClick(e) {
    let cell = e.target;
    let currentClass = oTurn ? oClass : xClass;
    placeMark(cell, currentClass);
    let storeMove = {};
    storeMove.place = cell;
    storeMove.mark = currentClass;
    movesStorage.push(storeMove);
    if (checkWin(currentClass)) {
        endGame(false);
        colorWin();
    }
    else if (isDraw()) {
        endGame(true);
    }
    else {
        swapTurns();
    }
}

function endGame(draw) {
    if (draw) {
        heading.innerHTML = "Game ended in a draw!";
        prevButton.classList.add('pop');
    }
    else {
        heading.innerHTML = `${oTurn ? "Player O Wins!" : "Player X Wins!"}`;
        cellElements.forEach(cell => {
            cell.removeEventListener('click', handleClick);
            cell.classList.add('disabled');
        });
        prevButton.classList.add('pop');
    }
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function deleteMark(cell, currentClass) {
    cell.classList.remove(currentClass);
}

function swapTurns() {
    oTurn = !oTurn;
    heading.innerHTML = `${oTurn ? "Player O's Turn!" : "Player X's Turn!"}`;
}

function checkWin(currentClass) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    }); 
}

function colorWin() {
    let currentClass = oTurn ? oClass : xClass;
    if (cols[0].classList.contains(currentClass) && cols[1].classList.contains(currentClass) && cols[2].classList.contains(currentClass)) {
        cols[0].classList.add('win');
        cols[1].classList.add('win');
        cols[2].classList.add('win');
    }
    if (cols[3].classList.contains(currentClass) && cols[4].classList.contains(currentClass) && cols[5].classList.contains(currentClass)) {
        cols[3].classList.add('win');
        cols[4].classList.add('win');
        cols[5].classList.add('win');
    }
    if (cols[6].classList.contains(currentClass) && cols[7].classList.contains(currentClass) && cols[8].classList.contains(currentClass)) {
        cols[6].classList.add('win');
        cols[7].classList.add('win');
        cols[8].classList.add('win');
    }
    if (cols[0].classList.contains(currentClass) && cols[3].classList.contains(currentClass) && cols[6].classList.contains(currentClass)) {
        cols[0].classList.add('win');
        cols[3].classList.add('win');
        cols[6].classList.add('win');
    }
    if (cols[1].classList.contains(currentClass) && cols[4].classList.contains(currentClass) && cols[7].classList.contains(currentClass)) {
        cols[1].classList.add('win');
        cols[4].classList.add('win');
        cols[7].classList.add('win');
    }
    if (cols[2].classList.contains(currentClass) && cols[5].classList.contains(currentClass) && cols[8].classList.contains(currentClass)) {
        cols[2].classList.add('win');
        cols[5].classList.add('win');
        cols[8].classList.add('win');
    }
    if (cols[0].classList.contains(currentClass) && cols[4].classList.contains(currentClass) && cols[8].classList.contains(currentClass)) {
        cols[0].classList.add('win');
        cols[4].classList.add('win');
        cols[8].classList.add('win');
    }
    if (cols[2].classList.contains(currentClass) && cols[4].classList.contains(currentClass) && cols[6].classList.contains(currentClass)) {
        cols[2].classList.add('win');
        cols[4].classList.add('win');
        cols[6].classList.add('win');
    }
}



