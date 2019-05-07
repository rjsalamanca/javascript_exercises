///////////////////
// Print Numbers //
///////////////////

function printNumbers(start,end){
    for(let i = start; i <= end; i++){
        console.log(i)
    }
}

printNumbers(1,10);

////////////////////
// Print a Square //
////////////////////

function printSquare(size){
    stars = ''
    
    // Create stars
    for(let i = 0; i < size; i++){
        stars += '*';
    }

    // print lines
    for(let i = 0; i < size; i++){
        console.log(stars);
    }
}

printSquare(5)


printBox(6,4)