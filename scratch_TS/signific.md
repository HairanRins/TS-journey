# À savoir

En TypeScript, **`string`** et **`String`** (ainsi que **`number`** et **`Number`**) ont des différences subtiles qui influencent la façon dont vous travaillez avec ces types. Voici un aperçu de leur usage et des distinctions :

### 1. **`string` vs `String`**
   - **`string`** (minuscule) est le type primitif utilisé pour les chaînes de caractères. C’est celui que vous devez utiliser pour définir les types dans les déclarations de variables ou dans les paramètres de fonction.
   
     Exemple :
     ```typescript
     let name: string = "Alice";
     let message: string = "Hello, world!";
     ```
   
   - **`String`** (majuscule) est l'objet wrapper pour le type primitif `string`. Il représente une instance d'un objet qui encapsule une chaîne de caractères. Vous pouvez créer des objets de type `String` en utilisant le constructeur `new String()`. Cependant, **il est généralement déconseillé d'utiliser `String`** pour la déclaration de types, car cela peut entraîner des comportements imprévus (en particulier lorsqu'il est comparé à une chaîne primitive).

     Exemple (non recommandé) :
     ```typescript
     let strObj: String = new String("Hello"); // Cela crée un objet
     ```

   - **Pourquoi éviter `String` ?**
     - Lorsque vous utilisez `new String()`, vous obtenez un objet et non une chaîne primitive. Par exemple, une instance de `new String("Hello")` est un objet, et non une simple chaîne.
     - Comparer un objet `String` à une chaîne primitive (`string`) ne donnera pas le même résultat avec des opérateurs comme `===`.

     ```typescript
     const objString: String = new String("Hello");
     const primitiveString: string = "Hello";
     console.log(objString === primitiveString); // false, car un est un objet, l'autre une chaîne primitive
     ```

     **Conclusion** : Utilisez **`string`** pour les types primitifs et **`String`** seulement si vous avez besoin explicitement d'un objet qui encapsule une chaîne de caractères.

---

### 2. **`number` vs `Number`**
   - **`number`** (minuscule) est le type primitif pour représenter les nombres (qu'ils soient entiers ou flottants). C'est celui que vous devez utiliser pour les déclarations de variables et les types de fonctions.
   
     Exemple :
     ```typescript
     let age: number = 25;
     let price: number = 10.99;
     ```

   - **`Number`** (majuscule) est l'objet wrapper pour le type primitif `number`. Vous pouvez créer des objets `Number` en utilisant le constructeur `new Number()`. Comme avec `String`, il est généralement déconseillé d'utiliser `Number` dans les déclarations de types, car cela entraîne des comportements inattendus en cas de comparaison avec des valeurs primitives.

     Exemple (non recommandé) :
     ```typescript
     let numObj: Number = new Number(10); // C'est un objet, pas un nombre primitif
     ```

   - **Pourquoi éviter `Number` ?**
     - Lorsqu'un objet `Number` est comparé avec un nombre primitif (`number`), il peut y avoir des différences inattendues.
     ```typescript
     const objNumber: Number = new Number(10);
     const primitiveNumber: number = 10;
     console.log(objNumber === primitiveNumber); // false, car l'un est un objet et l'autre un primitif
     ```

     **Conclusion** : Utilisez **`number`** pour les types numériques primitifs et **`Number`** uniquement si vous avez besoin d’un objet pour manipuler des valeurs numériques dans des situations très spécifiques.

---

### Résumé des différences :
| Type         | Description                                                      | Exemple d'usage                          |
|--------------|------------------------------------------------------------------|------------------------------------------|
| **`string`** | Type primitif pour les chaînes de caractères.                    | `let name: string = "Alice";`            |
| **`String`** | Objet wrapper pour le type `string`. Pas recommandé pour les types. | `let obj: String = new String("Hello");` |
| **`number`** | Type primitif pour les nombres (entiers et flottants).          | `let age: number = 25;`                 |
| **`Number`** | Objet wrapper pour le type `number`. Pas recommandé pour les types. | `let objNum: Number = new Number(10);`  |

En résumé, **toujours utiliser `string` et `number`** pour déclarer des types dans vos applications TypeScript. Réservez **`String` et `Number`** pour des cas où vous travaillez avec des objets encapsulant des chaînes ou des nombres, bien que dans la plupart des cas, cela soit rarement nécessaire.
