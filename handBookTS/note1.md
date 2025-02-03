# Suite Le Manuel TypeScript 

Tout comme les alias de types ci-dessus, l'exemple des interfaces fonctionne de la même façon qu'avec une annotation anonyme de propriétés. 
TypeScript vérifie uniquement la *structure* de la valeur transmise à `printCoord` - l'appel est valide du moment que l'objet possède les propriétés requises. 
Le fait de n'être concerné que par la *structure* et capacités des types permet de dire que TypeScript est un système *typé structurellement*.

### Différence entre les alias de types et interfaces 

Les alias de types et interfaces sont très similaires, et interchangeables la plupart des cas. La quasi-totalité des fonctionnalités d'une `interface` sont disponibles dans les `type`. 
La différence principale est le fait qu'un type ne peut pas être modifié pour y ajouter des propriétés, tandis qu'une interface est toujours extensible. 

