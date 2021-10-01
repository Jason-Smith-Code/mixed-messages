

const generateWeapon = () => {
    // list word arrays for prefix, weapon and suffix
    const prefix = [
        "Enchanted",
        "Blazing",
        "Firey",
        "Iron",
        "Wooden",
        "Giant",
        "Frozen",
        "Glowing",
        "Golden"
    ]

    const weaponType = [
        "Sword",
        "Axe",
        "Spear",
        "Staff",
        "Spoon",
        "Gauntlet"
    ]

    const suffix = [
        "of Doom",
        "of the Stars",
        "of Bloodlust",
        "of Calamity",
        "of Healing",
        "of Vitality",
        "of Might",
        "of Haste",
    ]
    // Calculate a random int from size of each array
    let randNumPrefix = Math.floor(Math.random() * prefix.length);
    let randNumWeapon = Math.floor(Math.random() * weaponType.length);
    let randNumSuffix = Math.floor(Math.random() * suffix.length);

    // create a variable to store a random element from each array
    let randPrefix = prefix[randNumPrefix];
    let randWeapon = weaponType[randNumWeapon];
    let randSuffix = suffix[randNumSuffix];

    // create event trigger for button
    document.getElementsByTagName("button").onclick = generateWeapon;
    // Change the elements displayed
    document.getElementById("result").innerHTML = randPrefix + " " + randWeapon + " " + randSuffix;
}


