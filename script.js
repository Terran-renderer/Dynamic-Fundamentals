function characterSetUp() {

    const Ted = { 
        name: "Ted",
        class: "Fighter - Bruiser",
        level:1,
        health:80,
        gold:10,
        image:"ted.JPG",
    };

    const Joe = { 
        name: "Joe",
        class: "Fighter - Assassain",
        level:1,
        health:120,
        gold:10,
        image:"joe.JPG"
    }

    const Legion = { 
    name: "Legion",
    class: "Mage - Summoner",
    level:1,
    health:120,
    gold:10,
    image:"legion.JPG"
}

    const character = {
        attacked(){
        if (this.health >=20){
            this.level = 0;
            this.health -= 20;
        }else{
            alert(this.name + ' died');
        }
        displayCharacter();
        },

        levelUp(){
            this.level += 1;
            this.health += 20;
            displayCharacter();
        }
    };

    function pickTed() {
        Object.assign(character, Ted);
        console.log("Ted selected");
        hideChoices();
        showCard();
        displayCharacter();
    }

    function pickJoe() {
        Object.assign(character, Joe); 
        console.log("Joe selected");
        hideChoices();
        showCard();
        displayCharacter();
    }

    function pickLegion() {
    Object.assign(character, Legion); 
    console.log("Legion selected");
    hideChoices();
    showCard();
    displayCharacter();
}

    function displayInfo(){
        const tedContainer = document.getElementById('tedCard');
            const tedInfo = `
                <img id="characterImage" src="${Ted.image}" alt="Ted">
                <div class="name">${Ted.name}</div>
                <p><strong>Class: ${Ted.class}</strong> <span id="class"></span></p>
                <p><strong>Level: ${Ted.level}</strong> <span id="level"></span></p>
                <p><strong>Health: ${Ted.health}</strong> <span id="health"></span></p> 
                <p><strong>Gold: ${Ted.gold}</strong> <span id="gold"></span></p> 
                <button id="tedButton">Choose Ted!</button>
            `;

        tedContainer.innerHTML = tedInfo;

        const joeContainer = document.getElementById('joeCard');
            const joeInfo = `
                <img id="characterImage" src="${Joe.image}" alt="Ted">
                <div class="name">${Joe.name}</div>
                <p><strong>Class: ${Joe.class}</strong> <span id="class"></span></p>
                <p><strong>Level: ${Joe.level}</strong> <span id="level"></span></p>
                <p><strong>Health: ${Joe.health}</strong> <span id="health"></span></p>
                <button id="joeButton">Choose Joe!</button>     
            `;

        joeContainer.innerHTML = joeInfo;

        const legionContainer = document.getElementById('legionCard');
            const legionInfo = `
                <img id="characterImage" src="${Legion.image}" alt="Legion">
                <div class="name">${Legion.name}</div>
                <p><strong>Class: ${Legion.class}</strong> <span id="class"></span></p>
                <p><strong>Level: ${Legion.level}</strong> <span id="level"></span></p>
                <p><strong>Health: ${Legion.health}</strong> <span id="health"></span></p>
                <button id="legionButton">Choose Legion!</button>     
            `;

        legionContainer.innerHTML = legionInfo;

        document.getElementById('tedButton').addEventListener('click', pickTed);
        document.getElementById('joeButton').addEventListener('click', pickJoe);
        document.getElementById('legionButton').addEventListener('click', pickLegion);

    };

    function displayCharacter() {
        const container = document.getElementById('card');
        const characterInfo = `
            <img id="characterImage" src="${character.image}" alt="${character.name}">
            <div class="name">${character.name}</div>
            <p><strong>Class: ${character.class}</strong></p>
            <p><strong>Level: ${character.level}</strong></p>
            <p><strong>Health: ${character.health}</strong></p>
            <p><strong>Gold: ${character.gold}</strong></p> 
            <div class="buttons">
                <button id="attacked">Attack</button>
                <button id="levelup">Level Up</button>
            </div>
        `;
        container.innerHTML = characterInfo;

        document.getElementById('attacked').addEventListener('click', attackCharacter);
        document.getElementById('levelup').addEventListener('click', levelCharacter);
    }

    function attackCharacter(){
        character.attacked();
    }

    function levelCharacter(){
        character.levelUp();
    }

    function hideChoices() {
        const hide = document.getElementById("cardStart");
        hide.style.display = 'none';
    }

    function showCard() {
        const show = document.getElementById("card");
        show.style.display = 'block';
    }

    displayInfo();
};

function enemySetUp() {
    const enemy = {
        quantity:[1,2,3],
        names: ['bob', 'bill', 'bart'],
        classes: ['bruiser', 'tank', 'mage'],
        levels:[1,2,3],
        healths:[10,20,30],
        golds:[1,2,3],
        images:['ted.JPG', 'joe.JPG', 'legion.JPG']
    };

    const updatedEnemy = {};

    function generateEnemy() {
        randomQuantity = enemy.quantity[Math.floor(Math.random() * enemy.quantity.length)];
        randomName = enemy.names[Math.floor(Math.random() * enemy.names.length)];
        randomClasse = enemy.classes[Math.floor(Math.random() * enemy.classes.length)];
        randomLevel = enemy.levels[Math.floor(Math.random() * enemy.levels.length)];
        randomHealth = enemy.healths[Math.floor(Math.random() * enemy.healths.length)];
        randomGold = enemy.golds[Math.floor(Math.random() * enemy.golds.length)];
        randomImage = enemy.images[Math.floor(Math.random() * enemyimages.length)];
        
        Object.assign(updatedEnemy, enemy);
        console.log("Enemy Generated");
    }
    generateEnemy();
};

document.getElementById("startgame").addEventListener('click', characterSetUp);