# Le Manuel TypeScript 

## Les types 

* Les primitives: `string`, `number`, et `boolean`

Les noms de types String, Number, et Boolean (avec une première lettre majuscule) existent, mais réfèrent à des types spéciaux qui vont très rarement apparaître dans notre code. 
Utiliser toujours string, number, ou boolean pour annoter les types.

* Tableaux

Pour préciser le type d'un tableau comme [1, 2, 3], on peut utiliser la syntaxe `number[]`; 
cette syntaxe peut être utilisée pour d'autres types (par exemple, `string[]` est un tableau de chaînes de caractères, et ainsi de suite).
On pourrait aussi voir la notation `Array<number>`, qui signifie la même chose.

-- À noter que la notation [number] est différente;

* any

TypeScript possède également un type spécial, `any`, qu'on peut utiliser dès qu'on *souhaite qu'une valeur particulière ne cause pas d'erreurs à la vérification de types.*

Quand une valeur est de type `any`, on peut accéder à toutes ses propriétés (qui seront, à leur tour, de type `any`), l'appeler comme une fonction, 
l'assigner à (ou depuis) une valeur de tous types, ainsi que tout ce qui pourrait être légal :

```
let obj: any = { x: 0 };
// Aucune de ces lignes ne va émettre d'erreur.
// Utiliser `any` désactive toute vérification de types, et TypeScript supposera
// que vous connaissez l'environnement mieux que lui.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

Le type `any` est utile quand on ne veut pas écrire une très grande ligne de typage rien que pour convaincre TypeScript qu'une certaine ligne de code est valide.

* noImplicitAny

Si on ne précise pas de type, et TypeScript ne peut pas l'inférer du contexte, le compilateur va adopter le type `any`.

On veut peut-être l'éviter, cependant, parce qu'il n'y a aucune vérification de types sur any. Utiliser l'option **noImplicitAny** pour relever toutes ces situations en tant qu'erreurs.

## Annotations de Types sur des Variables

Quand on déclare une variable avec `const`, `var`, ou `let`, on peut optionnellement ajouter une annotation de type pour préciser explicitement le type de la variable :

```
let myName: string = "Alice";
```

-- TypeScript n'utilise pas de déclarations du style "types vers la gauche", comme int x = 0; *Les annotations de types iront toujours après la variable qui est typée.*

Par contre, la plupart des cas, cela n'est pas nécessaire. Dès que possible, TypeScript essaiera d'*inférer* automatiquement les types de votre code. 
Par exemple, le type d'une variable est inféré en fonction du type de son initialiseur :

```
// Pas d'annotation nécessaire -- inférer 'myName' montre que la variable est de type 'string'
let myName = "Alice";
```

La plupart du temps, on n'aura pas besoin d'apprendre les règles d'inférence. Si on débute avec TypeScript, essayez d'utiliser moins d'annotations qu'on pense nécessaire - on verra que TypeScript 
saura comprendre nos intentions bien plus souvent qu'on ne le pense.

## Fonctions

Les fonctions sont les moyens principaux de transfert de données en JavaScript. TypeScript nous permet d'annoter précisément les types de données en entrée et en sortie de ces fonctions.

### Annotations de Types de Paramètres

Quand on déclare une fonction, on peut ajouter des annotations de types après chaque paramètre pour déclarer quel(s) type(s) la fonction accepte.
Les annotations de types de paramètres iront après le nom des paramètres :

```
// Annotation de type de paramètre
function greet(name: string) {
  console.log("Bonjour, " + name.toUpperCase() + " !!");
}
```

Dès qu'un paramètre est annoté, les arguments de cette fonction seront vérifiés : 

![Capture d’écran du 2025-01-22 10-51-53](https://github.com/user-attachments/assets/b9e91c6a-5b79-4236-834c-f15280ad0e8e)


-- Même si on n'a pas d’annotation sur vos paramètres, TypeScript vérifiera également qu'on passe le nombre correct d'arguments lors de l'appel de la fonction.

### Annotations de Type de Retour

On peut également ajouter des annotations de types de retour. Ces annotations apparaissent après les listes de paramètres :

```
function getFavoriteNumber(): number {
  return 26;
}
```

Tout comme les annotations de variables, on n’a généralement pas besoin d’en préciser tout le temps, parce que TypeScript inférera les types de retour d’une fonction en se basant sur les valeurs retournées.
Dans l’exemple ci-dessus, le `: number` ne changera rien. Certaines bases de code précisent explicitement le type de retour à des fins de documentation, 
pour éviter les changements accidentels, ou simplement par préférence personnelle.

### Fonctions anonymes

Les fonctions anonymes sont légèrement différentes des déclarations de fonctions.
Quand une fonction apparaît à un endroit où TypeScript peut déterminer comment elle sera appelée, les paramètres de cette fonction sont automatiquement typés.
Voici un exemple : 

```
// Pas d'annotations, mais TypeScript sera capable de repérer les bugs
const names = ["Alice", "Bob", "Eve"];
 
// Typage contextuel pour des fonctions
names.forEach(function (s) {
  console.log(s.toUppercase());

Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Le typage contextuel peut aussi s'appliquer aux fonctions fléchées
names.forEach((s) => {
  console.log(s.toUppercase());

Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

![Capture d’écran du 2025-01-22 11-00-15](https://github.com/user-attachments/assets/bd0506e4-80f6-4b95-bd18-27b7b9bbca34)

Même si `s` n'a pas d'annotation de type, TypeScript a utilisé le type de la fonction `forEach`, ainsi que le type inféré du tableau (qui est, donc, `string[]`), pour déterminer le type de `s`.

Ce procédé s'appelle *typage contextuel* car le *contexte* de cette fonction a permis de préciser quel type le paramètre doit avoir.

De la même façon que les règles de l'inférence, vous n'a pas besoin d’apprendre exactement comment ça se passe, mais comprendre que cela peut se produire
peut aider à remarquer les endroits où une annotation n’est pas nécessaire.

## Types Objets

À part les primitives, le type le plus commun qu'on rencontrera est le *type objet*. 
Il fait référence à toute valeur JavaScript qui peut avoir une propriété, c'est-à-dire *quasiment toutes* ! Pour définir un type objet, il suffit de lister ses propriétés et leurs types.

Par exemple, voici une fonction qui prend en paramètre un objet qui ressemble à un point à coordonnées :

```
// L'annotation de type du paramètre est un objet
function printCoord(pt: { x: number; y: number }) {
  console.log("La valeur x de la coordonnée est " + pt.x);
  console.log("La valeur y de la coordonnée est " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Ici, nous avons annoté un paramètre avec un type à deux propriétés - `x` et `y` - qui sont toutes les deux de type number. On peut utiliser , ou ; pour séparer les propriétés, le dernier séparateur étant optionnel.

Il n'est également pas nécessaire de préciser le type d'une propriété. Dans ce cas, TypeScript supposera que la propriété en question est de type `any`.

### Propriétés facultatives

Les types objet peuvent aussi préciser que certaines ou toutes leurs propriétés sont *facultatives*. Pour ce faire, on devra ajouter un `?` après le nom de propriété :

```
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Les deux sont OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

En JavaScript, accéder à une propriété qui n'existe pas retourne `undefined` au lieu d'une erreur. 
De ce fait, quand on *lit* une propriété facultative, on devra vérifier qu'elle n'est pas undefined avant de continuer :

![Capture d’écran du 2025-01-22 11-31-33](https://github.com/user-attachments/assets/5758ed14-e6d6-4e83-95cf-d130c8e9970f)

## Types Union

Le système de types de TypeScript permet de créer de nouveaux types en partant de types existants, à travers une grande variété opérateurs. 
Maintenant qu'on sait écrire des types, il est l'heure de les *combiner* de façons qui vont être intéressantes.

### Définir un Type Union 

La première façon de combiner des types est de créer un type *union*. Un type union est un type formé de deux ou plusieurs types, représentant des valeurs qui pourraient faire partie de *n'importe lequel* de ces types. 
Chacun des types de l'union est un *membre de cette union*.

Écrivons une fonction qui peut agir sur un `number` ou sur un `string` :

![Capture d’écran du 2025-01-22 12-30-56](https://github.com/user-attachments/assets/154431e1-618a-451b-8b1b-ee2179818777)

### Utiliser les Types Union

Il est facile de *fournir* une valeur qui correspond à un type union - on peut simplement fournir une valeur qui a un type membre de ce type union.
Mais si on a une valeur dont le type est un type union, que faire ?

TypeScript va permettre une opération *uniquement* si elle est valide pour tous les membres de l'union.
Par exemple, si on a le type `string | number`, on ne peut pas utiliser les méthodes qui sont disponibles uniquement dans le type `string`:

![Capture d’écran du 2025-01-22 12-33-57](https://github.com/user-attachments/assets/9a2b0e41-9710-4d6e-a35b-3cfd514021d7)

La solution est de *rétrécir* l'union avec du code, de la même façon qu'avec du code JavaScript sans annotation de types. 
Le *rétrécissement* se produit quand TypeScript peut déduire un type plus spécifique pour une certaine valeur, en se basant sur la structure du code.

Par exemple, TypeScript sait que si `typeof` une valeur renvoie `string`, cette valeur peut uniquement être un `string` :

```
function printId(id: number | string) {
  if (typeof id === "string") {
    // Dans cette branche, id est un string
    console.log(id.toUpperCase());
  } else {
    // Ici, id est un nombre
    console.log(id);
  }
}
```

Un autre exemple qui implique d'utiliser `Array.isArray` :

```
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Ici, 'x' est un 'string[]'
    console.log("Bonjour, " + x.join(" et "));
  } else {
    // Ici, 'x' est un 'string'
    console.log("Bienvenue, voyageur solitaire " + x);
  }
}
```

Remarque que dans la branche `else`, nous n'avons pas eu à faire quoi que ce soit - si `x` n'est pas un `string[]`, alors il doit être un `string`.

Parfois, on aura des unions où les types membres ont des éléments en commun. Par exemple, les tableaux et les `string` possèdent la méthode `slice`.
Si chaque membre de l'union a cette propriété, on pourra s' en servir sans faire de rétrécissement :

```
// Le type de retour est number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

-- L'*union* de types paraît posséder l'*intersection* des propriétés de ces types, ce qui peut paraître perturbant. C'est voulu : le nom *union* vient de la théorie des ensembles. 
L'union number | string est créée en obtenant l'union des valeurs de chaque type.
Remarquer que pour deux ensembles avec des éléments qui décrivent chaque ensemble, seule l'intersection de ces éléments s'applique à l'union de ces ensembles. 
Par exemple, si on a une salle remplie de grandes personnes avec un chapeau, avec des personnes parlant l'espagnol et portant un chapeau, 
la seule description commune qui s'applique à l'union de ces personnes (à toutes ces personnes) est le fait qu'elles portent toutes un chapeau.

## Alias de Types

Jusque-là, on a utilisé les types objet et types union en les écrivant directement dans les annotations de types.
C'est convenable, mais on voudra souvent utiliser le même type plus d'une fois, et y référer avec un seul nom.
Un *alias de type* est exactement cela - un *nom* pour un *type*. Voici la syntaxe d'un alias de type :

```
type Point = {
  x: number;
  y: number;
};
 
// Identique à l'exemple précédent
function printCoord(pt: Point) {
  console.log("La valeur de la coordonnée x est " + pt.x);
  console.log("La valeur de la coordonnée y est " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

On peut même utiliser les alias de types pour nommer toutes sortes de types, pas juste des types objet. Par exemple, un alias de type peut nommer un type union :

```
type ID = number | string;
```

Remarquer que les alias sont *uniquement* des alias - on ne peut pas utiliser d'alias pour créer des variantes / versions différentes d'un type déjà existant. 
En utilisant le type alias, c'est comme si on avait écrit le type remplacé par l'alias. 
En d'autres termes, ce code peut *paraître* illégal, mais TypeScript l'accepte parce que les deux types sont, en réalité, deux alias pour le même type :

```
type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Aseptiser l'entrée reçue
let userInput = sanitizeInput(getInput());
 
// Peut toujours recevoir un string
userInput = "new input";
```

## Interfaces

Une *déclaration d'interface* est une autre façon de nommer un type objet :

```
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("La valeur de la coordonnée x est " + pt.x);
  console.log("La valeur de la coordonnée y est " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```




