shuffle() {


    this.randomX = Math.random() * 150
    this.randomY = Math.random() * 100



    this.x = this.startRevX + this.scalar * cos(this.angleRev);
    this.y = this.startRevY + this.scalar * sin(this.angleRev);
    image(this.cardBackSideImage[0].src, this.x, this.y, 180 / 1.5, 300 / 1.5)





    if (this.shuffleCard === true) {

        this.angleRev++
        image(this.cardBackSideImage[1].src, this.randomX, this.randomY, 180 / 1.5, 300 / 1.5)

        console.log(this.angleRev)


    }

}