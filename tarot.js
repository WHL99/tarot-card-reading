class Tarot {
    constructor() {
        this.allTarotCards = []
        this.backgroundImage
        this.cardBackSideImage
        this.x = 640
        this.y = 270
        this.arithmeticExPosition = 300
        this.createCards()
        this.cardPicked
        
    }

    createCards() {
        for (let i = 0; i < 22; i++) {
            const card = new Card(this.cardBackSideImage, this.arithmeticExPosition)
            this.allTarotCards.push(card)
            this.arithmeticExPosition += 33
        }
    }

    preload() {
        this.allTarotCards.forEach((card) => {
            card.cardBackSideImage = loadImage('./images/card-backside.png')
        })
        this.backgroundImage = loadImage('./images/background.jpg')
    }

    draw() {
        background(this.backgroundImage)
        this.allTarotCards.forEach(function (oneTarotCard) {
            oneTarotCard.draw()
        })

        if (this.cardPicked !== undefined ){
            image(this.cardPicked.src, this.x, this.y, 90, 160)
            console.log('testtest')
       
        }
    }
}
