const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}

const player = {
    maxHealth: 0,
    name: "Евстафий",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
}
var monsterMoves = Object.values(monster.moves);
var playerMoves = Object.values(player.moves);

//const readlineSync = require('readline-sync');
const message = ('Выберите уровень сложности: \nЛегкий (введите 1) \nСредний (введите 2) \nСложный (введите 3): ');
const message2 = ('Выберите действие: \nУдар боевым кадилом: 1  \nВертушка левой пяткой: 2 \nКаноничный фаербол: 3 \nМагический блок: 4');

//const playerHealth = readlineSync.question(message2); 
const playerHealth = prompt (message);

if (playerHealth == 1) {
 player.maxHealth = 10;
    console.log ('Вы выбрали Легкий уровень сложности');
    console.log ('Ваше Нр равно: '+player.maxHealth);
}
else if (playerHealth == 2) {
    player.maxHealth = 8;
    console.log ('Вы выбрали Средний уровень сложности');
    console.log ('Ваше Нр равно: '+player.maxHealth);
}
else if (playerHealth == 3)  {
    player.maxHealth = 5;
    console.log ('Вы выбрали Сложный уровень сложности');
    console.log ('Ваше Нр равно: '+player.maxHealth);
}
else {
    console.log ('Вы не выбрали уровень сложности');
  
}


var j = randomInteger(0, 2);
function randomInteger(min, max) {
let rand = min + Math.random() * (max + 1 - min);
return Math.floor(rand);


}

//const randomMoves = monsterMoves[Math.floor(Math.random()*Object.keys(name.length))];
//const randomMoves = this[Math.floor(Math.random()*this.length)];
//for (let i = 0; i < monsterMoves.length ; i++) {
//console.log(monsterMoves[i].name);
//}
//console.log(randomMoves);

var monsterAction = function(){
    console.warn ('Монстр делает ход: '+monsterMoves[j].name);
    console.log( 
'\nФизический урон: ' +monsterMoves[j].physicalDmg+
'\nМагический урон: ' +monsterMoves[j].magicDmg+
'\nФизическая броня: ' +monsterMoves[j].physicArmorPercents+
'\nМагическая броня: ' +monsterMoves[j].magicArmorPercents+
'\nХодов на восстановление: ' +monsterMoves[j].cooldown
    );
  
};

setTimeout(monsterAction, 3000);


//console.log ('Монстр принимает прием: '+monsterMoves[j].physicalDmg);
//console.log(monsterMoves);
//console.log(Object.values(monster.moves)[Math.floor(Math.random(0,3)*Object.values(monster.moves))]);
//console.log(monsterMoves[0].name);
//console.log(playerMoves[1].name);


const playerAction = function () {
pA = prompt (message2);
//const pA = readlineSync.question(message2); 
if (pA == 1){
   console.log ('Вы выбрали "Удар боевым кадилом"');
}
else if(pA == 2) {
   console.log ('Вы выбрали "Вертушка левой пяткой"'); 
}
else if (pA == 3) {
   console.log ('Вы выбрали "Каноничный фаербол"'); 
}
else if (pA == 4) {
   console.log ('Вы выбрали "Магический блок"'); 
}
 else {
    console.log ('Ничего не выбрали');
  }
}
setTimeout(playerAction,4000);

const battle = function () {
    if (j == 0 && pA == 1) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[0].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[0].magicArmorPercents/100);
    physArmorM = (playerMoves[0].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[0].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[0].physicalDmg - physArmorM)  + (playerMoves[0].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM

   console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
   console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp); 
    }
    else if (j == 0 && pA == 2) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[1].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[1].magicArmorPercents/100);
    physArmorM = (playerMoves[1].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[1].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[1].physicalDmg - physArmorM)  + (playerMoves[1].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }

    else if (j == 0 && pA == 3) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[2].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[2].magicArmorPercents/100);
    physArmorM = (playerMoves[2].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[2].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[2].physicalDmg - physArmorM)  + (playerMoves[2].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    
    else if (j == 0 && pA == 4) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[3].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[3].magicArmorPercents/100);
    physArmorM = (playerMoves[3].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[3].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[3].physicalDmg - physArmorM)  + (playerMoves[3].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    else if (j == 1 && pA == 1) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[0].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[0].magicArmorPercents/100);
    physArmorM = (playerMoves[0].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[0].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[0].physicalDmg - physArmorM)  + (playerMoves[0].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM

   console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
   console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp); 
    }
    else if (j == 1 && pA == 2) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[1].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[1].magicArmorPercents/100);
    physArmorM = (playerMoves[1].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[1].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[1].physicalDmg - physArmorM)  + (playerMoves[1].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }

    else if (j == 1 && pA == 3) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[2].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[2].magicArmorPercents/100);
    physArmorM = (playerMoves[2].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[2].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[2].physicalDmg - physArmorM)  + (playerMoves[2].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    
    else if (j == 1 && pA == 4) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[3].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[3].magicArmorPercents/100);
    physArmorM = (playerMoves[3].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[3].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[3].physicalDmg - physArmorM)  + (playerMoves[3].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    else if (j == 2 && pA == 1) {

    physArmorP =   (monsterMoves[j].physicalDmg*playerMoves[0].physicArmorPercents/100);
    magicArmorP =   (monsterMoves[j].magicDmg*playerMoves[0].magicArmorPercents/100);
    physArmorM =   (playerMoves[0].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM =   (playerMoves[0].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[0].physicalDmg - physArmorM)  + (playerMoves[0].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM

   console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
   console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp); 
    }
    else if (j == 2 && pA == 2) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[1].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[1].magicArmorPercents/100);
    physArmorM = (playerMoves[1].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[1].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[1].physicalDmg - physArmorM)  + (playerMoves[1].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }

    else if (j == 2 && pA == 3) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[2].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[2].magicArmorPercents/100);
    physArmorM = (playerMoves[2].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[2].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[2].physicalDmg - physArmorM)  + (playerMoves[2].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    
    else if (j == 2 && pA == 4) {

    physArmorP = (monsterMoves[j].physicalDmg*playerMoves[3].physicArmorPercents/100);
    magicArmorP = (monsterMoves[j].magicDmg*playerMoves[3].magicArmorPercents/100);
    physArmorM = (playerMoves[3].physicalDmg*monsterMoves[j].physicArmorPercents/100);
    magicArmorM = (playerMoves[3].magicDmg*monsterMoves[j].magicArmorPercents/100);
    sumDmgP = (monsterMoves[j].physicalDmg - physArmorP)  + (monsterMoves[j].magicDmg - magicArmorP);
    sumDmgM = (playerMoves[3].physicalDmg - physArmorM)  + (playerMoves[3].magicDmg - magicArmorM);
    totalPlayerHp = player.maxHealth - sumDmgP;
    totalMonsterHp = monster.maxHealth - sumDmgM
    
    console.log ('Урон по вам, составил: '  +sumDmgP+ '\nТекущий уровень Hp Евстафия: '   +totalPlayerHp); 
    console.log ('Урон по монстру, составил: '  +sumDmgM+ '\nТекущий уровень Hp Лютого: '   +totalMonsterHp);
    }
    else {
        console.log('');
    }
}


setTimeout(battle ,5000);

function endGame () {
    if (player.maxHealth <= 0 ) {
        console.log ('Вы проиграли');
    }
    else  {
        console.log('Вы выиграли');
   }

}
// не хватает цикла и условий с cooldown