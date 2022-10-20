class Card {
    constructor(cardBackSideImage, arithmeticExPosition) {
        this.cardBackSideImage = cardBackSideImage
        this.arithmeticExPosition = arithmeticExPosition
        this.shuffleCard = false
        this.expansionCard = false
        this.angleRev = ANGLEREV
        this.scalarX = Math.random() * SCALARXCOF
        this.scalarY = Math.random() * SCALARYCOF
        this.startRevX = STARTREVX
        this.startRevY = STARTREVY
        this.randomX = Math.random() * RANDOMXCOF
        this.randomY = Math.random() * RANDOMYCOF
        this.x = CARDLANDINGX
        this.y = CARDLANDINGY
        this.cardWidth = CARDWIDTH
        this.cardHeight = CARDHEIGHT
        this.position = Math.random() * POSITIONCOF
    }

    preload() {
        this.backgroundImage = loadImage('./images/background.jpg')
    }

    draw() {
        image(this.cardBackSideImage, this.x, this.y, this.cardWidth, this.cardHeight)
        this.shuffle()
        if (keyCode === SHUFFLEKEYCODE && shuffleTimes === SHUFFLETIMES) {
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
            this.x = CARDLANDINGX
            this.y = CARDLANDINGY
        }
    }

    expansion() {
        this.x = this.arithmeticExPosition + EXPOSITIONCOF
        this.y = CARDLANDINGY
    }
}
