class Hero {
    #powerCount;
    name;

    constructor(name) {
        this.name = name;
        this.#powerCount = 10;
    }

    getCurrentPowerCount() {
        return this.#powerCount;
    }

    train() {
        this.#powerCount = this.#powerCount + 1;
    }

}

let heroCount = 0;

const heroes = [];

const hero = getHero("hulk");
const geralt = getHero("geralt");

heroes.push(hero);
heroes.push(geralt);

function getHero(name) {
    heroCount++;
    return new Hero(name)
}

const createHeroes = (heroes) => {
    const heroesContainer = document.querySelector("div");

    heroes.forEach(el => {
        const heroElement = document.createElement("div");
        heroElement.classList.add('current-hero');
        const { name } = el;
        heroElement.innerHTML = `<p>${name} ${el.getCurrentPowerCount()}</p>`;
    
        heroesContainer.append(heroElement);
    })
}

const printHallOfFame = () => {
    const spiderman = getHero("spider");
    heroes.push(spiderman);

    createHeroes(heroes);
}

printHallOfFame();

const button = document.querySelector('.btn');
button.addEventListener("click", () => {
    // clear previous heroes:
    const allHeroes = [...document.querySelectorAll('.current-hero')];
    allHeroes.forEach(el => el.remove());
    // add new heroes with updated power:
    createHeroes(heroes);
})