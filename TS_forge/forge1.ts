// 1. Typage de base
// TypeScript permet de définir des types pour les variables, fonctions, et autres éléments du code.

let nom: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

function greet(nom:string): string {
    return `Hello, ${nom}!`
}

console.log(greet("Ethan"));  // "Hello, Ethan!"

// 2. Interfaces
// Les interfaces permettent de définir la structure d'un objet.

interface User {
    id: number;
    name: string;
    email?: string; // Propriété optionnelle
}

const user: User = {
    id: 1,
    name: "Alice",
};

function printUser(user: User): void {
    console.log(`User: ${user.name}, Email: ${user.email || "N/A"}`);
}

printUser(user); // "User: Alice, Email: N/A" 

// 3. Classes et POO
// TypeScript supporte les classes et les concepts de la programmation orientée objet (POO).

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Boul", "German Shepherd");
dog.speak(); // "Boul barks."

// 4. Génériques
// Les génériques permettent de créer des composants réutilisables qui fonctionnent avec différents types.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
 
console.log(output1);  // "Hello" 
console.log(output2); // 42 

// 5. Utility Types
// TypeScript fournit des types utilitaires pour manipuler les types existants.

interface User {
    id: number;
    name: string;
    email: string;
}

// Crée un type avec toutes les propriétés optionnelles
type PartialUser = Partial<User>; 

const user: PartialUser = {
    name: "Alice", // email et id sont optionnels 
}

// 6. Union et Intersection Types
// Les union types permettent de combiner plusieurs types, tandis que les intersection types combinent les propriétés de plusieurs types.

// Union Type 
function printId(id:number | string ): void {
    console.log(`ID: ${id}`);
}

printId(101); // "ID: 101" 
printId("ABC123"); // "ID: ABC123" 

// Intersection Type 
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee; 

const employee: EmployeePerson = {
    name: "Alice",
    employeeId: 123,
};

// 7. Type Guards
// Les type guards permettent de vérifier le type d'une variable à l'exécution. 

function printValue(value:string | number): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

printValue("Hello");  // "String value: Hello" 
printValue(42);  // "Number value: 42" 

// 8. Async/Await
// TypeScript supporte les opérations asynchrones avec async/await.

async function fetchData(): Promise<void> {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

// 9. Décorateurs
// Les décorateurs permettent d'ajouter des métadonnées ou de modifier le comportement des classes, méthodes, ou propriétés.
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3); // Logs: "Calling add with args: [2,3]" et "Result: 5"

// 10. Mapped Types
// Les mapped types permettent de créer de nouveaux types en transformant les propriétés d'un type existant.

interface User {
    id: number;
    name: string;
    email: string;
}

// Crée un type où toutes les propriétés sont en lecture seule
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

// user.name = "Bob"; // Erreur : propriété en lecture seule

// 11. Conditional Types
// Les conditional types permettent de créer des types conditionnels.

type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>; // false

// 12. Enums
// Les enums permettent de définir un ensemble de constantes nommées.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

function move(direction: Direction): void {
    console.log('Moving ${direction}');
}

move(Direction.Up); // "Moving UP" 

// 13. Type Assertion
// Les type assertions permettent de dire au compilateur de considérer une valeur comme un type spécifique.

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);  // 16 

// 14. Modules
// TypeScript supporte les modules ES6 pour organiser le code.

// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// main.ts
import { add } from "./math";

console.log(add(2, 3)); // 5 

