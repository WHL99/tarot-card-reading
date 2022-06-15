const tarot = new Tarot()

let shuffleTimes = 0
let all22Cards = []


function preload() {

    tarot.preload()

    all22Cards = [
        { src: loadImage('./images/cards/01.jpeg'), text: 'aahellohello' },
        { src: loadImage('./images/cards/02.jpeg'), text: 'xxhellohello' },
        { src: loadImage('./images/cards/03.jpeg'), text: 'yyhellohello' },
    ]
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
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
    let i = Math.round(Math.random() * 22)
    tarot.cardPicked = all22Cards[i]
    console.log('main testtest')

} 