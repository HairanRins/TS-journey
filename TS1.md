# Prochaines Étapes avec TypeScript 🚀

Après avoir appris les bases, voici les concepts avancés à explorer pour maîtriser TypeScript et l'utiliser efficacement dans des projets professionnels.

---

## 🧩 **Types Avancés**

### Types Personnalisés avec `type`

TypeScript permet de créer des types personnalisés pour rendre le code plus lisible et structuré.

```typescript
type Point = {
  x: number;
  y: number;
};

const point1: Point = { x: 10, y: 20 };
console.log(point1);
```

### Intersection et Union de Types

- **Union (`|`)** : Définit plusieurs types possibles.
- **Intersection (`&`)** : Combine plusieurs types en un seul.

```typescript
type Shape = { color: string };
type Circle = Shape & { radius: number };

type User = { id: number } | { username: string };

const circle: Circle = { color: "red", radius: 10 };
const user: User = { id: 1 };
console.log(circle, user);
```

---

## 🔗 **Type Inference et Assertion**

### Inférence de Type
TypeScript peut inférer le type d'une variable automatiquement.

```typescript
let name = "Alice"; // TypeScript infère string
let age = 25;        // TypeScript infère number
```

### Assertion de Type
Vous pouvez forcer un type spécifique avec `as`.

```typescript
let value: any = "Hello";
let length: number = (value as string).length;
console.log(length);
```

---

## 🛠️ **Modèles Avancés pour Objets et Fonctions**

### Type Indexé
Accédez dynamiquement aux types des propriétés d'un objet.

```typescript
interface Person {
  name: string;
  age: number;
}

type AgeType = Person["age"]; // number
```

### Fonctions avec Types Génériques

Ajoutez de la flexibilité avec des types génériques dans vos fonctions.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "Alice" }, { age: 30 });
console.log(result);
```

---

## 🏗️ **Utilisation des Modules**

Organisez votre code avec `export` et `import`.

### Exemple :

#### math.ts
```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

#### main.ts
```typescript
import { add } from "./math";

console.log(add(5, 10));
```

Compilez en JavaScript et exécutez avec Node.js ou un navigateur compatible avec ESModules.

---

## 💡 **Décorateurs**

Les décorateurs ajoutent des métadonnées ou modifient le comportement des classes et fonctions.

### Exemple :
```typescript
function Logger(target: Function) {
  console.log(`Classe créée : ${target.name}`);
}

@Logger
class Car {
  constructor(public brand: string) {}
}
const myCar = new Car("Toyota");
```

> Les décorateurs sont expérimentaux et nécessitent l’activation dans `tsconfig.json` :
```json
{
  "experimentalDecorators": true
}
```

---

## 🛡️ **Gestion des Erreurs**

TypeScript aide à identifier les erreurs au moment de la compilation. Voici comment améliorer la gestion des erreurs :

### Exemple avec `never` :
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

### Exemple avec `unknown` :
```typescript
function processInput(input: unknown): void {
  if (typeof input === "string") {
    console.log(`Input est une chaîne : ${input}`);
  } else {
    console.log(`Input est un type inconnu`);
  }
}
```

---

## 🌐 **Integration avec des Frameworks**

Apprenez à utiliser TypeScript avec des outils modernes comme :

- **React** :
```tsx
interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

- **Node.js** :
Ajoutez des types pour les API HTTP, fichiers, etc.

---

## 🔍 **Outils et Configurations**

### `tsconfig.json`
Ce fichier configure le comportement de TypeScript dans votre projet.

#### Exemple minimal :
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true
  }
}
```

### Linting avec ESLint
Ajoutez TypeScript dans votre configuration ESLint pour détecter les mauvaises pratiques.

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

#### `.eslintrc.json` :
```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

---

## 🎯 **Projets pour Pratiquer**

- Création d'un gestionnaire de tâches avec TypeScript.
- Développement d'un système de quiz avec types avancés.
- Construction d'une API REST sécurisée avec Express et TypeScript.

---

En maîtrisant ces concepts, vous serez prêt à construire des applications robustes et évolutives avec TypeScript. 🌟

