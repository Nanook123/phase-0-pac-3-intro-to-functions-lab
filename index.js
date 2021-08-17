function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {

    const love = "I love you, Grandma."

    const lowerCase = string.toLowerCase()

    const upperCase = string.toUpperCase()

    if (string === lowerCase) {

        return "I can\'t hear you!";
    } else if (string === upperCase) {

        return "YES INDEED!";
    } else if (string === love) {
        return "I love you, too."
    }




}