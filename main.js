var effectCounter = 0;

var effects = [
    "circle",
    "rocktheboat",
    "rocktheboatplusgrow",
    "spin",
    "zigzag"
];

var timeFunctions = [
    "linear",
    "ease",
    "ease",
    "linear",
    "ease"
];

var animationDurations = [
    "8s",
    "5s",
    "5s",
    "3s",
    "5s"
];

function iterateEffect(){
    effectCounter += 1;
    element = document.getElementById("cooldiv");
    element.style["animation-name"] = effects[effectCounter % effects.length];
    element.style["animation-duration"] = animationDurations[effectCounter % effects.length];
    element.style["animation-timing-function"] = timeFunctions[effectCounter % effects.length];
}

