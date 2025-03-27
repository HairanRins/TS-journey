# Techniques Alternatives pour Manipuler les Tableaux en JavaScript/TypeScript

Lorsque les méthodes modernes ne sont pas disponibles (par exemple dans des environnements JavaScript très anciens), voici comment vous pourriez les remplacer avec des techniques plus traditionnelles.

## 1. Boucles classiques comme alternative

### Alternative à `forEach()`
```javascript
// Avec forEach()
const arr = [1, 2, 3];
arr.forEach(item => console.log(item));

// Alternative avec for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Alternative à `map()`
```javascript
// Avec map()
const doubled = [1, 2, 3].map(x => x * 2);

// Alternative
const doubledAlt = [];
for (let i = 0; i < arr.length; i++) {
  doubledAlt.push(arr[i] * 2);
}
```

## 2. Fonctions personnalisées

### Alternative à `filter()`
```javascript
function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const evens = customFilter(numbers, n => n % 2 === 0);
```

### Alternative à `reduce()`
```javascript
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  
  return accumulator;
}

const sum = customReduce([1, 2, 3], (acc, val) => acc + val, 0);
```

## 3. Techniques pour les opérations courantes

### Alternative à `includes()`
```javascript
// Avec includes()
[1, 2, 3].includes(2); // true

// Alternative
function contains(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
```

### Alternative à `find()`
```javascript
function customFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
```

## 4. Manipulation de tableaux sans méthodes modernes

### Alternative à `concat()`
```javascript
function concatArrays(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) newArray.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) newArray.push(arr2[i]);
  return newArray;
}
```

### Alternative à `slice()`
```javascript
function sliceArray(array, start, end) {
  const result = [];
  const len = array.length;
  start = start || 0;
  end = end === undefined ? len : end;
  
  for (let i = start; i < end && i < len; i++) {
    result.push(array[i]);
  }
  return result;
}
```

## 5. Tri et inversion sans méthodes natives

### Alternative à `sort()`
```javascript
function bubbleSort(array, compareFn) {
  const arr = array.slice(); // Crée une copie
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (compareFn ? compareFn(arr[i], arr[i+1]) > 0 : arr[i] > arr[i+1]) {
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
```

### Alternative à `reverse()`
```javascript
function reverseArray(array) {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

// En place (modifie l'original)
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}
```

## 6. Polyfills pour les environnements anciens

Si vous devez supporter des navigateurs très anciens mais que vous voulez utiliser la syntaxe moderne, vous pouvez implémenter des polyfills :

```javascript
// Polyfill pour forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Polyfill pour map
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
  };
}
```

## 7. Techniques spécifiques TypeScript

Pour TypeScript, vous pouvez créer des fonctions typées :

```typescript
function typedFilter<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const evens = typedFilter(numbers, n => n % 2 === 0);
```

Ces techniques alternatives vous permettent de reproduire les fonctionnalités des méthodes modernes même dans des environnements JavaScript plus anciens. 
Elles sont aussi utiles pour comprendre comment ces méthodes fonctionnent en interne.
