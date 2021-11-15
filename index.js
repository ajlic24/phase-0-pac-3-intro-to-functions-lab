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
    if (string === `I love you, Grandma.`) {
        //console.log(`it works!`)
        return `I love you, too.`
    } else if (string === string.toUpperCase()) {
        //console.log(`it works 2!`)
        return `YES INDEED!`
    } else if (string === string.toLowerCase()) {
        //console.log(`it works 3!`)
        return `I can't hear you!`
    }
    
}
//console.log(sayHiToGrandma (`HITHERE`));