
let startButton = document.getElementById('start');
let status = document.getElementById('status');
let player = status.textContent; 

//List of Squares ------------------------------
let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');

let wins =
//Row One 
[[cell0, cell1, cell2],
//Row Two
[cell3, cell4, cell5], 
//Row Three
[cell6, cell7, cell8], 
//Column One
[cell0, cell3, cell6], 
//Column Two
[cell1, cell4, cell7], 
//Column Three
[cell2, cell5, cell8],
//Diagonal One
[cell0, cell4, cell8],
//Diagonal Two
[cell2, cell4, cell6]]

let winsCheck = function () {
    for (winning of wins) {
        if (winning[0].textContent !== '') {
            if (winning[0].textContent === winning[1].textContent && winning[1].textContent === winning[2].textContent){
            return true;
        }
    }}
}

let handleClick = function() {
    player = status.textContent;
    if (event.target.textContent === 'X' || event.target.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
    event.target.textContent = 'X';
    status.textContent = 'Player O\'s turn';
    } else if (status.textContent === 'Player O\'s turn') {
        event.target.textContent = 'O';
        status.textContent = 'Player X\'s turn';
    }
    if (winsCheck()) {
        alert ('Congradulations! ' + player + ' You have won!');
    }
}

startButton.addEventListener('click', () => {
    event.target.disabled = true;
    status.textContent = 'Player X\'s turn';
})

//Clicking on a Square -----------------------------
cell0.addEventListener('click', handleClick);
cell1.addEventListener('click', handleClick);
cell2.addEventListener('click', handleClick);
cell3.addEventListener('click', handleClick);
cell4.addEventListener('click', handleClick);
cell5.addEventListener('click', handleClick);
cell6.addEventListener('click', handleClick);
cell7.addEventListener('click', handleClick);
cell8.addEventListener('click', handleClick);

