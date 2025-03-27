### 🔥 **Les Boucles, la Destructuration et les Fonctions en JavaScript/TypeScript**  

---

# **1. Les Boucles**
Les boucles permettent d’exécuter du code plusieurs fois en fonction d’une condition.  

## **1.1. `for` - Boucle classique**
Idéale quand on connaît le nombre d'itérations.

```ts
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### **Cas d'usage : parcourir un tableau**
```ts
let fruits = ["pomme", "banane", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Affiche chaque fruit
}
```

---

## **1.2. `while` - Boucle basée sur une condition**
S'exécute tant qu'une condition est vraie.

```ts
let count = 0;
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}
```

### **Cas d'usage : attendre une condition**
```ts
let password = "";
while (password !== "secret") {
  password = prompt("Entrez le mot de passe :");
}
console.log("Accès autorisé !");
```

---

## **1.3. `do...while` - Exécuter au moins une fois**
Cette boucle garantit au moins une exécution.

```ts
let number;
do {
  number = Math.floor(Math.random() * 10);
  console.log(number);
} while (number !== 5);
```

---

## **1.4. `for...of` - Parcourir un tableau facilement**
```ts
let colors = ["rouge", "vert", "bleu"];
for (let color of colors) {
  console.log(color);
}
```

### **Cas d'usage : manipulation des objets**
```ts
let users = [{ name: "Alice" }, { name: "Bob" }];
for (let user of users) {
  console.log(user.name);
}
```

---

## **1.5. `for...in` - Parcourir les clés d'un objet**
```ts
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

---

# **2. La Destructuration**
Elle permet d'extraire des valeurs d’un objet ou tableau facilement.

## **2.1. Destructuration d’un tableau**
```ts
let [a, b, c] = [10, 20, 30];
console.log(a, b, c); // 10, 20, 30
```

### **Cas d'usage : Ignorer des valeurs**
```ts
let [first, , third] = ["pomme", "banane", "orange"];
console.log(first, third); // "pomme orange"
```

### **Échanger des variables**
```ts
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10, 5
```

---

## **2.2. Destructuration d’un objet**
```ts
let user = { name: "Alice", age: 25 };
let { name, age } = user;
console.log(name, age); // "Alice", 25
```

### **Renommer les variables**
```ts
let { name: username, age: userAge } = user;
console.log(username, userAge);
```

### **Valeurs par défaut**
```ts
let { city = "Paris" } = user;
console.log(city); // "Paris"
```

---

# **3. Les Fonctions**
Les fonctions permettent d’organiser et réutiliser du code.

## **3.1. Fonction classique**
```ts
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(5, 3)); // 8
```

### **Cas d'usage : Vérification de données**
```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
console.log(isAdult(20)); // true
```

---

## **3.2. Fonction fléchée (`arrow function`)**
Syntaxe plus courte et utile pour les callbacks.

```ts
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 2)); // 8
```

### **Cas d'usage : Fonction anonyme dans `map()`**
```ts
let numbers = [1, 2, 3];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
```

---

## **3.3. Fonction avec valeurs par défaut**
```ts
function greet(name: string = "Invité") {
  console.log(`Bonjour, ${name} !`);
}
greet(); // "Bonjour, Invité !"
greet("Alice"); // "Bonjour, Alice !"
```

---

## **3.4. Fonction avec paramètres rest (`...rest`)**
Regrouper plusieurs arguments en un tableau.

```ts
function sum(...numbers: number[]) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## **3.5. Fonction retournant une autre fonction (closure)**
```ts
function createMultiplier(factor: number) {
  return (num: number) => num * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

---

## **3.6. Fonction asynchrone avec `async/await`**
```ts
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}
fetchData();
```

---

### 🚀 **Résumé**
| **Concept** | **Exemple** | **Usages** |
|------------|------------|------------|
| `for` | `for (let i = 0; i < 5; i++)` | Parcourir un tableau avec index |
| `while` | `while (condition) {}` | Répéter jusqu’à une condition |
| `for...of` | `for (let item of array) {}` | Parcourir un tableau d’objets |
| `for...in` | `for (let key in obj) {}` | Parcourir les clés d'un objet |
| **Destructuration** | `let {x, y} = obj` | Extraire des valeurs facilement |
| **Fonctions** | `function nom() {}` | Organiser du code réutilisable |
| **Arrow function** | `const f = () => {}` | Simplifier les fonctions courtes |
| **Async/Await** | `async function fetch() {}` | Gérer les opérations asynchrones |
