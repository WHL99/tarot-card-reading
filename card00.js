class Card {
    constructor(cardBackSideImage) {
        this.cardBackSideImage = cardBackSideImage

        this.shuffleCard = false
        this.angleRev = 0
        this.scalar = 100
        this.startRevX = WIDTH / 2      //移動圓心
        this.startRevY = HEIGHT / 2     //移動圓心
        this.randomX = Math.random() * 200
        this.randomY = Math.random() * 200
        this.x = WIDTH / 2
        this.y = HEIGHT / 2

    }


    preload() {

        // this.cardBackSideImage = loadImage('./images/card-backside.png')


        this.backgroundImage = loadImage('./images/background.jpg')


    }
    draw() {
        // background(this.backgroundImage);
        image(this.cardBackSideImage, this.x, this.y, 90, 160)
        // console.log(this.x)
        this.shuffle()
    }


    shuffle() {

        this.x = this.startRevX + this.scalar * cos(this.angleRev);
        this.y = this.startRevY + this.scalar * sin(this.angleRev);

        image(this.cardBackSideImage, this.x, this.y, 90, 160)




        if (this.shuffleCard === true) {


            for (let i = 0; i < tarot.allTarotCards.length; i++) {

               image(tarot.allTarotCards[i], this.x, this.y, 90, 160)

            }

            this.angleRev++

        }

    }
}