const tarot = new Tarot()


var shuffleTimes = 0
var all22Cards = []


function preload() {

    tarot.preload()

    this.all22Cards = [
        {src: loadImage('./images/cards/01.jpeg'), text:'aahellohello'},
        {src: loadImage('./images/cards/02.jpeg'), text:'xxhellohello'},
        {src: loadImage('./images/cards/03.jpeg'), text:'yyhellohello'},
    ]
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    angleMode(DEGREES)
}

function draw() {
    tarot.draw()
    mouseClicked()

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

    i = Math.round(Math.random() * 22)
    image(this.all22Cards[i].src, 617.5, 440, 135, 240)

    //   document.querySelector('body').innerHTML = '<h2>hello</h2>'
    // this.all22Cards[i].text
    console.log(i)

} 