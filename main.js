const tarot = new Tarot()


var shuffleTimes = 0


function preload() {

    tarot.preload()

    console.log('test')
}


function setup() {
    createCanvas(WIDTH, HEIGHT);

    angleMode(DEGREES)

 


}

function draw() {
    tarot.draw()

}

function keyPressed() {
    if (keyCode === 32 && shuffleTimes <2 ) {
        tarot.allTarotCards.forEach(card => {

        
             card.shuffleCard = !card.shuffleCard
        })
       
    }
    shuffleTimes ++

    

}