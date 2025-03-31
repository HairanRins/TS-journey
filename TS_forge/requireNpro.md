# Key Pro

Si tu veux maîtriser TypeScript, JavaScript et MongoDB à un niveau professionnel, 
voici une liste des concepts essentiels avec explications, exemples et cas d’usage en entreprise.

---

## **1. TypeScript - Concepts avancés et pratiques en entreprise**
### **a. Typage avancé**
#### **Explication**  
TypeScript offre un typage statique qui améliore la sécurité du code et la maintenabilité.

#### **Exemples**
```typescript
type User = {
  id: string;
  name: string;
  role: "admin" | "user";
};

function getUserInfo(user: User): string {
  return `User: ${user.name}, Role: ${user.role}`;
}
```

#### **Cas d’usage en entreprise**
- Validation stricte des objets renvoyés par les API.
- Réduction des erreurs en phase de développement.
- Documentation implicite du code.

---

### **b. Interfaces et Types Utilitaires**
#### **Explication**
Les interfaces permettent de structurer les données, et les types utilitaires facilitent leur manipulation.

#### **Exemples**
```typescript
interface User {
  id: string;
  name: string;
  email?: string; // Optionnel
}

// Type utilitaire Partial<T>
const updateUser = (user: Partial<User>) => {
  console.log("Updated user:", user);
};
```

#### **Cas d’usage en entreprise**
- Contrôle des formats de données en entrée et sortie.
- Réutilisation des structures de données.

---

### **c. Génériques (Generics)**
#### **Explication**
Les génériques permettent d’écrire du code réutilisable avec des types flexibles.

#### **Exemples**
```typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numbers = wrapInArray<number>(5); // [5]
const texts = wrapInArray<string>("Hello"); // ["Hello"]
```

#### **Cas d’usage en entreprise**
- Création de composants ou services réutilisables.
- Manipulation de données sans sacrifier le typage.

---

### **d. Programmation orientée objet (POO) en TypeScript**
#### **Explication**
TypeScript supporte les classes, l’héritage et les interfaces.

#### **Exemples**
```typescript
abstract class Employee {
  constructor(public name: string, public salary: number) {}
  abstract getRole(): string;
}

class Developer extends Employee {
  getRole(): string {
    return "Developer";
  }
}

const dev = new Developer("Alice", 60000);
console.log(dev.getRole()); // "Developer"
```

#### **Cas d’usage en entreprise**
- Architecture de code modulaire et évolutive.
- Gestion des permissions et des rôles utilisateur.

---

## **2. JavaScript - Concepts avancés**
### **a. Closure et portée lexicale**
#### **Explication**
Une closure est une fonction qui "mémorise" son environnement lexical.

#### **Exemples**
```javascript
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

#### **Cas d’usage en entreprise**
- Encapsulation de logique métier sans exposer de variables globales.
- Gestion des états dans des composants React.

---

### **b. Programmation asynchrone et Promesses**
#### **Explication**
JavaScript est basé sur un modèle asynchrone non bloquant.

#### **Exemples**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur de récupération :", error);
  }
}
```

#### **Cas d’usage en entreprise**
- Requêtes API en front-end et back-end.
- Exécution parallèle des tâches (traitement d’images, requêtes BDD).

---

### **c. Design Patterns en JavaScript**
1. **Singleton**
   - Un seul et même objet est utilisé dans toute l’application.
   ```javascript
   class Singleton {
     static instance;
     constructor() {
       if (!Singleton.instance) {
         Singleton.instance = this;
       }
       return Singleton.instance;
     }
   }
   const s1 = new Singleton();
   const s2 = new Singleton();
   console.log(s1 === s2); // true
   ```

2. **Factory Pattern**
   ```javascript
   class User {
     constructor(name, role) {
       this.name = name;
       this.role = role;
     }
   }

   function createUser(name, role) {
     return new User(name, role);
   }
   ```

#### **Cas d’usage en entreprise**
- Gestion des instances uniques (Logger, connexion DB).
- Création dynamique d’objets.

---

## **3. MongoDB - Concepts clés**
### **a. Modélisation des données**
#### **Explication**
MongoDB est une base de données NoSQL qui stocke les données en format JSON (BSON).

#### **Exemples**
```json
{
  "_id": "613b1a2f...",
  "name": "Alice",
  "email": "alice@example.com",
  "orders": [
    { "product": "Laptop", "price": 1200 },
    { "product": "Mouse", "price": 30 }
  ]
}
```

#### **Cas d’usage en entreprise**
- Stockage flexible pour des applications évolutives.
- Optimisation des relations entre entités.

---

### **b. Indexation pour performance**
#### **Explication**
Les index accélèrent les requêtes de recherche.

#### **Exemples**
```javascript
db.users.createIndex({ email: 1 });
```

#### **Cas d’usage en entreprise**
- Amélioration de la rapidité des requêtes sur des collections volumineuses.

---

### **c. Agrégation de données**
#### **Explication**
MongoDB offre un puissant pipeline d’agrégation.

#### **Exemples**
```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
]);
```

#### **Cas d’usage en entreprise**
- Génération de rapports et dashboards.
- Statistiques en temps réel.

---

## **Conclusion**
Pour un usage professionnel en entreprise, il est crucial de maîtriser :
1. **TypeScript** pour la robustesse du code.
2. **JavaScript avancé** pour la performance et l’architecture.
3. **MongoDB** pour une gestion efficace des données.

Chaque concept abordé est directement applicable aux applications modernes : SaaS, e-commerce, CRM, etc.
