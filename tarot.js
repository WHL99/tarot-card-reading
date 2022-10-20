class Tarot {
    constructor() {
        this.allTarotCards = []
        this.cardBackSideImage
        this.x = X
        this.y = Y
        this.arithmeticExPosition = ARITHEMTICEXPOSITION
        this.createCards()
        this.cardPicked
        this.cardWidth = CARDWIDTH
        this.cardHeight = CARDHEIGHT
        this.openedCardWidth = OPENEDCARDWIDTH
        this.openedCardHeight = OPENEDCARDHEIGHT
    }

    createCards() {
        for (let i = 0; i < NUMBEROFCARDS; i++) {
            const card = new Card(this.cardBackSideImage, this.arithmeticExPosition)
            this.allTarotCards.push(card)
            this.arithmeticExPosition += GAPBETWEENEACHCARD
        }
    }

    preload() {
        this.allTarotCards.forEach((card) => {
            card.cardBackSideImage = loadImage('./images/card-backside.png')
        })
    }

    draw() {
        clear()
        this.allTarotCards.forEach((oneTarotCard) => {
            oneTarotCard.draw()
        })
        if (this.cardPicked !== undefined) {
            image(this.cardPicked.src, this.x - (this.openedCardWidth - this.cardWidth), this.y, this.openedCardWidth, this.openedCardHeight)
            document.querySelector('.containerTarotText').innerHTML = '<h2>' + this.cardPicked.title + '</h2><br><div class="container-text"><h3 class="tarot-text">' + this.cardPicked.text + '</h3></div>'
            mouseClicked = function () { }
        }
    }
}

