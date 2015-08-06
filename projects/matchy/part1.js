// Use this file to implement Part One of your project

var animal={};
animal.species="cat";
console.log(animal.species);

animal["tagline"] = "brown";
console.log(animal.tagline);

animal.noises=null
console.log(animal.noises)

var noiseArray=[]
noiseArray[0]="Rawr"
noiseArray.push("BOO");
noiseArray.unshift("HOO");
noiseArray[noiseArray.length]="Meow";
console.log(noiseArray.length);
console.log(noiseArray.length-1);
console.log(noiseArray);

var noises="noises"
console.log(animal.noises)
animal[noises]=noiseArray;

var animals = []
animals.push(animal)





