const tarot = new Tarot()

let shuffleTimes = 0
let all22Cards = []


function preload() {

    tarot.preload()

    all22Cards = [
        { src: loadImage('./images/cards/01.jpeg'), title: 'The Fool', text: `This is an exciting time with lots of potential for fun and wonderful experiences. Your confidence should be high, it's a great time for new possibilities. <br></br>If you are considering leaving your job, home or relationship, at some point you will.<br></br>An unexpected desire will be fulfilled, even before you express it!`},
        { src: loadImage('./images/cards/02.jpeg'), title: 'The Magician', text: 'xxhellohello' },
        { src: loadImage('./images/cards/03.jpeg'), title: 'The High Priestess', text: 'yyhellohello' },
        { src: loadImage('./images/cards/04.jpeg'), title: 'The Empress', text: 'aahellohello' },
        { src: loadImage('./images/cards/05.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/06.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/07.jpeg'), title: '', text: 'aahellohello' },
        { src: loadImage('./images/cards/08.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/09.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/10.jpeg'), title: '', text: 'aahellohello' },
        { src: loadImage('./images/cards/11.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/12.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/13.jpeg'), title: '', text: 'aahellohello' },
        { src: loadImage('./images/cards/14.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/15.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/16.jpeg'), title: '', text: 'aahellohello' },
        { src: loadImage('./images/cards/17.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/18.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/19.jpeg'), title: '', text: 'aahellohello' },
        { src: loadImage('./images/cards/20.jpeg'), title: '', text: 'xxhellohello' },
        { src: loadImage('./images/cards/21.jpeg'), title: '', text: 'yyhellohello' },
        { src: loadImage('./images/cards/22.jpeg'), title: '',text: 'yyhellohello' },
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
    let i = Math.floor((Math.random() * all22Cards.length))
    tarot.cardPicked = all22Cards[i]
   
    console.log('main testtest')

} 