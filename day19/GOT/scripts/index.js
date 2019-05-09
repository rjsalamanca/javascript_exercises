console.log(`There are ${characters.length} characters in the array.`);

// * How many characters names start with "A"?
// * How many characters names start with "Z"?
// * How many characters are dead?
// * Who has the most titles?
// * How many are Valyrian?
// * What actor plays "Hot Pie" (and don't use IMDB)?

console.log(houses[`https://www.anapioficeandfire.com/api/houses/1`])

let countA = 0;
let countZ = 0;
let deadCount = 0;
let mostTitlesCount = 0;
let mostTitlesWinner = '';
let valyrianCount = 0;
let hotPie = '';
let notTv = 0;
let targaryenCount = 0;

characters.forEach(function(character){
    // * How many characters names start with "A"?
    if(character.name[0]=='A'){
        countA++; 
    } else if (character.name[0]=='Z'){
        countZ++;
    }

    if (character.died != ''){
        deadCount++;
    }

    if(character.titles.length > mostTitlesCount){
        mostTitlesCount =  character.titles.length;
        mostTitlesWinner = character.name;
    }

    if(character.culture == 'Valyrian'){
        valyrianCount++;
    }

    if(character.name == 'Hot Pie'){
        hotPie = character.playedBy;
    }

    if(character.playedBy[0] == ''){
        notTv++
    }

    if(character.name.match(/Targaryen/g)){
        targaryenCount++
    }

});

function house_histogram(){
    let histogram = {};

    for(var key in houses){
        histogram[houses[key]] = 0 
    }

    characters.forEach(function(char){
        if (char.allegiances.length > 0){
            for(let i = 0; i < char.allegiances.length;i++){
                if(char.allegiances[i] in houses){
                    histogram[houses[char.allegiances[i]]] += 1;
                }
            }
        }
    });

    for(var house in histogram){
        console.log(`${house} : ${histogram[house]}`);
    }
}


console.log(`Characters that start with A: ${countA}`)
console.log(`Characters that start with Z: ${countZ}`)
console.log(`Characters That are Dead: ${deadCount}`)
console.log(`Most Title Count Goes to: ${mostTitlesWinner}`)
console.log(`Valyrian Count: ${valyrianCount}`)
console.log(`Hot Pie is played by: ${hotPie}`)
console.log(`Characters not in the TV show: ${notTv}`)
console.log(`Characters with the last name Targaryen: ${targaryenCount}`)

house_histogram()