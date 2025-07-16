function mainLoop() {

    const Ted = { 
        name: "Ted",
        class: "Fighter - Tank",
        level:1,
        health:100,
        damage:20,
        gold:10,
        image:"img/tankkun.jpg",
        deck: ["img/Killer-Whale.png", "img/Heal.jpg", "img/punch.jpg", "img/flurry.jpg", "img/cast.jpg"]
    };

    const Joe = { 
        name: "Joe",
        class: "Fighter - Assassain",
        level:1,
        health:50,
        damage:120,
        gold:10,
        image:"img/assassain.jpg",
        deck: ["img/Heal.jpg", "img/punch.jpg", "img/punch.jpg", "img/flurry.jpg", "img/cast.jpg"]
    };

    const Legion = { 
    name: "Legion",
    class: "Mage - Summoner",
    level:1,
    health:100,
    damage: 30,
    gold:10,
    image:"img/legion.jpg",
    deck: ["img/Heal.jpg", "img/punch.jpg", "img/flurry.jpg", "img/cast.jpg", "img/cast.jpg"]
    };

    const character = {
        attacked() {

        },
        levelUp(){
            this.level += 1;
            this.damage += 20;
            displayCharacter();
            console.log("BRUH!");
        },
        heal(){
            this.health += 20;
            displayCharacter();
        }
    };

    let deck = [];

    let hand = [];

    let discard = [];

    function pickTed() {
        Object.assign(character, Ted);
        deck = shuffle([...character.deck]);
        hand = [];
        discard = [];
        showDeck();
        hideChoices();
        showCard();
        displayCharacter();
        drawHand(); 
    }


    function pickJoe() {
        Object.assign(character, Joe); 
        deck = shuffle([...character.deck]);
        hand = [];
        discard = [];
        console.log("Joe selected");
        showDeck();
        hideChoices();
        showCard();
        displayCharacter();
        drawHand();
    };

    function pickLegion() {
        Object.assign(character, Legion); 
        deck = shuffle([...character.deck]);
        hand = [];
        discard = [];
        console.log("Legion selected");
        showDeck();
        hideChoices();
        showCard();
        displayCharacter();
        drawHand();
    };

    function showDeck(){
        const modal = document.getElementById("deckModal");
        const modalDeck = document.getElementById("modalDeck");
        const closeButton = document.getElementById("closeModalButton");

        modalDeck.innerHTML = "";

        character.deck.forEach(cardSrc =>{
            const tag = document.createElement("img");
            tag.src = cardSrc;
            modalDeck.appendChild(tag);
        });

        modal.showModal();

        closeButton.onclick = () => modal.close();

    }

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
        <div id="enemyStats">
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
            <div class="healthMain">${character.health}</div>
            <img id="characterImageMain" src="${character.image}" alt="${character.name}">
            <div class="name">${character.name}</div>
            <div id="stats">
                <p><strong>Class: ${character.class}</strong></p>
                <p><strong>Level: ${character.level}</strong></p>
                <p><strong>Damage: ${character.damage}</strong></p>
                <p><strong>Gold: ${character.gold}</strong></p> 
            </div>
            <div class="buttons">
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
    };

    function healCharacter(){
        character.heal();
    };

    function hideChoices() {
        const hide = document.getElementById("cardStart");
        hide.style.display = 'none';
    };

    function showCard() {
        const show = document.getElementById("card");
        show.style.display = 'block';
    };

    function drawHand() {
        hand = [];
        const handContainer = document.getElementById("handContainer");
        handContainer.innerHTML = "";

        for (let i = 0; i < 4; i++) {
            if (deck.length === 0 && discard.length > 0) {
                deck = shuffle([...discard]);
                discard = [];
            }

            if (deck.length > 0) {
                const card = deck.pop(); 
                hand.push(card);

                const cardImg = document.createElement("img");
                cardImg.src = card;
                cardImg.alt = "Card";
                cardImg.className = "card-image"; 
                handContainer.appendChild(cardImg);

                
                cardImg.addEventListener('click', () => {
                playCard(card);
                });
            }
        }
    };

    function playCard(card) {
        console.log("Played card:", card);
        
        const index = hand.indexOf(card);
        if (index !== -1) {
            hand.splice(index, 1);
            discard.push(card);
        }

        drawHand();
    }

    function shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }


    function refillHand(){
        deck[Math.floor(Math.random() * deck.length)]
    };

    displayStartingInfo();
};

document.getElementById("startgame").addEventListener('click', mainLoop);
document.getElementById("showDeckButton").addEventListener("click", showDeck);
document.getElementById("drawHand").addEventListener("click", drawHand);
