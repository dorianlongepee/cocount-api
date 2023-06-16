# Co'count API

Étant moins à l’aise avec les framework Node.js et pour la taille de ce projet, j’ai décidé de réaliser mon backend avec
mongoose, qui a l’avantage d’être rédigé rapidement et utilise les documents mongo, permettant de récupérer les donnes
rapidement.

Si l’application devait être continuée, une refactorisation pour passer en SQL serait judicieuse, en utilisant Nest.js
par exemple. Notamment dans l’optique où beaucoup plus de relations entre tables peuvent être crées.
La gestion des erreurs actuelle n'est pas optimisée et mériterait d'être revue.

## Installation

Prérequis:

- Installer [Node.js](https://nodejs.org/en/download/) (18.16.0+)
- Installer [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) puis lancer le service
  mongod (6.0.0+)

```bash
git clone git@github.com:dorianlongepee/cocount-api.git && cd cocount-api
```

```bash
npm i
```

## Lancement

Dupliquer le fichier `.env.example` et le renommer en `.env`. Remplir les variables d'environnement avec, par exemple,
les valeurs suivantes:

- `DATA_BASE_URL=mongodb://localhost:27017/cocount`
- `PORT=8080`

Compiler le TS

```bash
npm run dev
```

Lancer le serveur node dans un autre terminal/onglet
Attention, des fois, il crash et se relance en boucle (je n'ai pas trouvé pourquoi). Il faut alors drop la collection (facilement faisable avec MongoDB Compass) et relancer cette même commande.

```bash
npm run serve
```

Une fois que le serveur est lancé, vous pouvez observer ces trois lignes dans la console:

```bash
MongoDB Intialized
Express Intialized
Your server is ready on port 8080
```