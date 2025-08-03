# TypeScript pour l'IA

### Pourquoi utiliser TypeScript pour l'IA ?

TypeScript, un sur-ensemble de JavaScript, apporte des avantages significatifs au développement de l'IA :

- **Typage Statique :** Il permet de définir des types pour vos variables, fonctions et structures de données. C'est crucial en IA pour manipuler correctement les tenseurs, les vecteurs et les données complexes, réduisant ainsi les erreurs à l'exécution.
- **Meilleure Organisation du Code :** Grâce aux classes, interfaces et modules, TypeScript aide à structurer des projets d'IA complexes de manière plus claire et maintenable.
- **Auto-complétion et Outillage :** Les éditeurs de code comme VS Code offrent une excellente auto-complétion, une navigation dans le code et une détection d'erreurs en temps réel, ce qui accélère le développement.
- **Écosystème JavaScript/Node.js :** Vous bénéficiez de l'immense écosystème de paquets npm et de la possibilité de déployer des modèles d'IA aussi bien côté client (navigateur) que côté serveur (Node.js).

---

### Les Concepts Fondamentaux en TypeScript pour l'IA

Avant de plonger dans les bibliothèques, voici quelques concepts de base en TypeScript qui sont essentiels pour l'IA :

- **Types de base :** La maîtrise des types comme `number`, `string`, `boolean`, `Array<T>` et `any` (à utiliser avec parcimonie) est fondamentale.

- **Interfaces et Types Personnalisés :** Ils sont parfaits pour définir la structure de vos données, par exemple, pour un jeu de données d'entraînement.

  ```typescript
  interface TrainingData {
    input: number[];
    output: number[];
  }
  ```

- **Classes :** Utiles pour encapsuler la logique de votre modèle ou de vos services d'IA.

  ```typescript
  class MyAIModel {
    private model: any; // Type specific to the library

    constructor(modelPath: string) {
      // Logic for loading the model
    }

    predict(data: number[]): any {
      // Prediction logic
    }
  }
  ```

- **Async/Await :** Le chargement de données, l'entraînement des modèles et les inférences sont souvent des opérations asynchrones. `async/await` simplifie grandement la gestion de ces tâches.

  ```typescript
  async function trainModel(data: TrainingData[]) {
    console.log("Starting training...");
    // Asynchronous training operations here
    console.log("Training complete!");
  }
  ```

---

### Bibliothèques d'IA Essentielles pour TypeScript

Voici les bibliothèques les plus importantes et les plus utilisées dans l'écosystème TypeScript/JavaScript pour l'IA.

### 1\. TensorFlow.js

C'est la bibliothèque la plus complète et la plus populaire pour le machine learning et le deep learning. Développée par Google, elle vous permet de :

- **Exécuter des modèles pré-entraînés** dans le navigateur ou en Node.js.
- **Ré-entraîner des modèles existants** avec vos propres données.
- **Créer et entraîner des modèles** de A à Z en utilisant une API de haut niveau (similaire à Keras).

**Exemple : Prédiction linéaire simple**

Cet exemple crée un modèle simple qui apprend la relation entre `x` et `y` (ici, `y = 2x - 1`).

```typescript
import * as tf from "@tensorflow/tfjs";

// 1. Define the model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// 2. Compile the model
model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// 3. Prepare the training data
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// 4. Train the model
async function train() {
  await model.fit(xs, ys, { epochs: 250 });
  console.log("Training complete!");

  // 5. Make a prediction
  const prediction = model.predict(tf.tensor2d([10], [1, 1])) as tf.Tensor;
  console.log(`Prediction for x=10: ${prediction.dataSync()}`); // Should be close to 19
}

train();
```

### 2\. Brain.js

**Brain.js** est une excellente bibliothèque pour débuter avec les réseaux de neurones. Elle se concentre sur la simplicité et la facilité d'utilisation, masquant une grande partie de la complexité mathématique.

**Exemple : Un simple classifieur de couleurs**

Cet exemple entraîne un réseau à choisir entre du texte noir ou blanc en fonction de la couleur de fond (représentée en RGB).

```typescript
import * as brain from "brain.js";

// Create a new neural network
const net = new brain.NeuralNetwork();

// Train the network with data
net.train([
  { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } }, // Green background -> Black text
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } }, // Dark background -> White text
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { black: 1 } }, // Light blue background -> Black text
]);

// Make a prediction
const output = net.run({ r: 1, g: 0.4, b: 0 }); // Orange background
console.log(output); // Should predict a high probability for 'black'
```

### 3\. Natural

Pour le **Traitement du Langage Naturel (NLP)**, `natural` est une bibliothèque très utile pour Node.js. Elle fournit des outils pour la tokenisation, la recherche de radical (stemming), la classification, l'analyse de sentiment, et plus encore.

**Exemple : Classification de texte (analyse de sentiment simple)**

```typescript
import { BayesClassifier } from "natural";

const classifier = new BayesClassifier();

// Train the classifier with documents
classifier.addDocument("I am very happy with this product", "positive");
classifier.addDocument("This movie was amazing", "positive");
classifier.addDocument("What horrible customer service", "negative");
classifier.addDocument("I really hate this", "negative");

classifier.train();

// Make a classification
const sentence = "The service was really good";
console.log(
  `The sentence "${sentence}" is classified as: ${classifier.classify(
    sentence
  )}`
);

const anotherSentence = "I am so disappointed";
console.log(
  `The sentence "${anotherSentence}" is classified as: ${classifier.classify(
    anotherSentence
  )}`
);
```

Pour démarrer un projet, vous devrez initialiser un projet Node.js (`npm init -y`), installer TypeScript (`npm install -g typescript`) et les bibliothèques nécessaires (ex: `npm install @tensorflow/tfjs @types/node`).

| Cas d’usage                               | Bibliothèque TypeScript / JS                                    | Description                                          |
| ----------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| **Machine Learning (local)**              | [`TensorFlow.js`](https://github.com/tensorflow/tfjs)           | Exécute des modèles ML dans le navigateur ou Node.js |
|                                           | [`Brain.js`](https://github.com/BrainJS/brain.js)               | Réseaux de neurones simples en JavaScript            |
|                                           | [`Synaptic`](https://github.com/cazala/synaptic)                | Réseau de neurones modulaire                         |
| **NLP**                                   | [`compromise`](https://github.com/spencermountain/compromise)   | Traitement du langage naturel léger                  |
|                                           | [`natural`](https://github.com/NaturalNode/natural)             | NLP traditionnel (stemming, tokenization, etc.)      |
| **Vision**                                | [`tracking.js`](https://github.com/eduardolundgren/tracking.js) | Détection d’objets et de visages dans le navigateur  |
| **IA symbolique / logique / algorithmes** | [`logicjs`](https://github.com/mcsoto/logicjs)                  | Programmation logique en JS                          |
| **Intégration IA (API)**                  | `openai`, `replicate`, `huggingface`, `gemini`                  | Intègre des modèles IA via API                       |

| Repo GitHub                                                                           | Description                                               | Tech utilisée            |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------ |
| [@tensorflow/tfjs-examples](https://github.com/tensorflow/tfjs-examples)              | Exemples de projets IA (image, texte, etc.) en TypeScript | TensorFlow\.js           |
| [ml5-examples](https://github.com/ml5js/ml5-examples)                                 | IA simple pour créateurs (image, texte, sons)             | ml5.js (sur TF.js)       |
| [Brain.js examples](https://github.com/BrainJS/brain.js#examples)                     | Classification, prédiction, training local simple         | Brain.js                 |
| [Visage détection + reconnaissance](https://github.com/justadudewhohacks/face-api.js) | Reconnaissance faciale dans le navigateur                 | face-api.js (TS support) |
| [nlp.js](https://github.com/axa-group/nlp.js)                                         | NLP multilingue pour bots, avec support TS                | NLP, Bot IA              |
| [gpt-openai-chat](https://github.com/akshaybahadur21/ChatGPT-TS)                      | Intégration d'OpenAI GPT avec TypeScript                  | API GPT, TS, UI intégrée |


En résumé, commencez par bien maîtriser les bases de TypeScript, puis explorez **TensorFlow.js** pour les applications de machine learning générales.
Si vous débutez avec les réseaux de neurones ou si vos besoins sont plus simples, **Brain.js** est un excellent point de départ.
Pour tout ce qui touche à l'analyse de texte, **Natural** est votre allié.
