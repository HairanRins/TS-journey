# Typescript 

TypeScript est *un sur-ensemble de JavaScript* qui ajoute un typage statique facultatif et des fonctionnalités avancées à JavaScript. 
Il a été développé par Microsoft et a été initialement publié en octobre 2012. Depuis sa sortie en 2012, il a rapidement acquis une adoption généralisée dans la communauté du développement Web.

TypeScript a été créé pour répondre à certaines des limitations de JavaScript, telles que son manque de typage fort, 
ce qui peut entraîner des erreurs subtiles difficiles à détecter pendant le développement.

Par exemple, considérons le code JavaScript suivant:

```
function add(a, b) {
  return a + b;
}

let result = add(10, "20"); // No error, but result is "1020" instead of 30
```

Le code ci-dessus crée une fonction `add`, qui est dynamiquement typé. Le type des arguments `a` et `b` n'est pas appliquée. 
En conséquence, le passage d'une chaîne au lieu d'un nombre en tant qu'argument ne produit pas d'erreur, mais concatène 
plutôt les valeurs en tant que chaînes, conduisant à un comportement inattendu.

Avec TypeScript, le typage statique facultatif est introduit, permettant développeurs pour spécifier les types de variables, les paramètres de fonction et les valeurs de retour, 
capturé les erreurs liées aux types pendant le développement.

```
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

Dans le code TypeScript ci-dessus, les types de paramètres `a` et `b` sont explicitement définis comme des nombres.
Si une chaîne est passée en argument, TypeScript déclenchera une erreur de compilation, fournissant une rétroaction précoce pour détecter les problèmes potentiels.

## Caractéristiques de TypeScript

TypeScript fournit plusieurs fonctionnalités.
Ces fonctionnalités offrent une expérience de développeur améliorée et une organisation du code.

**1. Statique Typing**

TypeScript dispose d'un système de typage puissant qui permet de spécifier les types de variables et les paramètres de fonction au moment de la compilation.
Cela permet une détection précoce des erreurs liées au type, rendant le code plus fiable et moins sujet aux bugs.
En JavaScript, par contre, les variables sont typées dynamiquement, ce qui signifie que leur type peut changer pendant l'exécution.

Par exemple, le code JavaScript ci-dessous montre la déclaration de deux variables qui sont dynamiquement tapées en tant que nombre et chaîne:

```
let num1 = 10; // num1 is dynamically typed as a number
let num2 = "20"; // num2 is dynamically typed as a string

let result = num1 + num2; // No error at compile-time
console.log(result); // Output: "1020"
```

Ce code ci-dessus produira "1020", une concaténation de nombre et de chaîne. Ce n'est pas la sortie attendue — ce qui signifie que cela peut affecter notre code.
L'inconvénient avec JavaScript est qu'il ne lancera aucune erreur. On peut résoudre ce problème avec TypeScript en spécifiant les types de chaque variable:

```
let num1: number = 10; // num1 is statically typed as a number
let num2: string = "20"; // num2 is statically typed as a string

let result = num1 + num2; // Error: Type 'string' is not assignable to type 'number'
```

Dans le code ci-dessus, une tentative de concaténer un nombre et une chaîne en utilisant le `+` l'opérateur génère une erreur de compilation, 
car TypeScript applique une vérification de type stricte.

Cela permet de détecter les bugs potentiels liés au type avant d'exécuter le code, ce qui conduit à un code plus robuste et sans erreur.

**2. Typing Facultatif**

TypeScript offre une flexibilité dans le choix d'utiliser le typage statique ou non. Cela signifie qu'on peut choisir de spécifier des types
pour les variables et les paramètres de fonction ou laisser TypeScript déduire les types automatiquement en fonction de la valeur attribuée.

Par exemple:

```
let num1: number = 10; // num1 is statically typed as a number
let num2 = "20"; // num2 is dynamically typed as a string

let result = num1 + num2; // Error: Operator '+' cannot be applied to types 'number' and 'string'
```

Dans ce code, le type de `num2` est déduite comme `string` en fonction de la valeur attribuée, mais on peut choisir de spécifier le type si on le souhaite.

On peut également définir le type à `any`, ce qui signifie qu'il accepte tout type de valeur:

```
let num1: number = 10;
let num2: any = "20";

let result = num1 + num2; // Error: Operator '+' cannot be applied to types 'number' and 'string'
```

**3. ES6+ Caractéristiques**

TypeScript prend en charge les fonctionnalités JavaScript modernes, y compris celles introduites dans ECMAScript 6 (ES6) et les versions ultérieures.

Cela permet aux développeurs d'écrire un code plus propre et plus expressif en utilisant des fonctionnalités telles que les fonctions de flèche,
la déstructuration, et les fonctions de déstructuration modèles littéraux, et plus, avec la vérification de type ajoutée.

Par exemple:

```
const greeting = (name: string): string => {
  return `Hello, ${name}!`; // Use of arrow function and template literal
};

console.log(greeting("John")); // Output: Hello, John!
```

Dans ce code, la fonction flèche et le modèle littéral sont parfaitement utilisés. Il en va de même pour toute la syntaxe JavaScript.

**4. Code Organisation**

En JavaScript, l'organisation du code dans des fichiers séparés et la gestion des dépendances peuvent devenir difficiles à mesure que la base de code grandit.
Cependant, TypeScript fournit une prise en charge intégrée des modules et des espaces de noms pour mieux organiser le code.

Les modules permettent l'encapsulation de code dans des fichiers séparés, ce qui facilite la gestion et la maintenance de grandes bases de code.

Par exemple : 

```
// greeting.ts:
export function greet(name: string): string { // Export a function from a module
  return `Hello, ${name}!`;
}

// app.ts:
import { greet } from "./greeting"; // Import from a module

console.log(greet("John")); // Output: Hello, John!
```

Dans l'exemple ci-dessus, nous avons deux fichiers distincts **greeting.ts** et **app.ts**. Le app.ts le fichier importe `greet` fonction de la greeting.ts fichier utilisant le import déclaration.
Le greeting.ts le fichier exporte greet fonction utilisant le `export` mot-clé, le rendant accessible pour l'importation dans d'autres fichiers.

Cela permet une meilleure organisation du code et la séparation des préoccupations, ce qui facilite la gestion et la maintenance des grandes bases de code.

Les espaces de noms dans TypeScript fournissent un moyen de regrouper le code associé et d'éviter la pollution globale des espaces de noms. 
Ils peuvent être utilisés pour définir un conteneur pour un ensemble de classes, d'interfaces, de fonctions ou de variables associées.

Par exemple : 

```
namespace Utilities {
  export function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  export function capitalize(str: string): string {
    return str.toUpperCase();
  }
}

console.log(Utilities.greet("John")); // Output: Hello, John!
console.log(Utilities.capitalize("hello")); // Output: HELLO
```

Dans ce code, nous définissons un `namespace Utilities` il contient deux fonctions `greet` et `capitalize`. 
Nous pouvons accéder à ces fonctions en utilisant le nom de l'espace de noms suivi du nom de la fonction, fournissant un regroupement logique pour le code associé.

**5. Programmation Orientée Objet (OOP) Caractéristiques**

TypeScript prend en charge (POPO concepts tels que) classes, interfaces et héritage, permettant un code structuré et organisé.

Par exemple:

```
class Person {
  constructor(public name: string) {} // Define a class with a constructor
  greet(): string { // Define a method in a class
    return `Hello, my name is ${this.name}!`;
  }
}

const john = new Person("John"); // Create an instance of the class
console.log(john.greet()); // Output: Hello, my name is John!
```

**6. Système Type Avancé**

TypeScript fournit un système de type avancé prenant en charge les génériques, les unions, les intersections, etc.
Ces fonctionnalités améliorent les capacités de vérification de type statique de TypeScript, permettant aux développeurs d'écrire du code plus robuste et expressif.

***Génériques:*** Les génériques permettent d'écrire du code réutilisable qui peut fonctionner avec différents types. 
Les génériques sont comme des espaces réservés pour les types qui sont déterminés à l'exécution en fonction des valeurs transmises à une fonction ou à une classe.

Par exemple, let’s définit une identité de fonction générique qui prend une valeur d'argument de type `T` renvoie une valeur du même type `T`:

```
function identity(value: T): T {
  return value;
}

let num: number = identity(10); // T is inferred as number
let str: string = identity("hello"); // T is inferred as string
```

Dans l'exemple ci-dessus, le type `T` est inféré en fonction du type de valeur passée à la fonction. Dans la première utilisation de la fonction identité,
`T` est inféré comme nombre parce que nous passons `10` comme argument, et dans le second usage, T est inférée comme une chaîne parce que nous passons `"hello"` comme argument.

***Syndicats et intersections:*** Les unions et intersections sont utilisées pour composer des types et créer des relations de type plus complexes.

Les syndicats permettent de combiner deux types ou plus en un seul type qui peut avoir l'un des types combinés.
Les intersections permettent de combiner deux types ou plus en un seul type qui doit satisfaire tous les types combinés.

Par exemple, nous pouvons définir deux types `Employee` et `Manager`, représentant un employé et un gestionnaire, respectivement.

```
type Employee = { name: string, role: string };
type Manager = { name: string, department: string };
```

Utiliser les types `Employee` et `Manager`, nous pouvons définir un type d'union `EmployeeOrManager` cela peut être soit un `Employee` ou un `Manager`.

```
type EmployeeOrManager = Employee | Manager; // Union type

let person1: EmployeeOrManager = { name: "John", role: "Developer" }; // Can be either Employee or Manager
```

Dans le code ci-dessus, le `person1` la variable est de type `EmployeeOrManager`, ce qui signifie qu'il peut être attribué un objet qui satisfait soit `Employee` ou `Manager` type.

On peut aussi définir un type d'intersection `EmployeeOrManager` cela doit satisfaire les deux `Employee` et `Manager` types.

```
type EmployeeAndManager = Employee & Manager; // Intersection type

let person2: EmployeeAndManager = { name: "Jane", role: "Manager", department: "HR" }; // Must be both Employee and Manager
```

Dans le code ci-dessus, le `person2` la variable est de type `EmployeeAndManager`, ce qui signifie qu'il doit être un objet qui satisfait les deux `Employee` et `Manager` types.

**7. Compatibilité Avec JavaScript**

TypeScript est conçu pour être un sur-ensemble de JavaScript, ce qui signifie que tout code JavaScript valide est également un code TypeScript valide. 
Cela facilite l'intégration de TypeScript dans les projets JavaScript existants sans avoir à réécrire tout le code.

TypeScript s'appuie sur JavaScript, ajoutant une saisie statique optionnelle et des fonctionnalités supplémentaires, mais il permet toujours d'utiliser du code JavaScript brut tel quel.

Par exemple, si on a un fichier JavaScript existant **app.js**, on peut le renommer en **app.ts** et commencé à utiliser les fonctionnalités TypeScript progressivement sans modifier le code JavaScript existant.
TypeScript sera toujours capable de comprendre et de compiler le code JavaScript en tant que TypeScript valide.

Voici un exemple de la façon dont TypeScript fournit une intégration transparente avec JavaScript:

```
// app.js - Existing JavaScript code
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!
```

On peut renommer le fichier JavaScript ci-dessus en **app.ts** et commencé à utiliser les fonctionnalités TypeScript:

```
// app.ts - Same JavaScript code as TypeScript
function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!
```

Dans l'exemple ci-dessus, nous ajoutons une annotation de type au paramètre name, en le spécifiant comme `string`, qui est facultatif dans TypeScript. Le reste du code reste le même que JavaScript. 
TypeScript est capable de comprendre le code JavaScript et de fournir une vérification de type pour l'annotation de type ajoutée, 
ce qui facilite l'adoption progressive de TypeScript dans un projet JavaScript existant.


