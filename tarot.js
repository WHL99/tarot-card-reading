class Tarot {
    constructor() {
        this.allTarotCards = []
        this.backgroundImage
        this.cardBackSideImage
        this.x = WIDTH / 2
        this.y = HEIGHT / 2
        this.createCards()


    }

    createCards() {
        for (let i = 0; i < 22; i++) {
            const card = new Card(this.cardBackSideImage)
            this.allTarotCards.push(card)
        }
    }

    preload() {
        this.allTarotCards.forEach((card) => {
            card.cardBackSideImage = loadImage('./images/card-backside.png')
        })

        // this.cardBackSideImage = loadImage('./images/card-backside.png')
        this.backgroundImage = loadImage('./images/background.jpg')
    }


    draw() {
        background(this.backgroundImage)

        this.allTarotCards.forEach(function (oneTarotCard) {
            oneTarotCard.draw()


        })
        

    }



}

