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

const printHallOfFame = () => {
    const spiderman = getHero("spider");
    heroes.push(spiderman);

    const heroesContainer = document.querySelector("div");

    heroes.map((x) => {
        const heroElement = document.createElement("div");
        heroElement.classList.add('hero');
        const { name } = x;

        heroElement.innerHTML = `<p>${name} ${x.getCurrentPowerCount()}</p>`;

        heroesContainer.append(heroElement);
    })
}

printHallOfFame();

const button = document.querySelector('.btn');
button.addEventListener("click", () => {
    heroes.forEach(el => { 
        el.train()
        console.log(el)
    })
})