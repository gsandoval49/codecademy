//to show what output works and one that doesn’t. 
//for a scope block aka local variable

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};


logVisibleLightWaves(); // OUTPUTS Moonlight
console.log(lightWaves); // ReferenceError: lightWaves is not defined
