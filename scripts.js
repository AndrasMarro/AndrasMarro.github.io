
const numberCards = 16  //anzahl Karten
let openedCards = []    //speichert welche Karten offen sind
const element = document.getElementById("score");
var scoreUpdate = 0;
let cardTypes=[]
for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}

function flipp(event){
        openCard(this)
}
function openCard(c){
  if(openedCards.length<2){
    c.classList.toggle('flipped')
    openedCards.push(c)
    if(openedCards.length == 2){
        if(openedCards[0].type == openedCards[1].type){
            window.setTimeout(
                ()=>{
                    openedCards.pop().classList.toggle('found')
                    openedCards.pop().classList.toggle('found')
                        scoreUpdate ++;
                        element.innerHTML = `Score: ${scoreUpdate}`;
                    },
                    300
                )
            }
            if(openedCards[0].type != openedCards[1].type){
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipped')
                        openedCards.pop().classList.toggle('flipped')
                    },
                    1000
                )
            }
        }
   }
}

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}