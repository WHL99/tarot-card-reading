const tarot = new Tarot()

let shuffleTimes = 0
let all22Cards = []


function preload() {

    tarot.preload()

    all22Cards = [
        { src: loadImage('./images/cards/00.png'), title: `The<br>Fool`, text: `This is an exciting time with lots of potential for fun and wonderful experiences. Your confidence should be high, it's a great time for new possibilities. <br></br>If you are considering leaving your job, home or relationship, at some point you will.<br></br>An unexpected desire will be fulfilled, even before you express it!` },
        { src: loadImage('./images/cards/01.png'), title: `The Magician`, text: `This is a period of positive action with great potential. You are full of self-belief, feeling very empowered and will have the ability to think on your feet.<br></br>The Magician is an excellent omen for success: it's time to show everyone exactly what you're made of.` },
        { src: loadImage('./images/cards/02.png'), title: `The High Priestess`, text: `Your intuitive powers are at their height at this moment in time; only by listening carefully and trusting them completely can you embrace that power.<br></br>Do this and you will make strong, clear, self-assured decisions.<br></br>Allow for flexibility and expect promising outcomes.` },
        { src: loadImage('./images/cards/03.png'), title: `The Empress`, text: `There are conflicts around you, frustrations and possibly a breakup in a relationship.<br></br>Be careful not to overreact and become too protective or dictatorial about your needs, and whatever you do, do not resort to emotional blackmail - it won't do you any favours.<br></br>You may be experiencing infertility problems or an unplanned pregnancy. If so just know that there are people around you who love and care for you and will provide support.` },
        { src: loadImage('./images/cards/04.png'), title: `The Emperor`, text: `Expect success and achievement of your goals: this is a time for fulfilment of your ambitions.<br></br>If you have placed your trust in your father, husband/partner or another man of significance in your life, they will come up trumps for you.<br></br>If you have been the victim of ill-will, don't worry, you will win in the end.` },
        { src: loadImage('./images/cards/05.png'), title: `The Hierophant`, text: `Help is at hand. If you want wise counsel and moral guidance put your trust in someone you have a lot of respect for.<br></br>Don't allow others to influence you too much with what they want you to conform to - be true to yourself.<br></br>When considering your options, go with tried and tested traditional values, rather than the unconventional novel approach. For example, marriage is more likely to be your desire than a living-together situation.` },
        { src: loadImage('./images/cards/06.png'), title: `The<br>Lovers`, text: `Are you suffering in silence in an unhappy relationship or feeling very lonely?<br></br>Do you have the courage to make the decision you really know you should make? You have a great sense of duty, but are you happy?<br></br>A difficult decision has to be made - have courage and you will achieve emotional happiness.` },
        { src: loadImage('./images/cards/07.png'), title: `The Chariot`, text: `The word failure isn't in your vocabulary. You are worried things are more of a struggle than you expected, with more delays and frustrations.<br></br>Things aren't going according to plan at all - just chill out, calm that mind of yours and you'll find the strength to battle on until you succeed. This is a period of movement and change and conflicts ending in victory.` },
        { src: loadImage('./images/cards/08.png'), title: `Justice<br><br>`, text: `The cards suggest that what you most want at this time is for a fair and right outcome whether it concerns relationships or business affairs. You feel that you are in the right and that any decision or agreement to be made should be in your favour.` },
        { src: loadImage('./images/cards/09.png'), title: `The<br>Hermit`, text: `You may be feeling lonely at this time or going through a period of introspection. If you are struggling to find answers to your questions give it time, they will come. This is a time for prudence and patience.<br></br>If you have been unwell this is a time for rest and recuperation.` },
        { src: loadImage('./images/cards/10.png'), title: `Wheel<br>of Fortune`, text: `The Wheel suggests that you're looking for a turning point in your life and positive change, and if that's the case expect it now!<br></br>Life will go up a gear or two and events will accelerate you forward. Destiny is at play here - have you noticed a number of events that seem rather 'coincidental'? This is synchronicity, trust it and go with the flow.` },
        { src: loadImage('./images/cards/11.png'), title: `Force<br><br>`, text: `Your negativity and lack of self-control are your real enemies.<br></br>If you are finding certain addictions in your life are taking a hold, be it smoking or drinking for example, look inward for your heart's true strength and self-belief.<br></br>Change your attitude and be positive and you will reap great rewards.` },
        { src: loadImage('./images/cards/12.png'), title: `The Hangedman`, text: `You feel a little confused and perhaps fearful because you sense or know that there is someone or something you need to give up to be able to move on. This self-sacrifice isn't always clear - you may not even know quite what or whom you should give up.<br></br>This is a time of passage from one phase of your life to another and The Hanged Man can signify a time of spiritual development too. Perhaps you need to try and look at things from a different perspective.` },
        { src: loadImage('./images/cards/13.png'), title: `Death<br><br>`, text: `A time of absolute endings and brand new beginnings, your life is going through a period of great transformation.<br></br>Whilst change may be difficult, or even painful, you will pull through.<br></br>You will be free for a brand new phase in your life.` },
        { src: loadImage('./images/cards/14.png'), title: `Temperance<br><br>`, text: `A period of peace and harmony, life will flow and you will find a way of handling any difficult circumstances with calm confidence.<br></br>This is also a time for patience, so if you are not sure quite what decision to make about any key issue, take your time. You'll know what to do when the time is right.` },
        { src: loadImage('./images/cards/15.png'), title: `The<br>Devil`, text: `You are feeling that the temptation of a certain relationship, pastime or other form of pleasure is too hard to resist - it's almost addictive. Question your motives, these sorts of situations aren't generally good news.<br></br>You may also have rather low self-esteem at this time and feel that there's not much hope for the future. Don't doubt your abilities - try to be more positive. Think carefully, you can still change direction.` },
        { src: loadImage('./images/cards/16.png'), title: `The<br>Tower`, text: `However hard you try to control events they just won't go your way. Unexpected challenges, upheaval and disappointment will bring expectations to an end.<br></br>Subconsciously you may have wanted a solution - you just didn't expect it to happen this way.<br></br>Use this period of change as an opportunity for a new beginning.<br></br>If you have been planning to move home you will be experiencing setbacks.` },
        { src: loadImage('./images/cards/17.png'), title: `The<br>Star`, text: `You are fearful of the future and lacking in self-belief, afraid your hopes will be dashed. Well don't be! This is your wish card and signifies a time of joy and fulfilment.<br></br>Good health, possibly after a time of illness, and good fortune will give you a new zest of life. If considering a new love affair, new job or career, or travel, then go for it. You may also receive a gift or gifts!` },
        { src: loadImage('./images/cards/18.png'), title: `The<br>Moon`, text: `Lies and insecurity are likely to be prominent in your life at the moment - you are afraid of being deceived and feel that you are being misled. Trust your instincts and let them guide you away from those who may seem charming but are only out for their own gains.<br></br>Your turbulent emotions are muddying the waters - step back and try to find clarity of mind, although this may seem difficult. The Moon does help to illuminate the way and don't worry, it will turn out alright in the end.` },
        { src: loadImage('./images/cards/19.png'), title: `The<br>Sun`, text: `The Sun is shining on you - it's your time for success, joy and happiness.<br></br>You will feel confident and full of vitality.<br></br>It's a time to celebrate with friends and loved ones, perhaps enjoy a well-earned holiday, a time of pleasure and good news around children or the conception or birth of a longed-for baby.<br></br>If you are not feeling this way take heart, you will enter this period soon.` },
        { src: loadImage('./images/cards/20.png'), title: `Judgement<br><br>`, text: `The cards suggest that what you most want at this time is a new start - to close this chapter in your life and have a brand new beginning.<br></br>This is not a time for regret but for rejoicing. Rewards for past efforts will follow and you are sure to have many opportunities presented to you. Life will pick up a pace and the choices you make will have far-reaching implications that could change your life dramatically.` },
        { src: loadImage('./images/cards/21.png'), title: `The<br>World`, text: `You're most likely looking for a successful conclusion after all your hard work and the arrival of The World in your reading here suggests that's either happening now or just around the corner.<br></br>This is a time for completion and satisfaction, the final chapter is here and now - you've done your best and won through.` },
    ]
}

function setup() {


    let canvas = createCanvas(WIDTH, HEIGHT)
    canvas.parent('p5-canvas');
    angleMode(DEGREES)

}

function draw() {
    tarot.draw()
}

function keyPressed() {
    if (keyCode === 32 && shuffleTimes < 2) {
        tarot.allTarotCards.forEach(card => {
            card.shuffleCard = !card.shuffleCard
        })
    }

    shuffleTimes++

    if (shuffleTimes == 2) {
        keyPressed = function () { }
    }
}

function mouseClicked() {
    if (shuffleTimes == 2 && mouseX > 415 && mouseY < 409 && mouseX < 1183 && mouseY > 232) {
       
        let i = Math.floor((Math.random() * all22Cards.length))
        tarot.cardPicked = all22Cards[i]

        document.querySelector('.guide').innerHTML = '<h2></h2>'
        document.querySelector('.title').innerHTML = ''
        document.querySelector('.second-line').innerHTML = ''
        document.querySelector('.third-line').innerHTML = ''

        console.log(mouseX, mouseY)
        for (let allTarotCard of tarot.allTarotCards) {

            allTarotCard.arithmeticExPosition = 100000
            allTarotCard.y = 100000
        }
    } 
     

} 