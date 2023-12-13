// Asignacion Desestructurante 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const hero = { name: "Tony", age: 45, key: "Ironman" };

const returnPerson = ({ name: heroName, age: heroAge, key: heroKey, range = null }) => {
    const result = {
        keyName: heroKey,
        age: heroAge,
        latLng: {
            lat: 1234.3455,
            lng: 3443.333
        }
    }
    return result
}


const { keyName, age, latLng: { lat, lng } } = returnPerson(hero);
console.log(keyName, age);
console.log(lat, lng);
