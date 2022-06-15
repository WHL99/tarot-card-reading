class Card {
    constructor(cardBackSideImage, arithmeticExPosition) {
       console.log(arithmeticExPosition)
        this.cardBackSideImage = cardBackSideImage
        this.arithmeticExPosition = arithmeticExPosition
        this.shuffleCard = false
        this.expansionCard = false
        this.angleRev = 0
        this.scalar = Math.random() * 180
        this.startRevX = 640      //移動圓心
        this.startRevY = 180     //移動圓心
        this.randomX = Math.random() * 300
        this.randomY = Math.random() * 200
        this.x = 640
        this.y = 180
         
       
        this.position = Math.random() * 1400
       
        this.firstExPosition = 300
        
    }


    preload() {
        this.backgroundImage = loadImage('./images/background.jpg')
    }
    draw() {
  
        image(this.cardBackSideImage, this.x, this.y, 90, 160)
        this.shuffle()

        if (keyCode === 32 && shuffleTimes == 2) {
            this.expansion()
        }
    }

    shuffle() {
        this.x = this.startRevX + this.scalar * cos(this.angleRev);
        this.y = this.startRevY + this.scalar * sin(this.angleRev);
        if (this.shuffleCard === true) {
            this.angleRev++
        } 
        else {
            this.x = 640
            this.y = 180
        }
    }

    expansion() {
        this.x = this.arithmeticExPosition
        this.y = 180  
    }
}
