Si certaines méthodes de tableau ne sont pas disponibles (par exemple, dans un environnement plus ancien ou limité), 
voici des techniques alternatives en utilisant des boucles et d'autres constructions de base de JavaScript/TypeScript.

---

## **1. Alternative à `map()`**
Si `map()` n'est pas disponible, on peut utiliser une boucle `for` ou `forEach` pour transformer un tableau :

```ts
let numbers = [1, 2, 3, 4];
let doubled: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled); // [2, 4, 6, 8]
```

---

## **2. Alternative à `filter()`**
On peut utiliser une boucle et un tableau temporaire pour filtrer les éléments :

```ts
let filtered: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 2) {
    filtered.push(numbers[i]);
  }
}

console.log(filtered); // [3, 4]
```

---

## **3. Alternative à `reduce()`**
On peut utiliser une boucle pour accumuler une valeur :

```ts
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 10
```

---

## **4. Alternative à `forEach()`**
Si `forEach()` n'est pas disponible, une boucle `for` ou `while` fait l'affaire :

```ts
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
```

Ou avec `while` :
```ts
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i] * 2);
  i++;
}
```

---

## **5. Alternative à `indexOf()`**
Sans `indexOf()`, on peut rechercher manuellement un élément avec une boucle :

```ts
function customIndexOf(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(customIndexOf(numbers, 3)); // 2
console.log(customIndexOf(numbers, 10)); // -1
```

---

## **6. Alternative à `includes()`**
Une boucle peut vérifier la présence d’un élément :

```ts
function customIncludes(arr: number[], value: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

console.log(customIncludes(numbers, 3)); // true
console.log(customIncludes(numbers, 10)); // false
```

---

## **7. Alternative à `slice()`**
On peut copier manuellement une portion d’un tableau :

```ts
function customSlice(arr: number[], start: number, end: number): number[] {
  let result: number[] = [];
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(customSlice(numbers, 1, 3)); // [2, 3]
```

---

## **8. Alternative à `splice()`**
Supprimer ou ajouter des éléments sans `splice()` :

### **Supprimer des éléments**
```ts
function customRemove(arr: number[], index: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) result.push(arr[i]);
  }
  return result;
}

console.log(customRemove(numbers, 2)); // [1, 2, 4]
```

### **Ajouter un élément à un index spécifique**
```ts
function customInsert(arr: number[], index: number, value: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) result.push(value);
    result.push(arr[i]);
  }
  return result;
}

console.log(customInsert(numbers, 2, 99)); // [1, 2, 99, 3, 4]
```

---

## **9. Alternative à `concat()`**
On peut fusionner deux tableaux avec une boucle :

```ts
function customConcat(arr1: number[], arr2: number[]): number[] {
  let result = [...arr1]; // Copie du premier tableau
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log(customConcat([1, 2], [3, 4])); // [1, 2, 3, 4]
```

---

## **10. Alternative à `sort()`**
Un simple tri par sélection peut remplacer `sort()` :

```ts
function customSort(arr: number[]): number[] {
  let sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted;
}

console.log(customSort([4, 2, 7, 1])); // [1, 2, 4, 7]
```

---

## **11. Alternative à `reverse()`**
On peut inverser un tableau avec une boucle :

```ts
function customReverse(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(customReverse([1, 2, 3])); // [3, 2, 1]
```

---

## **Conclusion**
Même si les méthodes modernes sont pratiques et optimisées, on peut toujours utiliser des boucles et d'autres structures de base pour obtenir le même résultat. 
Ces alternatives sont utiles si tu travailles dans un environnement où certaines méthodes ne sont pas disponibles ou si tu veux mieux comprendre comment elles fonctionnent en interne. 🚀
