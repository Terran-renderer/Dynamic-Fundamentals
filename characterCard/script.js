function mainLoop() {

    const Ted = { 
        name: "Ted",
        class: "Fighter - Tank",
        level:1,
        health:100,
        damage:20,
        gold:10,
        image:"img/tankkun.jpg",
    };

    const Joe = { 
        name: "Joe",
        class: "Fighter - Assassain",
        level:1,
        health:50,
        damage:120,
        gold:10,
        image:"img/assassain.jpg"
    };

    const Legion = { 
    name: "Legion",
    class: "Mage - Summoner",
    level:1,
    health:100,
    damage: 30,
    gold:10,
    image:"img/legion.jpg"
    };

    const character = {
        attacked() {

        },
        levelUp(){
            this.level += 1;
            this.damage += 20;
            displayCharacter();
        },
        heal(){
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
    };

    function pickJoe() {
        Object.assign(character, Joe); 
        console.log("Joe selected");
        hideChoices();
        showCard();
        displayCharacter();
    };

    function pickLegion() {
        Object.assign(character, Legion); 
        console.log("Legion selected");
        hideChoices();
        showCard();
        displayCharacter();
    };

    function displayStartingInfo(){
        const tedContainer = document.getElementById('tedCard');
            const tedInfo = `
                <div class="health">${Ted.health}</div>
                <img id="characterImage" src="${Ted.image}" alt="Ted">
                <div class="name">${Ted.name}</div>
                <div id="stats">
                    <p><strong>Class: ${Ted.class}</strong> <span id="class"></span></p>
                    <p><strong>Level: ${Ted.level}</strong> <span id="level"></span></p>
                    <p><strong>Damage: ${Ted.damage}</strong> <span id="damage"></span></p> 
                    <p><strong>Gold: ${Ted.gold}</strong> <span id="gold"></span></p> 
                </div>
                <button id="tedButton">Choose Ted!</button>
            `;

        tedContainer.innerHTML = tedInfo;

        const joeContainer = document.getElementById('joeCard');
            const joeInfo = `
                <div class="health">${Joe.health}</div>
                <img id="characterImage" src="${Joe.image}" alt="Ted">
                <div class="name">${Joe.name}</div>
                <div id="stats">
                    <p><strong>Class: ${Joe.class}</strong> <span id="class"></span></p>
                    <p><strong>Level: ${Joe.level}</strong> <span id="level"></span></p>
                    <p><strong>Damage: ${Joe.damage}</strong> <span id="damage"></span></p>
                    <p><strong>Gold: ${Legion.gold}</strong></p> 

                </div>
                <button id="joeButton">Choose Joe!</button>     
            `;

        joeContainer.innerHTML = joeInfo;

        const legionContainer = document.getElementById('legionCard');
            const legionInfo = `
                <div class="health">${Legion.health}</div>
                <img id="characterImage" src="${Legion.image}" alt="Legion">
                <div class="name">${Legion.name}</div>
                <div id="stats">
                    <p><strong>Class: ${Legion.class}</strong> <span id="class"></span></p>
                    <p><strong>Level: ${Legion.level}</strong> <span id="level"></span></p>
                    <p><strong>Damage: ${Legion.damage}</strong> <span id="damage"></span></p>
                    <p><strong>Gold: ${Legion.gold}</strong></p> 

                </div>
                <button id="legionButton">Choose Legion!</button>     
            `;

        legionContainer.innerHTML = legionInfo;

        document.getElementById('tedButton').addEventListener('click', pickTed);
        document.getElementById('joeButton').addEventListener('click', pickJoe);
        document.getElementById('legionButton').addEventListener('click', pickLegion);

    };

    class Enemy {
        constructor(quantity, name, type, level, health, gold, damage, image) {
            this.quantity = quantity;
            this.name = name;
            this.type = type;  
            this.level = level;
            this.health = health;
            this.gold = gold;
            this.damage = damage;
            this.image = image;
        }
    }

    class EnemyFactory {
        constructor() {
            this.data = {
                quantity: [1, 2, 3],
                names: ['Crusher', 'Killer', 'Hunger', 'Nightmare', 'Aura'],
                types: ['Bruiser', 'Tank', 'Mage', 'Summoner', 'Warrior'],
                levels: [1, 2, 3, 4, 5],
                healths: [10, 20, 30, 40, 50],
                golds: [3, 5, 7, 9],
                damages:[10, 20, 30, 50],
                images: ['img/trifecta.jpg', 'img/slug.jpg', 'img/monk.jpg', 'img/mage.jpg', 'img/hunger.jpg', 'img/ghost.jpg', 
                    'img/fighter.jpg', 'img/aura.jpg', 'img/angel.jpg']
            };
        }

        generateEnemy() {
            const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];
            return new Enemy(
                getRandom(this.data.quantity),
                getRandom(this.data.names),
                getRandom(this.data.types),
                getRandom(this.data.levels),
                getRandom(this.data.healths),
                getRandom(this.data.golds),
                getRandom(this.data.damages),
                getRandom(this.data.images)
            );
        }
        
    }

    function showEnemy() {
    if (!enemy) {
        const enemyFactory = new EnemyFactory();
        enemy = enemyFactory.generateEnemy(); 
        console.log("New enemy generated: ", enemy);
    }

    const contain = document.getElementById('enemyCard');
    const enemyInfo = `
        <div class="health">${enemy.health}</div>
        <img id="enemyImage" src="${enemy.image}">
        <div class="name">${enemy.name}</div>
        <div id="stats">
            <p><strong>Class: ${enemy.type}</strong></p>
            <p><strong>Level: ${enemy.level}</strong></p>
            <p><strong>Damage: ${enemy.damage}</strong></p>
            <p><strong>Gold: ${enemy.gold}</strong></p>
        </div>
    `;
    contain.innerHTML = enemyInfo;

    const show = document.getElementById("enemyCard");
    show.style.display = 'block';
    }

    let enemy = null;
    document.getElementById("spawnenemies").addEventListener('click', showEnemy);

    function attackCharacter(){
    if (character.health <= 0 || character.level <= 0) {
        alert(character.name + ' has died');
        return;
    }
        enemy.health -= character.damage;
        character.health -= enemy.damage;

            if (enemy.health <= 0) {
                character.gold += enemy.gold;
                enemy.health = 0; 
                enemy = null;
                displayCharacter();
                showEnemy();
            }else{
                showEnemy();
            };
    };  


    function displayCharacter() {
        const container = document.getElementById('card');
        const characterInfo = `
            <div class="health">${character.health}</div>
            <img id="characterImage" src="${character.image}" alt="${character.name}">
            <div class="name">${character.name}</div>
            <div id="stats">
                <p><strong>Class: ${character.class}</strong></p>
                <p><strong>Level: ${character.level}</strong></p>
                <p><strong>Damage: ${character.damage}</strong></p>
                <p><strong>Gold: ${character.gold}</strong></p> 
            </div>
            <div class="buttons">
                <button id="attacked">Attack</button>
                <button id="heal">Heal</button>
                <button id="levelup">Level Up</button>
            </div>
        `;
        container.innerHTML = characterInfo;

        document.getElementById('attacked').addEventListener('click', attackCharacter);
        document.getElementById('heal').addEventListener('click', healCharacter);
        document.getElementById('levelup').addEventListener('click', levelCharacter);

    };

    function levelCharacter(){
        character.levelUp();
    }

    function healCharacter(){
        character.heal();
    }

    function hideChoices() {
        const hide = document.getElementById("cardStart");
        hide.style.display = 'none';
    }

    function showCard() {
        const show = document.getElementById("card");
        show.style.display = 'block';
    }
    displayStartingInfo();
};

document.getElementById("startgame").addEventListener('click', mainLoop);
