let countA = 0;
let countZ = 0;
let deadCount = 0;
let mostTitlesCount = 0;
let mostTitlesWinner = '';
let valyrianCount = 0;
let hotPie = '';
let notTv = 0;
let targaryenCount = 0;

let body = document.getElementById('body');
let answerList = document.getElementById('answers');

characters.forEach(function(character){
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

    const createH1 = document.createElement('h2');
    const houseHistogramDiv = document.createElement('div');
    createH1.appendChild(document.createTextNode('House Histogram'));

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
        let br = document.createElement("br");
        houseHistogramDiv.appendChild(document.createTextNode(`${house} : ${histogram[house]}`))
        houseHistogramDiv.appendChild(br);
    }
    body.append(createH1);
    body.append(houseHistogramDiv)
}

function addToList(answer){
    let holdAnswers = document.createElement('li');

    answerNode = document.createTextNode(answer);
    holdAnswers.appendChild(answerNode)
    answerList.append(holdAnswers)
}

addToList(`Characters that start with A: ${countA}`)
addToList(`Characters that start with Z: ${countZ}`)
addToList(`Characters That are Dead: ${deadCount}`)
addToList(`Most Title Count Goes to: ${mostTitlesWinner}`)
addToList(`Valyrian Count: ${valyrianCount}`)
addToList(`Hot Pie is played by: ${hotPie}`)
addToList(`Characters not in the TV show: ${notTv}`)
addToList(`Characters with the last name Targaryen: ${targaryenCount}`)

house_histogram()