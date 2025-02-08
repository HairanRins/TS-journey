Si vous souhaitez maîtriser TypeScript, il est essentiel de comprendre certains termes techniques et concepts clés. Voici une liste des principaux termes et notions :  

### 1. **Types de base**  
- `number`, `string`, `boolean` – Types primitifs.  
- `any` – Accepte n'importe quel type (à éviter autant que possible).  
- `unknown` – Similaire à `any`, mais impose une vérification avant utilisation.  
- `void` – Indique l'absence de retour d'une fonction.  
- `never` – Représente une valeur qui ne se produit jamais (ex: fonction qui lève une exception).  
- `null` et `undefined` – Valeurs spéciales dans TypeScript.  

### 2. **Types avancés**  
- `union types` (`type A | type B`) – Une variable peut être de plusieurs types.  
- `intersection types` (`type A & type B`) – Combine plusieurs types en un seul.  
- `literal types` – Des valeurs spécifiques (`'success' | 'error'`).  
- `tuple` – Tableau de types définis (`[number, string]`).  
- `enum` – Ensemble de valeurs nommées (`enum Role {Admin, User}`).
- `mapped types` – Transformation de types (`{ [K in keyof T]: T[K] }`).  
- `conditional types` – Types basés sur des conditions (`T extends U ? X : Y`).  
- `type assertions` – Conversion forcée (`val as string`).  

### 3. **Interfaces et types**  
- `interface` – Décrit la structure d'un objet.  
- `type` – Similaire à `interface`, mais avec plus de flexibilité.  
- `extends` – Héritage d'une interface ou d'un type.  
- `implements` – Implémentation d'une interface par une classe.  

### 4. **Fonctions et génériques**  
- `function types` – Définition des signatures de fonction.  
- `optional parameters` (`param?`) – Paramètres facultatifs.  
- `default parameters` (`param = defaultValue`) – Paramètres avec valeurs par défaut.  
- `rest parameters` (`...args: Type[]`) – Paramètres variables.  
- `generics` (`T`) – Paramètres de type génériques (`Array<T>`).  

### 5. **Programmation Orientée Objet (POO)**  
- `class` – Déclaration de classe.  
- `constructor` – Fonction spéciale pour initialiser une classe.  
- `public`, `private`, `protected` – Modificateurs d'accès.  
- `readonly` – Empêche la modification après initialisation.  
- `static` – Propriétés ou méthodes de classe accessibles sans instance.  
- `abstract class` – Classe de base qui ne peut pas être instanciée directement.  

### 6. **Modules et Espaces de Noms**  
- `import/export` – Importation et exportation de modules.  
- `namespace` – Regroupement de fonctionnalités sous un même nom.  

### 7. **Utilitaires TypeScript** (Utility Types)  
- `Partial<T>` – Rend toutes les propriétés d'un type facultatives.  
- `Required<T>` – Rend toutes les propriétés d'un type obligatoires.  
- `Readonly<T>` – Empêche la modification des propriétés d'un type.  
- `Pick<T, K>` – Sélectionne certaines propriétés d'un type.  
- `Omit<T, K>` – Exclut certaines propriétés d'un type.  
- `Record<K, T>` – Crée un type avec des clés `K` et des valeurs `T`.  
- `Exclude<T, U>` – Exclut les types d'un ensemble de types.  
- `Extract<T, U>` – Extrait un sous-ensemble de types.  
- `NonNullable<T>` – Exclut `null` et `undefined` d'un type.  

### 8. **Manipulation des types avec keyof et typeof**  
- `keyof` – Récupère les clés d'un type (`keyof T`).  
- `typeof` – Utilisé pour obtenir le type d'une variable.  

### 9. **ES6+ et TypeScript**  
- `arrow functions` (`() => {}`) – Syntaxe courte pour les fonctions.  
- `destructuring` (`const {name} = obj`) – Extraction de propriétés d'un objet.  
- `spread/rest operator` (`...obj`) – Copie d'objets/tableaux et paramètre variadique.  

### 10. **Interopérabilité avec JavaScript**  
- `declare` – Déclaration de variables globales.  
- `@types` – Packages de définitions de types pour JavaScript (`@types/node`).  
- `JSX` – Support pour React avec TypeScript (`.tsx`).  

### 11. **Configuration et Compilation**  
- `tsconfig.json` – Fichier de configuration TypeScript.  
- `strict mode` (`"strict": true`) – Active toutes les vérifications strictes.  
- `sourceMap` – Permet le debugging avec les fichiers `.map`.  

### 12. **Type Narrowing et Control Flow Analysis**  
- `typeof`, `instanceof`, `in` – Méthodes pour affiner les types dynamiquement.  
- `discriminated unions` – Unions avec une clé discriminante pour un typage plus sûr.  

Cette liste couvre l’essentiel du vocabulaire TypeScript que vous devriez maîtriser. 
