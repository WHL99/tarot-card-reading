shuffle() {

    this.x = this.startRevX + this.scalar * cos(this.angleRev);
    this.y = this.startRevY + this.scalar * sin(this.angleRev);
    this.cardBackSideImage.src.forEach(function () {
        image(this.cardBackSideImage.src, this.x, this.y, 180 / 1.5, 300 / 1.5)
        if (this.shuffleCard === true) {
            this.angleRev++
            console.log(this.angleRev)
        }
    })
}