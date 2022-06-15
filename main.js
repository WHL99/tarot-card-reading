const tarot = new Tarot()

let shuffleTimes = 0
let all22Cards = []


function preload() {

    tarot.preload()

    all22Cards = [
        { src: loadImage('./images/cards/00.png'), title: `The Fool`, text: `This is an exciting time with lots of potential for fun and wonderful experiences. Your confidence should be high, it's a great time for new possibilities. <br></br>If you are considering leaving your job, home or relationship, at some point you will.<br></br>An unexpected desire will be fulfilled, even before you express it!`},
        { src: loadImage('./images/cards/01.png'), title: `The Magician`, text: `This is a period of positive action with great potential. You are full of self-belief, feeling very empowered and will have the ability to think on your feet.<br></br>The Magician is an excellent omen for success: it's time to show everyone exactly what you're made of.` },
        { src: loadImage('./images/cards/02.png'), title: `The High Priestess`, text: `Your intuitive powers are at their height at this moment in time; only by listening carefully and trusting them completely can you embrace that power.<br></br>Do this and you will make strong, clear, self-assured decisions.<br></br>Allow for flexibility and expect promising outcomes.` },
        { src: loadImage('./images/cards/03.png'), title: `The Empress`, text: 'aahellohello' },
        { src: loadImage('./images/cards/04.png'), title: `The Emperor`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/05.jpeg'), title: `The Hierophant`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/06.jpeg'), title: `The Lovers`, text: 'aahellohello' },
        { src: loadImage('./images/cards/07.jpeg'), title: `The Chariot`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/08.jpeg'), title: `Strength`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/09.jpeg'), title: `The Hermit`, text: 'aahellohello' },
        { src: loadImage('./images/cards/10.jpeg'), title: `Wheel of Fortune`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/11.jpeg'), title: `Justice`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/12.jpeg'), title: `The Hanged Man`, text: 'aahellohello' },
        { src: loadImage('./images/cards/13.jpeg'), title: `Death`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/14.jpeg'), title: `Temperance`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/15.jpeg'), title: `The Devil`, text: 'aahellohello' },
        { src: loadImage('./images/cards/16.jpeg'), title: `The Tower`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/17.jpeg'), title: `The Star`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/18.jpeg'), title: `The Moon`, text: 'aahellohello' },
        { src: loadImage('./images/cards/19.jpeg'), title: `The Sun`, text: 'xxhellohello' },
        { src: loadImage('./images/cards/20.jpeg'), title: `Judgement`, text: 'yyhellohello' },
        { src: loadImage('./images/cards/21.jpeg'), title: `The World`,text: 'yyhellohello' },
    ]
}

function setup() {


    let canvas = createCanvas(WIDTH, HEIGHT)
    canvas.parent('p5-canvas');

    angleMode(DEGREES)
}

function draw() {
    tarot.draw()


}

function keyPressed() {
    if (keyCode === 32 && shuffleTimes < 2) {
        tarot.allTarotCards.forEach(card => {
            card.shuffleCard = !card.shuffleCard
        })
    }
    shuffleTimes++

    // if (keyCode === 32 && shuffleTimes == 2) {
    //     tarot.allTarotCards.forEach(card => {
    //         card.expansionCard = !card.expansionCard
    //     })
    // }
}

function mouseClicked() {
    if (shuffleTimes == 2){
    let i = Math.floor((Math.random() * all22Cards.length))
    tarot.cardPicked = all22Cards[i]
    console.log('main testtest')

    console.log(tarot.allTarotCards)

   for (let allTarotCard of tarot.allTarotCards){

    allTarotCard.x = 100
    allTarotCard.y = 100
      //  image(allTarotCard, 10000,10000, card.width, card.height)
         console.log(allTarotCard.x)   

   }


 }



} 