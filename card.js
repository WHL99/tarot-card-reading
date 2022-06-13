class Card {
    constructor(cardBackSideImage) {
        this.cardBackSideImage = cardBackSideImage

        this.shuffleCard = false
        this.angleRev = 0
        this.scalar = 150
        this.startRevX = WIDTH / 2
        this.startRevY = HEIGHT / 2
        this.randomX
        this.randomY

    }


    preload() {

       // this.cardBackSideImage = loadImage('./images/card-backside.png')
   

        this.backgroundImage = loadImage('./images/background.jpg')


    }
    draw() {
       // background(this.backgroundImage);
        image(this.cardBackSideImage, this.startRevX , this.startRevY, 90, 150)
       // console.log(this.x)
      //  this.shuffle()
    }


    shuffle() {

        this.startRevX = this.startRevX + this.scalar * cos(this.angleRev);
        this.startRevY = this.startRevY + this.scalar * sin(this.angleRev);

        image(this.cardBackSideImage, this.startRevX, this.startRevY, 90, 150)




        if (this.shuffleCard === true) {


            // for (let i = 0; i < this.cardBackSideImage.length; i++) {

            //     // this.cardBackSideImage[i].x = Math.random() * 150
            //     // this.cardBackSideImage[i].y = Math.random() * 100
            //     image(this.cardBackSideImage[i].src, this.cardBackSideImage[i].x, this.cardBackSideImage[i].y, 180 / 1.5, 300 / 1.5)



            // }

            this.angleRev++

        }

    }
}