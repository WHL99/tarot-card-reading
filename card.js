class Card {
    constructor(cardBackSideImage) {
        this.cardBackSideImage = cardBackSideImage

        this.shuffleCard = false
       
        this.angleRev = 0
        this.scalar = Math.random() * 220
        //100
        this.startRevX = 640      //移動圓心
        this.startRevY = 300     //移動圓心
        this.randomX = Math.random() * 500
        //200
        this.randomY = Math.random() * 500
        //123
        this.x = 640
        this.y = 270

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

    



        if (this.shuffleCard === true ) {

           
            this.angleRev++
           


        }else {
          

            this.x = 640
            this.y = 270
        }

    }
}