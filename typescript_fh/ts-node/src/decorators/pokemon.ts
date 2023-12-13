function printToConsole(constructor: Function) {
    console.log(constructor);
}


// Factory decorator : It should return another function
const printToConsoleConditional = (print: boolean = false): Function => {
    return (print) ? printToConsole : () => { }

}

// Decorator example
const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


// Method Decorator
function validatePokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originialMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                console.error("Invalid Pokemon Id.")
            }
            else {
                return originialMethod(id);
            }
        }

    }
}


// Property Decorator
function readOnly(isReadOnly: boolean = true): Function {
    
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                // console.log(this);
                return "Roberto"
            },
            set(this, value) {
                // console.log(this, value);
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isReadOnly,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}


@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {

    @readOnly()
    public publicApi: string = `https://pokeapi.co`;

    constructor(public name: string) { }

    @validatePokemonId()
    savePokemonToDb(pokemonId: number): void {
        console.log(` Pokemon with id ${pokemonId} was saved into the db`);
    }
}