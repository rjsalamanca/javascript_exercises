///////////////////
// Print Numbers //
///////////////////

function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i)
    }
}

printNumbers(1, 10);

////////////////////
// Print a Square //
////////////////////

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        stars = ''
        for (let i = 0; i < size; i++) {
            stars += '*';
        }
        console.log(stars)
    }
}

printSquare(5)

/////////////////
// Print a Box //
/////////////////

function printBox(wdth, len) {
    for (let i = 0; i < len; i++) {
        if (i == 0 || i == len - 1) {
            tempFirstAndLastLines = '';
            for (let j = 0; j < wdth; j++) {
                tempFirstAndLastLines += '*'
            }
            console.log(tempFirstAndLastLines);
        } else {
            tempInBetween = '';
            for (let j = 0; j < wdth; j++) {
                if (j > 0 && j < wdth - 1) {
                    tempInBetween += ' '
                } else {
                    tempInBetween += '*'
                }
            }
            console.log(tempInBetween);
        }
    }
}

printBox(6, 4)

////////////////////
// Print a Banner //
////////////////////

function printBanner(banner) {
    banner = '* ' + banner + ' *';

    for (let i = 0; i < 3; i++) {
        if (i == 1) {
            console.log(banner)
        } else {
            tempStars = ''
            for (let j = 0; j < banner.length; j++) {
                tempStars += '*';
            }
            console.log(tempStars);
        }
    }
}

printBanner('Welcome to DigitalCrafts')

/////////////////////
// Factor a Number //
/////////////////////

function factors(num) {
    let holdFactors = [];

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            if (i * j == 120) {
                holdFactors.push(i);
            }
        }
    }
    console.log(holdFactors)
}

factors(120);

///////////
// Ciper //
///////////

function cipher(stringInput, rotNum) {
    var toCipher = stringInput.split('').map(letter => {
        letterUpper = false;

        if (letter == letter.toUpperCase()) {
            letterUpper = true;
        }

        letter = letter.toLowerCase().charCodeAt(0);

        if (letter <= 122 && letter >= 97) {
            if (letter + rotNum > 122) {
                console.log((letter + rotNum) - 122);
                letter = 96 + ((letter + rotNum) - 122);
            } else {
                letter += rotNum
            }
            if (letterUpper === true) {
                letter -= 32;
            }
        }
        return String.fromCharCode(letter)
    })

    console.log(toCipher.join(''))
}

cipher('Genius without education is like silver in the mine', 13)

function decipher(stringInput, rotNum) {
    var toDecipher = stringInput.split('').map(letter => {
        letterUpper = false;

        if (letter == letter.toUpperCase()) {
            letterUpper = true;
        }

        letter = letter.toLowerCase().charCodeAt(0);

        if (letter <= 122 && letter >= 97) {
            if (letter - rotNum < 97) {
                letter = 97 + ((letter + rotNum) - 97);
            } else {
                letter -= rotNum;
            }
            if (letterUpper === true) {
                letter -= 32;
            }
        }
        return String.fromCharCode(letter)
    })

    console.log(toDecipher.join(''))
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)

///////////////
// leetSpeak //
///////////////

function leetspeak(leetThisString) {
    var converted = leetThisString.toLowerCase().split('').map(letter => {
        switch (letter) {
            case 'a':
                return 4;
                break;
            case 'e':
                return 3;
                break;
            case 'g':
                return 6;
                break;
            case 'l':
                return 1;
                break;
            case 'o':
                return 0;
                break;
            case 's':
                return 5;
                break;
            case 't':
                return 7;
                break;
            default:
                return letter;
        }
    });

    console.log(converted.join(''))
}

leetspeak('leet')

//////////////////////
// Long-long Vowels //
//////////////////////

function longLongVowels(word) {
    let newWord = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i + 1]) {
            for (let j = 0; j < 4; j++) {
                newWord += word[i];
            }
        } else {
            newWord += word[i];
        }
    }

    console.log(newWord)
}

longLongVowels('Good')
//'Goooood'
longLongVowels('Cheese')
//'Cheeeeese'
longLongVowels('Man')
//'Man'

/////////////////////
// Sum the Numbers //
/////////////////////

function sumNumbers(arrNum) {
    console.log(arrNum.reduce((tot, curr) => tot + curr));
}

sumNumbers([1, 4, 8])

////////////////////////
// Just the Positives //
////////////////////////

function positiveNumbers(arrNum) {
    console.log(arrNum.filter(arrNum => arrNum >= 0));
}

positiveNumbers([1, -3, 5, -3, 0])
//[1, 5, 0]
positiveNumbers([1, 2, 3])
//[1, 2, 3]
positiveNumbers([-1, -2, -3])
//[]

/////////////////////
// Matrix Addition //
/////////////////////

function matrixAdd(arrMatrix) {
    const matrix1 = arrMatrix[0];
    const matrix2 = arrMatrix[1];
    let answer = []

    for (let i = 0; i < arrMatrix.length; i++) {
        let temp_added_list = [];
        for (let j = 0; j < matrix1.length; j++) {
            temp_added_list.push(matrix1[i][j] + matrix2[i][j])
        }
        answer.push(temp_added_list)
    }
    console.log(answer)
}

matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]])
//[ [ 6, 5 ], [ 3, 4 ] ]

//////////////////////////
// Matrix Multiplcation //
//////////////////////////

function matrixMultiply(arrMatrix1, arrMatrix2) {
    const matrix1 = arrMatrix1;
    const matrix2 = arrMatrix2;
    let list_answer = [];

    for (let i = 0; i < matrix1.length; i++) {
        let temp = []
        for (let j = 0; j < matrix2.length; j++) {
            let temp_multi = 0
            for (let k = 0; k < 2; k++) {
                temp_multi += matrix1[i][k] * matrix2[k][j];

                console.log(matrix1[i][0])
            }
            temp.push(temp_multi)
        }
        list_answer.push(temp)
    }

    console.log(list_answer)
}

matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
//[ [22,  8], [27, 10] ]
//[ [22,  8], [27, 10] ]

/////////////////////////
// Rock Paper Scissors //
/////////////////////////

function rockPaperScissors(p1, p2) {
    status = ''
    if (p1 == p2) {
        status = 'draw'
    } else if (p1 == 'rock' && p2 == 'scissors') {
        status = 'Player 1'
    } else if (p1 == 'rock' && p2 == 'paper') {
        status = 'Player 2'
    } else if (p1 == 'paper' && p2 == 'rock') {
        status = 'Player 1'
    } else if (p1 == 'paper' && p2 == 'scissors') {
        status = 'Player 2'
    } else if (p1 == 'scissors' && p2 == 'rock') {
        status = 'Player 2'
    } else if (p1 == 'scissors' && p2 == 'paper') {
        status = 'Player 1'
    }
    console.log(status)
}

rockPaperScissors('rock', 'scissors')
//'player 1'
rockPaperScissors('rock', 'paper')
//'player 2'
rockPaperScissors('paper', 'paper')
//'draw'

/////////////////
// Tic Tac Toe //
/////////////////

// checks grid
function checkGrid(arrCheck) {
    let countX = 0;
    let countO = 0;
        
    for (let i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i] == 'X') {
            countX++;
        } else if (arrCheck[i] == 'O') {
            countO++;
        }
    }

    if (countX == 3) {
        return 'X';
    } else if (countO == 3) {
        return 'O'
    } else {
        return false;
    }
}

function ticTacToe(grid){
    for(var i = 0; i < 3; i++){
        // gets current row
        const currRow = grid[i];
        // gets the column
        const currColumn = grid.map(x => x[i]);
        
        const checkRow = checkGrid(currRow);
        const checkColumn = checkGrid(currColumn);
        let checkDiag1 = false;
        let checkDiag2 = false;
                
        if(i == 1){
          // hard coded diagonals
          currDiagonalTopLeftToBottomRight = [grid[i-1][0],currRow[1],grid[i+1][2]]
          currDiagonalBottomLeftToTopRight = [grid[i-1][2],currRow[1],grid[i+1][0]]
          checkDiag1 = checkGrid(currDiagonalTopLeftToBottomRight);
          checkDiag2 = checkGrid(currDiagonalBottomLeftToTopRight);
        }
      
        if(checkRow != false){
          return checkRow;
        } else if(checkColumn != false){
          return checkColumn;
        } else if(checkDiag1 != false){
          return checkDiag1;
        } else if(checkDiag2 != false){
          return checkDiag2;
        }
    }
    return null;
}

console.log( ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]) )
//'O'

console.log( ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
  ]) )
//'X'

console.log( ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
  ]) )
//null