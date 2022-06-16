class Card {
    constructor(cardBackSideImage, arithmeticExPosition) {
        console.log(arithmeticExPosition)
        this.cardBackSideImage = cardBackSideImage
        this.arithmeticExPosition = arithmeticExPosition
        this.shuffleCard = false
        this.expansionCard = false
        this.angleRev = 0
        this.scalarX = Math.random() * 350
        this.scalarY = Math.random() * 180
        this.startRevX = 640
        this.startRevY = 180
        this.randomX = Math.random() * 200
        this.randomY = Math.random() * 200
        this.x = 640
        this.y = 225
        this.width = 87 * 1.1
        this.height = 172 * 1.1
        this.position = Math.random() * 1400
        this.firstExPosition = 300
    }


    preload() {
        this.backgroundImage = loadImage('./images/background.jpg')
    }

    draw() {
        image(this.cardBackSideImage, this.x, this.y, this.width, this.height)
        this.shuffle()
        if (keyCode === 32 && shuffleTimes == 2) {
            this.expansion()
        }
    }

    shuffle() {
        this.x = this.startRevX + this.scalarX * cos(this.angleRev);
        this.y = this.startRevY + this.scalarY * sin(this.angleRev);
        if (this.shuffleCard === true) {

            this.angleRev++
        }
        else {
            this.x = 640
            this.y = 225

        }
    }

    expansion() {

        this.x = this.arithmeticExPosition + 100
        this.y = 225
    }
}
