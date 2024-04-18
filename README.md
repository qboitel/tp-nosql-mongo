## Lancement du script

Pour lancer le script, il faut au préalable avoir 3 instances MongoDB lancées chacun sur un port différent, avec pour les ports les valeurs 27017, 27018 et 27019.

Vous pouvez aussi vous aider du fichier compose.yml qui permet grâce à Docker de lancer les 3 instances MongoDB nécessaires.

Pour lancer le script, il vous suffit d'installer les dépendances :

```bash
$ npm install
```

Puis ensuite de lancer l'exécution avec la commande suivante :

```bash
$ node index.js
```

Bien entendu, il faudra disposer de NodeJS et de npm sur la machine


## Résultats commandes CLI

### Création

La commande lancée en CLI pour créer un utilisateur est la suivante :

```
db.users.insert( {name: 'test', age: 21, email: 'test@test.com', createdAt: new Date()} ) 
```

La résulat est le suivant :
```
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('66214949b146921193166a61') }
}
```

### Lecture

Pour récupérer tous les documents, qui ont un age supérieur à 30, on utilise la commande suivante :

```
db.users.find({age: {$gt: 30}})
```

La commande nous retourne alors la liste des documents avec un age supérieur à 30 (en voici une petite partie) :
```
[
  {
    _id: ObjectId('66069fd4869d895908b53e85'),
    name: 'Glenda',
    age: 33,
    email: 'Marjolaine.Anderson@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e89'),
    name: 'Felipa',
    age: 32,
    email: 'Casey98@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e8a'),
    name: 'Kieran',
    age: 41,
    email: 'Meda_Spencer@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e8b'),
    name: 'Ariel',
    age: 48,
    email: 'Caleigh7@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e8c'),
    name: 'Candace',
    age: 37,
    email: 'Efren_Bahringer48@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e8e'),
    name: 'Jaylin',
    age: 35,
    email: 'Eliane30@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e8f'),
    name: 'Clifton',
    age: 60,
    email: 'Maymie59@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.958Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e90'),
    name: 'Oren',
    age: 38,
    email: 'Nathanael_Davis49@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e91'),
    name: 'Sheila',
    age: 37,
    email: 'Bert_Wolf@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e94'),
    name: 'Alexie',
    age: 44,
    email: 'Randy1@hotmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e95'),
    name: 'Cordelia',
    age: 60,
    email: 'Adelle86@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e96'),
    name: 'Cassandre',
    age: 36,
    email: 'Godfrey.Dickens63@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e97'),
    name: 'Alexandria',
    age: 52,
    email: 'Bernice_Gerhold@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e98'),
    name: 'Velma',
    age: 43,
    email: 'Dave37@hotmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e9a'),
    name: 'Chanel',
    age: 47,
    email: 'Misty_Hagenes@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e9c'),
    name: 'Jaquelin',
    age: 56,
    email: 'Dixie_Barton@yahoo.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e9d'),
    name: 'Hollie',
    age: 42,
    email: 'Ova.Hackett@hotmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e9e'),
    name: 'Jess',
    age: 59,
    email: 'Maudie_Wehner9@gmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53e9f'),
    name: 'Caden',
    age: 45,
    email: 'Leopold37@hotmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  },
  {
    _id: ObjectId('66069fd4869d895908b53ea0'),
    name: 'Lisandro',
    age: 60,
    email: 'Hillary_Hilpert87@hotmail.com',
    createdAt: ISODate('2024-03-29T11:02:44.959Z')
  }
]
```

### Mise à jour

Pour mettre à jour l'age de tous les documents, on utilise la commande suivante :

```
db.users.updateMany({},{ $inc: { age: 5 } })
```

La commande nous renvoie le résultat suivant :
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 400,
  modifiedCount: 400,
  upsertedCount: 0
}
```

### Suppression

La commande pour supprimer un document en particulier est la suivante :
```
db.users.deleteOne({_id: ObjectId('66069fd4869d895908b53e85')})
```

Le résulat est :
```
{ acknowledged: true, deletedCount: 1 }
```