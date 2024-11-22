# Les Bases de TypeScript ✨

TypeScript est un sur-ensemble de JavaScript qui ajoute un typage statique, facilitant la détection des erreurs. Voici une introduction aux bases avec des exemples pratiques et clairs.

---

## 🔄 **Installation de TypeScript**

```bash
npm install -g typescript
```

Vérifiez la version :

```bash
tsc --version
```

---

## 🔢 **Types de Base**

TypeScript permet de déclarer explicitement les types des variables.

### Exemple :

```typescript
let username: string = "John"; // Chaîne de caractères
let age: number = 30;         // Nombre
let isActive: boolean = true; // Booléen

// Tableau
let scores: number[] = [90, 80, 70];

// Tuple
let user: [string, number] = ["John", 30];

// Enum
enum Direction {
  North,
  South,
  East,
  West,
}
let currentDirection: Direction = Direction.North;

console.log(username, age, isActive, scores, currentDirection);
```

### Explication :

- `username: string` signifie que `username` doit être une chaîne de caractères.
- `scores: number[]` indique un tableau de nombres.
- `user: [string, number]` est un tuple contenant une chaîne suivie d'un nombre.
- `enum` crée une collection de constantes.

---

## 🔧 **Fonctions**

Les fonctions en TypeScript peuvent inclure des types pour les paramètres et le type de retour.

### Exemple :

```typescript
function greet(name: string): string {
  return `Bonjour, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(greet("Alice")); // Bonjour, Alice!
console.log(add(5, 10));     // 15
```

### Explication :

- `name: string` impose que `name` doit être une chaîne.
- `: string` après la parenthèse indique que la fonction retourne une chaîne.

---

## 📄 **Interface**

Les interfaces permettent de définir la structure d’un objet.

### Exemple :

```typescript
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Alice",
  age: 25,
  isAdmin: true,
};

console.log(user1);
```

### Explication :

- L’interface `User` définit que l’objet doit avoir `name` (chaîne), `age` (nombre), et `isAdmin` (booléen).

---

## 📚 **Classes**

TypeScript introduit la syntaxe des classes avec le typage.

### Exemple :

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Bonjour, je suis ${this.name}, j'ai ${this.age} ans.`;
  }
}

const person1 = new Person("Bob", 40);
console.log(person1.greet());
```

### Explication :

- `constructor` initialise les propriétés de la classe.
- `greet()` est une méthode qui retourne une chaîne formatée.

---

## 🌐 **Types Union et Optionnels**

TypeScript permet d'utiliser plusieurs types pour une variable ou des paramètres optionnels.

### Exemple :

```typescript
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}

function optionalParameter(name: string, age?: number): string {
  return age ? `${name} a ${age} ans.` : `${name} n'a pas précisé son âge.`;
}

printId(123);        // ID: 123
printId("abc123");   // ID: abc123
console.log(optionalParameter("Alice")); // Alice n'a pas précisé son âge.
```

### Explication :

- `id: number | string` accepte soit un nombre soit une chaîne.
- `age?: number` rend le paramètre `age` optionnel.

---

## 🔄 **Génériques**

Les génériques permettent de créer des fonctions ou des classes réutilisables.

### Exemple :

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123));    // 123
```

### Explication :

- `<T>` est un type générique. `T` sera remplacé par le type fourni lors de l'appel.

---

## 📋 **Compilation**

Pour compiler un fichier `.ts`, utilisez :

```bash
tsc fichier.ts
```

Cela génère un fichier JavaScript équivalent.

---

Profitez de TypeScript pour rendre votre code plus robuste et maintenable ✨ !

