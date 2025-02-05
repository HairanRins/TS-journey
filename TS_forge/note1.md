Voici un résumé des concepts fondamentaux en **TypeScript**, **structures de données** et **algorithmes de base** :

---

## **1. TypeScript - Concepts Clés**
TypeScript est un surensemble de JavaScript qui ajoute des **types statiques**.

### **a) Types et Interfaces**
- **Types de base** : `string`, `number`, `boolean`, `null`, `undefined`, `void`, `never`, `any`, `unknown`
- **Types avancés** : `union (|)`, `intersection (&)`, `tuple`, `enum`
- **Interfaces vs Types** :  
  ```ts
  type Person = { name: string; age: number };
  interface Person { name: string; age: number; }
  ```
  
### **b) Classes et POO**
- Modificateurs d'accès : `public`, `private`, `protected`
- Héritage (`extends`), Interfaces (`implements`), Abstraction (`abstract`)
- Getters & Setters

### **c) Fonctions et Génériques**
- **Fonctions typées** :  
  ```ts
  function add(a: number, b: number): number { return a + b; }
  ```
- **Génériques** :  
  ```ts
  function identity<T>(arg: T): T { return arg; }
  ```
  
### **d) Gestion des Modules et Namespaces**
- Import/export de modules (`import { X } from 'module'`)
- Namespaces (`namespace X { export function Y() {} }`)

### **e) Manipulation des Types**
- `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`
- Type Inference et Assertion (`as`, `typeof`, `keyof`)

---

## **2. Structures de Données**
Elles servent à organiser et manipuler efficacement les données.

### **a) Structures Linéaires**
- **Tableaux (`Array<T>`)** : Accès O(1), Insertion/Suppression O(n)
- **Listes Chaînées (Linked List)** : Ajout/Suppression O(1) en tête
- **Pile (Stack)** : LIFO (`push()`, `pop()`)  
- **File (Queue)** : FIFO (`enqueue()`, `dequeue()`)
- **Deque (Double-ended Queue)** : Ajout/Suppression aux deux extrémités

### **b) Structures Hiérarchiques**
- **Arbres (Trees)** :
  - **Arbre Binaire de Recherche (BST)** : O(log n) en recherche/insertion
  - **Arbre AVL, Rouge-Noir** (équilibrés)  
  - **Trie (Préfixe)** pour les chaînes de caractères  
- **Graphes** :
  - Représentation : Listes d’adjacence ou Matrices
  - Parcours : **BFS (Largeur)**, **DFS (Profondeur)**

### **c) Structures de Hachage**
- **Tables de Hachage (HashMap/Set)** : Accès O(1) avec bonne fonction de hachage

---

## **3. Algorithmes de Base**
### **a) Tri et Recherche**
- **Tri Rapide (QuickSort)** : O(n log n)
- **Tri Fusion (MergeSort)** : O(n log n)
- **Tri à Bulles (BubbleSort)** : O(n²) (inefficace)
- **Recherche Linéaire** : O(n)
- **Recherche Dichotomique (Binary Search)** : O(log n) (nécessite un tableau trié)

### **b) Paradigmes d’Algorithmes**
- **Diviser pour Régner** (`MergeSort`, `QuickSort`, `Binary Search`)
- **Programmation Dynamique** (`Fibonacci`, `Knapsack`, `LCS`)
- **Glouton (Greedy)** (`Dijkstra`, `Prim`)
- **Retour sur trace (Backtracking)** (`N-Queens`, `Sudoku Solver`)
- **Parcours de Graphe** (`BFS`, `DFS`)

### **c) Algorithmes de Graphes**
- **Dijkstra** (chemin le plus court, O(V log V))
- **Bellman-Ford** (chemin avec poids négatifs)
- **Floyd-Warshall** (tous les plus courts chemins)
- **Kruskal / Prim** (arbres couvrants minimaux)

---
