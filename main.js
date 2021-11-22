//initial ratings
const ratings = {
    CDPR: 4.7,
    RockStar: 1.8,
    NaughtyDog: 4.3,
    Amazon: 1.3,
    CipSoft: 2.4
}

//total stars
const starsTotal = 5; 

//run getratings when dom loads
document.addEventListener('DOMContentLoaded', getRatings())

//form elements
const gameSelect = document.querySelector('#game-select')
const ratingControl = document.querySelector('#rating-control')

//init pick
let producer;

//game select change
gameSelect.addEventListener('change', (e) => {producer = e.target.value
    console.log(producer)

    //enable rating control
    ratingControl.disabled = false
    ratingControl.value = ratings[producer]
})

//rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value

    //check for valid
    if (rating > 5){
        alert('Please rate 0 to 5')
        return
    }

    //change rating
    ratings[producer] = rating
    getRatings()
})

//get ratings
function getRatings () {
    for (let rating in ratings){
        //gets ratings values by ratings[rating] and change them to proc
        const starProc = (ratings[rating] / starsTotal) * 100;

        //round to nearest 10 by 84 => round(8.4) => 8 * 10
        const starProcRounded = `${Math.round(starProc / 10) * 10}%`

        //sets width of star-inner to proc
        document.querySelector(`.${rating} .stars-inner`).style.width = starProcRounded;

        //add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];


    }
}
