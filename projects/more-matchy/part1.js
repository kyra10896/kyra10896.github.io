//Use this file to implement Part One of your project

var animal = { 
       "species": "dog", 
       "tagline": "Doggie style is my thang", 
       "noises": ["woof", "bark", "whine", "growl"], 
       "relationships": {
           "friends": ["horse", "cat"],
           "matches": ["bird", "rabbit"]
           
       }
};

// objKeyPrinter loops through the properties of any object and returns a string of all the keys.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// // example output: "species tagline noises"


function objKeyPrinter (Obj) {

    var putTogether = [];
    for (var pro in Obj) {
        putTogether.push(pro);
        console.log(pro);
    }
    return putTogether.join(" ");
}


// objValuePrinter loops through all the properties in a given object and returns a string of all the values that are strings.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "duck Afflac"


function objValuePrinter (Obj) {

    var putTogether = [];
    for (var pro in Obj) {
        putTogether.push(Obj);
       // console.log (Obj[pro]);
    }
    return putTogether.join(" ");
    
function objKeyPrinter (Obj) {

for (var pro in Obj) {
console.log("k." + pro + "=" );

}

// nonFriends is a function that shows which animals in your collection are not in your friendlist. You don't want current friends to show up while you are browsing for new friends.
// You can choose to present this data in a way that makes the most sense to you and how you want to present this data to your user.

var nonFriends = function (animals, animal) {
    var nonFriendsArr = [];
    var friends = animal.relationships.friends;
    var i, currentAnimal;
    for (i=0; i<animals.length; i++){
        currentAnimal = animals[i].species;
        if (friends.indexOf(currentAnimal) === -1){
            nonFriendsArr.push(currentAnimal);
        }
    }
    return nonFriendsArr;
    
        }
    }
}




    
    
    
}