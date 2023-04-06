const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const paladin = {
  healthPoints: 250,
  strength: 500,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


const characterDamage = (character) => Math.ceil(Math.random() * (character.strength - 14) + 14);

const mageTurnSummary = () => {
  if (mage.mana < 15) {
    return {
      damage: "Não possui mana suficiente",
      spentMana: 0,
    };
  }
  return {
    damage: Math.floor(
      Math.random() * (mage.intelligence + 1) + mage.intelligence),
    spentMana: 15,
  };
};


const gameActions = {
  warriorTurn: () => {
    const warriorAttack = characterDamage(warrior);
    dragon.healthPoints -= warriorAttack;
    warrior.damage = warriorAttack;
  },
  mageTurn: () => {
    const mageAttack = mageTurnSummary().damage;
    dragon.healthPoints -= mageAttack;
    mage.damage = mageAttack;
    mage.mana -= mageTurnSummary().spentMana;
  },
  dragonTurn: () => {
    const dragonAttack = characterDamage(dragon);
    dragon.damage = dragonAttack;
    warrior.healthPoints -= dragonAttack;
    mage.healthPoints -= dragonAttack;
  },
  updateBattleMembers: () => {
    return battleMembers;
  },
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.updateBattleMembers());


  
