# Résumé de la Documentation TypeScript (Handbook TS) 

Un résumé des concepts clés de TypeScript selon sa documentation officielle, avec des explications et exemples concrets:

## Types de base

TypeScript étend JavaScript en ajoutant des types statiques.

```
// Types primitifs
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10]; // Tuple
``` 

## Interfaces

Les interfaces définissent des contrats pour les objets.

``` 
interface User {
  id: number;
  name: string;
  email?: string; // Propriété optionnelle
  readonly createdAt: Date; // Propriété en lecture seule
}

function createUser(user: User): User {
  return user;
}

createUser({ id: 1, name: "Alice", createdAt: new Date() });
``` 

## Classes

TypeScript supporte les classes avec des modificateurs d'accès.

``` 
class Person {
  private age: number;
  protected name: string;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  public greet(): string {
    return `Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`;
  }
}

class Employee extends Person {
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
  }
  
  getSalary(): number {
    return this.salary;
  }
}
``` 

## Fonctions

TypeScript permet de typer les paramètres et retours de fonctions.

``` 
function add(x: number, y: number): number {
  return x + y;
}

// Paramètres optionnels
function buildName(firstName: string, lastName?: string): string {
  return lastName ? firstName + " " + lastName : firstName;
}

// Paramètres par défaut
function greet(name: string = "Anonyme"): string {
  return `Bonjour, ${name}!`;
}

// Fonctions génériques
function identity<T>(arg: T): T {
  return arg;
}
``` 

## Types génériques

Les génériques permettent de créer des composants réutilisables.

```
// Fonction générique
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Interface générique
interface Repository<T> {
  getById(id: number): T;
  getAll(): T[];
  create(item: T): void;
}

// Classe générique
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
}
```

## Union et intersection types

TypeScript permet de combiner des types. 

```
// Union type (OU)
type ID = string | number;

function processId(id: ID) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed(0);
  }
}

// Intersection type (ET)
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge;
``` 

## Type assertions

Les assertions de types permettent de spécifier un type plus précis.

``` 
let someValue: any = "Ceci est une chaîne";
let strLength: number = (someValue as string).length;
// Ou avec la syntaxe alternative
let strLength2: number = (<string>someValue).length;
``` 

## Literal types

Les types littéraux permettent de spécifier des valeurs exactes.

``` 
type Direction = "north" | "south" | "east" | "west";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function move(direction: Direction, distance: number) {
  // ...
}

move("north", 10); // OK
// move("haut", 10); // Erreur
```  

## Type guards et narrowing

TypeScript permet d'affiner les types dans des blocs conditionnels.

``` 
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // padding est un nombre ici
    return Array(padding + 1).join(" ") + value;
  }
  // padding est une chaîne ici
  return padding + value;
}
``` 


## Utility types

TypeScript fournit des types utilitaires pour transformer des types existants.

``` 
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial: Rend toutes les propriétés optionnelles
type PartialTodo = Partial<Todo>;

// Readonly: Rend toutes les propriétés en lecture seule
type ReadonlyTodo = Readonly<Todo>;

// Pick: Sélectionne un sous-ensemble de propriétés
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit: Omet certaines propriétés
type TodoWithoutDescription = Omit<Todo, "description">;
``` 

## Décorateurs

Les décorateurs permettent d'ajouter des annotations et de la métaprogrammation.

``` 
function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Appel de ${propertyKey} avec`, args);
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

class Calculator {
  @logger
  add(a: number, b: number): number {
    return a + b;
  }
}
``` 

## Modules et namespaces

TypeScript prend en charge la modularisation du code.

``` 
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

export const PI = 3.14159;

// app.ts
import { add, PI } from "./math";
console.log(add(2, 3));
console.log(PI);
``` 

Ces exemples couvrent les principaux concepts de TypeScript tels que décrits dans sa documentation officielle. 
TypeScript améliore JavaScript en ajoutant un système de typage statique qui permet de détecter les erreurs au moment de la compilation plutôt qu'à l'exécution.