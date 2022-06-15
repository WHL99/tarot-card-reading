class Tarot {
    constructor() {
        this.allTarotCards = []
     //   this.backgroundImage
        this.cardBackSideImage
        this.x = 640
        //this.y = 270
        this.y = 180
        this.arithmeticExPosition = 310
        this.createCards()
        this.cardPicked
        this.width = 87
        this.height = 172
        this.openedCardWidth = 87*0.5
        this.openedCardHeight = 172*0.5
        
    }

    createCards() {
        for (let i = 0; i < 22; i++) {
            const card = new Card(this.cardBackSideImage, this.arithmeticExPosition)
            this.allTarotCards.push(card)
            this.arithmeticExPosition += 32
        }
    }

    preload() {
        this.allTarotCards.forEach((card) => {
            card.cardBackSideImage = loadImage('./images/card-backside.png')
        })
      //  this.backgroundImage = loadImage('./images/background.jpg')
    }

    draw() {
        clear()
      
     //   background(this.backgroundImage)
        this.allTarotCards.forEach(function (oneTarotCard) {
            oneTarotCard.draw()
        })

        if (this.cardPicked !== undefined ){       
            image(this.cardPicked.src, this.x - (this.openedCardWidth - this.width)/2 , this.y, this.openedCardWidth, this.openedCardHeight)
            
             
            document.querySelector('.containerTarotText').innerHTML = '<h2>' + this.cardPicked.title  + '</h2><br><h3>' + this.cardPicked.text + '</h3>'




           // document.querySelector('.containerTarotText').innerHTML = ''
         //   image(this.allTarotCards, 10000, 10000, this.width, this.height)
        }
    }
}
