# Le jargon TypeScript (et compilateurs en général) : **lexer, parser, AST, transpilation, etc.**

---

## 1. **Lexer (ou Tokenizer)**

👉 Rôle : transformer ton code brut (chaîne de caractères) en **tokens** (unités lexicales).

Exemple en TypeScript :

```ts
let x: number = 42;
```

- Le **lexer** va découper ça en tokens :

```
[ 'let', 'x', ':', 'number', '=', '42', ';' ]
```

Donc, le lexer lit caractère par caractère et regroupe ce qui a du sens en tokens.

---

## 2. **Parser**

👉 Rôle : prendre les tokens et construire une **arborescence syntaxique** (AST = Abstract Syntax Tree).

Exemple : `let x: number = 42;`

L’AST pourrait ressembler à ça (simplifié) :

```
VariableDeclaration
 ├─ name: x
 ├─ type: number
 └─ initializer: 42
```

Le parser vérifie aussi la **syntaxe** : si tu écris `let = x 42;`, il va lever une erreur car ça ne correspond pas à la grammaire du langage.

---

## 3. **AST (Abstract Syntax Tree)**

👉 Structure en arbre représentant le code d’une façon que la machine peut analyser.
Exemple visuel :

Code :

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

AST (simplifié) :

```
FunctionDeclaration
 ├─ name: add
 ├─ parameters
 │   ├─ a: number
 │   └─ b: number
 └─ returnType: number
 └─ body
     └─ ReturnStatement
         └─ BinaryExpression (+)
             ├─ Identifier: a
             └─ Identifier: b
```

---

## 4. **Transpilation**

👉 Transformer le code TypeScript en JavaScript.
TypeScript n’est pas directement compris par le navigateur → il doit être **transpilé**.

Exemple :

```ts
let x: number = 42;
```

Après transpilation (ES5 JS) :

```js
var x = 42;
```

---

## 5. **Type Checking**

👉 Étape propre à TypeScript : vérifier que les types sont corrects.

Exemple :

```ts
let x: number = "hello"; // ❌ erreur
```

Le type checker détecte que `"hello"` n’est pas assignable à `number`.

---

## 6. **Emit**

👉 Étape finale du compilateur TS : générer le fichier JavaScript (et éventuellement les `.d.ts`).

---

## Résumé du pipeline TS

1. **Source Code** → (Lexer) → Tokens
2. Tokens → (Parser) → AST
3. AST → (Type Checker) → vérifie les types
4. AST → (Emitter/Transpiler) → JavaScript

---

💡 Petit exemple en mode **pipeline** :

Code TS :

```ts
let msg: string = "Hello";
console.log(msg);
```

- Lexer → `["let", "msg", ":", "string", "=", '"Hello"', ";", "console", ".", "log", "(", "msg", ")", ";"]`
- Parser → AST (déclaration de variable + appel de fonction)
- Type Checker → vérifie que `msg` est bien une `string`
- Emitter →

```js
var msg = "Hello";
console.log(msg);
```

---
