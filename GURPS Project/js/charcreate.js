(function () {
    // Defining "global" variables
    var charName = "Name";
    var strength = 10;
    var dexterity = 10;
    var intelligence = 10;
    var health = 10;
    var hpBase = 10;
    var willBase = 10;
    var perBase = 10;
    var fpBase = 10;
    var bSpeedBase = 5.0;
    var bMoveBase = 5;
    var hpMod = 0;
    var willMod = 0;
    var perMod = 0;
    var fpMod = 0;
    var bSpeedMod = 0.0;
    var bMoveMod = 0;
    var hitPoints = 10;
    var will = 10;
    var perception = 10;
    var fatigue = 10;
    var bSpeed = 5.0;
    var bMove = 5;
    var bLift = 20.0;
    var bThrust = "1d-2";
    var bSwing = "1d";
    var charPoints = 0;
    var charPointsTotal = 250;

    // For creating strings of dice with modifiers
    function modDice(dice, modifier) {
        var result = "";
        switch(true) {
            case (modifier == 0):
                result = dice.toString() + "d";
                break;
            case (modifier > 0):
                result = dice.toString() + "d+" + modifier.toString();
                break;
            case (modifier < 0):
                result = dice.toString() + "d" + modifier.toString();
                break;
        }
        return result
    }

    // Setting Basic Thrust
    function bThrustSet() {
        var dice;
        var modifier;
        switch (true) {
            case (strength < 19):
                dice = 1;
                modifier = Math.floor((strength - 13) / 2);
                break;
            case (strength < 35):
                dice = Math.floor((st - 3) / 8);
                if (strength < 27){
                    modifier = Math.floor((strength - 21) / 2);
                } else {
                    modifier = Math.floor((strength - 29) /2)
                }
                break;
            case (strength < 45):
                dice = 4;
                modifier = Math.max(Math.floor((strength - 35 / 2) - 2), 2);
                break;
            case (strength < 50):
                dice = 5;
                modifier = 0;
                break;
            case (strength < 55):
                dice = 5;
                modifier = 2;
                break;
            case (strength < 60):
                dice = 6;
                modifier = 0;
                break;
            case (strength < 65):
                dice = 7;
                modifier = -1;
                break;
            case (strength < 70):
                dice = 7;
                modifier = 1;
                break;
            case (strength < 100):
                dice = Math.floor((strength + 10) / 10);
                if (Math.floor(strength / 5) % 2 == 0) {
                    modifier = 0;
                } else {
                    modifier = 2;
                }
                break;
            default:
                dice = Math.floor(strength / 10 + 1)
                modifier = 0
        }
        return modDice(dice, modifier)
    }

    // Setting Basic Swing
    function bSwingSet() {
        var dice;
        var modifier;
        switch (true) {
            case (strength < 12):
                dice = 1;
                modifier = Math.floor((strength + 1) / 2 ) - 6;
                break;
            case (strength < 13):
                dice = 1;
                modifier = 2;
                break;
            case (strength < 25):
                dice = Math.floor((strength - 5) / 4);
                modifier = (strength - 1) % 4 - 1;
                break;
            case (strength < 39):
                dice = 5;
                modifier = 2;
                break;
            case (strength < 44):
                dice = 6;
                modifier = 0;
                break;
            case (strength < 65):
                dice = 7;
                modifier = -1;
                break;
            case (strength < 70):
                dice = 7;
                modifier = 1;
                break;
            case (strength < 100):
                dice = Math.floor((strength + 10) / 10);
                if (Math.floor(strength / 5) % 2 == 0) {
                    modifier = 0;
                } else {
                    modifier = 2;
                }
                break;
            default:
                dice = Math.floor(strength / 10) + 3;
                modifier = 0;
        }
        return modDice(dice, modifier)

    }

    // Callback function for form
    function recalcStats() {
        hpBase = strength;
        willBase = intelligence;
        perBase = intelligence;
        fpBase = health;
        bSpeedBase = (health + dexterity) / 4;
        bMoveBase = Math.floor((health + dexterity) / 4);
        hitPoints = hpBase + hpMod;
        will = willBase + willMod;
        perception = perBase + perMod;
        fatigue = fpBase + fpMod;
        bSpeed = bSpeedBase + bSpeedMod;
        bMove = bMoveBase + bMoveMod;
        bLift = (strength * strength) / 5;
        bThrust = bThrustSet();
        bSwing = bSwingSet();
    }

})();
