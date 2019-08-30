# Curso UTN
# Materia: TTADS 2019 

# Stackblits - angular-de3rtg

[Editar aplicacion en StackBlitz ⚡️](https://stackblitz.com/edit/angular-de3rtg)

# Plantilla README

[Modelo de plantilla para hacer un buen README ⚡️](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)


# Preparación del entorno de desarrollo 🛠️

Software necesario:
* **Node.js v10.16.3**
  * Bluebird
  * Async
  * Body Parser
  * Express 
  * Nodemon v1.18.11
  * Mongoose
* **Node Package Name NPM v6.9.0**
* **MongoDB v4**
  * Compass
  * MongoDB Shell
  * MongoDB Server
* **Angular v8.2.2**
  * Angular Local Storage
  * Angular Google Maps
* **Bootstrap v4**


# Node 🚀

* [Pagina Oficial ️️️️️⚡️](https://nodejs.org/es/) - Framework Node

## [Instalar con CURL ⚡️](https://github.com/nodesource/distributions#debinstall) 🔧

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
# NPM 🚀

```
sudo apt-get install npm
```

# Angular 🚀

[Pagina Oficial ⚡️](https://angular.io/start) - Framework front-end
## Agregar Angular como dependencia al proyecto 🔧

```
npm install -g @angular/cli
```

## Crear proyecto y desplegarlo
```
ng new my-app
cd my-app
ng serve –open 
```
	_The --open (or just -o) option automatically opens your browser to http://localhost:4200/._


### Agregar un nuevo componente de "heroes" en angular 🔧
```
ng generate component heroes
```

# MongoDB 🚀

* [Pagina Oficial ⚡️](https://www.mongodb.com/es) - Base de Datos mongodb

## Mongo Daemon 🔧
```
mongod --dbpath /data/db --logpath /data/log/mongod.log --fork --replSet "M103" --keyFile /data/keyfile --bind_ip "127.0.0.1,192.168.0.100" --sslMode requireSSL --sslCAFile "/etc/ssl/SSLCA.pem" --sslPEMKeyFile "/etc/ssl/ssl.pem"
```

## Mongo Database 🔧

```
mongo --username m001-student --password m001-mongodb-basics
```

_At cluster mongodb://cluster0-shard-00-..._
```
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
```

_Object JSON example in MongoDB_

```
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}
```
## Autores 

* **Nicolas Mateucci** - *Trabajo Inicial* - [Github oficial ⚡️](https://github.com/nicomateucci)

--------------------------------------------------------

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

🚀 📋 📦 🛠️ 📄 🎁 📢 🍺 🤓 🔧