
let startButton = document.getElementById('start');
let status = document.getElementById('status');

//Row One --------------------------------------
let row0 = document.getElementById('row-0');
let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');

//Row Two --------------------------------------
let row1 = document.getElementById('row-1');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');

//Row Three ------------------------------------
let row2 = document.getElementById('row-2');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');

//Column One -----------------------------------
//let column0 = document.getElementById('column-0');
//    cell0;
//    cell3;
//    cell6;

//Column Two -----------------------------------
//let column1 = document.getElementById('column-1');
//    cell1;
//    cell4;
//    cell8;

//Column Three ---------------------------------
//let column2 = document.getElementById('column-2');
//    cell2;
//    cell5;
//    cell8;

//Diagonal One ---------------------------------
//let diagonal0 = document.getElementById('diagonal-0');
//    cell0;
//    cell4;
//    cell8;

//Diagonal Two ----------------------------------
//let diagonal1 = document.getElementById('diagonal-1');
//    cell2;
//    cell4;
//    cell6;


startButton.addEventListener('click', () => {
    event.target.disabled = true;
    status.textContent = 'Player X\'s turn';
})

cell0.addEventListener('click', () => {
    if (cell0.textContent === 'X' || cell0.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
    cell0.textContent = 'X';
    status.textContent = 'Player O\'s turn';
    } else if (status.textContent === 'Player O\'s turn') {
        cell0.textContent = 'O';
        status.textContent = 'Player X\'s turn';
    }
})

cell1.addEventListener('click', () => {
    if (cell1.textContent === 'X' || cell1.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell1.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell1.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell2.addEventListener('click', () => {
    if (cell2.textContent === 'X' || cell2.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell2.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell2.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell3.addEventListener('click', () => {
    if (cell3.textContent === 'X' || cell3.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell3.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell3.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell4.addEventListener('click', () => {
    if (cell4.textContent === 'X' || cell4.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell4.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell4.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell5.addEventListener('click', () => {
    if (cell5.textContent === 'X' || cell5.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell5.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell5.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell6.addEventListener('click', () => {
    if (cell6.textContent === 'X' || cell6.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell6.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell6.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell7.addEventListener('click', () => {
    if (cell7.textContent === 'X' || cell7.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell7.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell7.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})

cell8.addEventListener('click', () => {
    if (cell8.textContent === 'X' || cell8.textContent === 'O') {
        alert ('Please select an empty cell.');
        return;
    }
    if (status.textContent === 'Player X\'s turn') {
        cell8.textContent = 'X';
        status.textContent = 'Player O\'s turn';
        } else if (status.textContent === 'Player O\'s turn') {
            cell8.textContent = 'O';
            status.textContent = 'Player X\'s turn';
        }})


