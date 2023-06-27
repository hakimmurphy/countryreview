// window.addEventListener('load', () => closeReviews, false)

const returningUserDisplay = document.querySelector('#returning-user')!
const userNameDisplay = document.querySelector('#user')!

let isLogged: boolean

enum permissions {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY'
}

interface Review {
    name: string;
    country: string;
    review: string;
    rating: number;
}

const reviews: Review[] = [
    {
        name: 'Hakim',
        country: 'USA',
        review: 'Big country that has contributed heavily to modern culture and has dominated the world in the past 80 years. One big draw back is the terrible health insurance system.',
        rating: 8
    },
    {
        name: 'Hakim',
        country: 'Germany',
        review: 'Strong country with a good social system but can be quite boring.',
        rating: 8
    },
    {
        name: 'Hakim',
        country: 'Japan',
        review: 'Polite country with a strong culture that produces quality elecronics and food.',
        rating: 8
    },
    {
        name: 'Hakim',
        country: 'UAE',
        review: 'Beautiful desert country that is very conservative and expensive.',
        rating: 6
    }
]

interface Country {
    image: string;
    country: string;
    capitalCity: string;
    population: string;
    culture: {
        music: string;
        food: string;
        people: string;
    }
}

const countries: Country[] = [
    {
        image: 'images/usa.jpg',
        country: 'USA',
        capitalCity: 'Washington DC',
        population: '331.9 million',
        culture: {
            music: 'Rap, Hip Hop, House, Techno, and Rock',
            food: 'Bbq',
            people: 'Generally nice but the system raise savages.'
        }
    },
    {
        image: 'images/germany.jpg',
        country: 'Germany',
        capitalCity: 'Berlin',
        population: '3.645 million',
        culture: {
            music: 'Schlager, Classical, Techno, Punk',
            food: 'Sausages, Potatoes',
            people: 'Generally cold unless you know them from childhood.'
        }
    },
    {
        image: 'images/japan.jpg',
        country: 'Japan',
        capitalCity: 'Tokyo',
        population: '13.96 million',
        culture: {
            music: 'Folk, House, Jazz',
            food: 'Sushi, Shabu-shabu',
            people: 'Very polite and sometimes strange.'
        }
    },
    {
        image: 'images/france.jpg',
        country: 'France',
        capitalCity: 'Paris',
        population: '68 million',
        culture: {
            music: 'House, Techno, Jazz, Classical',
            food: 'Duck, Croissant',
            people: 'Quite fashionable and can be rude.'
        }
    }
]

const reviewTotalDisplay = document.querySelector('#reviews')!

function showTotalReviews(value: number, user: string): void {
    reviewTotalDisplay.innerHTML = `${value.toString()} review${makeS(value)} | last reviewed by ${user}`
}

function makeS(value: number): string {
    if (value > 1 || value === 0) {
        return 's'
    }
    return ''
}

showTotalReviews(reviews.length, reviews[0].name)

const container = document.querySelector('.container')!
const btn = document.getElementById('btn')!
const reviewCard = document.getElementById('review-card')!
const btn2 = document.getElementById('btn2')!
const btn3 = document.getElementById('btn3')!


let count = 0
function showReviews(reviewList: Review[]) {
    if (!count) {
        count++
    }
    for (let i = 0; i < reviewList.length; i++) {
        const card = document.createElement('div')
        card.classList.add('reviewCards')
        card.innerText = `${reviewList[i].name} | ${reviewList[i].country} | ${reviewList[i].review} | ${reviewList[i].rating}`
        reviewCard.append(card)
    }
    btn.style.display = 'none'
    btn2.style.display = 'block'
}


function closeReviews() {
    btn2.style.display = 'none'
    reviewCard.style.display = 'none'
    btn3.style.display = 'block'
}


function showReviews2() {
    btn3.style.display = 'none'
    btn2.style.display = 'block'
    btn.style.display = 'none'
    reviewCard.style.display = 'block'
}


btn.addEventListener('click', () => showReviews(reviews))
btn2.addEventListener('click', () => closeReviews())
btn3.addEventListener('click', () => showReviews2())


class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public isReturning: boolean,
        public age: number,
        public stayedAt: string[]
    ) { }
}

const hakim = new User('Hakim', 'Murphy', true, 45, ['USA', 'Canada', 'Japan', 'England', 'Switzerland', 'Romania', 'Denmark', 'Germany', 'France', 'Sweden', 'Portugal', 'UAE', 'Turkey', 'Russia', 'Greece', 'Ireland', 'Wales', 'the Netherlands', 'Belgium', 'Italy', 'Israel'])


function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(hakim.isReturning, hakim.firstName)

const mainImageContainer = document.querySelector('.main-image')!
const image = document.createElement('img')
image.setAttribute('src', 'images/worldmap.jpg')
mainImageContainer.append(image)

const country = document.querySelector('.countries')!

function showCountries(countries: Country[]) {
    for (let i = 0; i < countries.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = countries[i].country
        const image = document.createElement('img')
        image.classList.add('countryImage')
        image.setAttribute('src', countries[i].image)
        card.appendChild(image)
        country.append(card)
    }
}

showCountries(countries)