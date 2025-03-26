### Les Génériques en TypeScript

Les **génériques** en TypeScript permettent de créer des composants réutilisables tout en conservant une forte typage. 
Ils offrent une flexibilité en permettant aux types d'être définis dynamiquement lors de l'utilisation d'une fonction, d'une classe ou d'une interface.

---

## 🔹 **Pourquoi utiliser les génériques ?**
Les génériques permettent :
- De réutiliser du code sans perdre le typage statique.
- D'éviter le `any`, qui supprime la sécurité du typage.
- D'améliorer la maintenabilité et la lisibilité du code.

---

## 1️⃣ **Génériques avec les Fonctions**
On peut utiliser des génériques pour indiquer que le type d’entrée d’une fonction sera le même que celui de sortie.

### ✅ **Exemple simple : Fonction générique**
```typescript
function identity<T>(arg: T): T {
    return arg;
}

// Utilisation
let result1 = identity<string>("Hello");
let result2 = identity<number>(42);
console.log(result1, result2); // Hello 42
```
Ici, `T` est un **paramètre de type** qui est remplacé dynamiquement lors de l’appel de la fonction.

---

## 2️⃣ **Génériques avec les Interfaces**
Les interfaces peuvent également être génériques pour être flexibles et typées dynamiquement.

### ✅ **Exemple : Interface avec un Type Générique**
```typescript
interface Box<T> {
    value: T;
}

let stringBox: Box<string> = { value: "Bonjour" };
let numberBox: Box<number> = { value: 100 };

console.log(stringBox.value, numberBox.value); // Bonjour 100
```
Ici, `Box<T>` est une interface générique qui peut être instanciée avec **n'importe quel type**.

---

## 3️⃣ **Génériques avec les Classes**
Une classe peut aussi être générique pour stocker des données de différents types.

### ✅ **Exemple : Classe Générique**
```typescript
class DataStore<T> {
    private data: T;

    setData(value: T): void {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }
}

// Utilisation
let stringStore = new DataStore<string>();
stringStore.setData("TypeScript");
console.log(stringStore.getData()); // TypeScript

let numberStore = new DataStore<number>();
numberStore.setData(123);
console.log(numberStore.getData()); // 123
```
Chaque instance de `DataStore<T>` fonctionne avec un type spécifique.

---

## 4️⃣ **Contraintes sur les Génériques**
On peut restreindre un type générique en imposant une contrainte avec `extends`.

### ✅ **Exemple : Contraindre un générique à un type spécifique**
```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

// Utilisation
logLength("Hello"); // OK (string a une longueur)
logLength([1, 2, 3]); // OK (les tableaux ont une longueur)
// logLength(42); ❌ Erreur (number n'a pas de length)
```
Ici, `T extends Lengthwise` impose que `T` ait une propriété `length`.

---

## 5️⃣ **Génériques avec les Types Utilitaires**
TypeScript propose des types utilitaires qui exploitent les génériques.

### ✅ **Exemple : `Partial<T>` pour rendre les propriétés optionnelles**
```typescript
interface User {
    id: number;
    name: string;
}

let partialUser: Partial<User> = { name: "Alice" };
```
`Partial<User>` transforme `User` en une version où toutes les propriétés sont optionnelles.

---

### 🎯 **Résumé**
| Concept | Description |
|---------|-------------|
| **Fonctions Génériques** | Permettent des fonctions flexibles tout en conservant le typage. |
| **Interfaces Génériques** | Rendent les structures de données adaptables. |
| **Classes Génériques** | Permettent de créer des structures orientées objet réutilisables. |
| **Contraintes (`extends`)** | Limitent les types génériques à certaines interfaces ou classes. |
| **Types Utilitaires** | `Partial<T>`, `Readonly<T>`, etc., exploitent les génériques pour transformer des types. |

Les génériques en TypeScript permettent donc d’écrire du code plus flexible, réutilisable et sécurisé. 🚀
