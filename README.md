# Awesome Parking

[![N|Solid](https://codemoto.io/wp-content/themes/cloudhost/library/images/node-express-mongo.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Awesome parking é uma API simples em formato REST constrída com Node.js, express e mongoDB .

# Por quê Node.js, mongoDB and Express ?!

  - Node utiliza JavaScript no lado servidor, permite(mas não somente) a criação de api's que possam ser consumidas tanto em aplições para web quanto para mobile;
  - Mongo é o banco de dados não relacional mais performático para api's REST simples que normalmente contém apenas um CRUD(create-read-update-delete);
  - Express é um microframework node.js, não limitado pela palavra "micro", que permite a criação de um servidor com muito mais agilidade e praticidade.

 ## MongoDB
 
 Nesta API foi utilizado o docker como forma de trabalhar com o Mongo, portanto considere esta opção. Segue abaixo as instruções para uso do mongoDB com Docker, uma vez que você possui o mesmo instalado em sua máquina.


```ssh
$ sudo docker pull mongo
ou 
$ docker pull mongo
```
E então 
```ssh
$ docker run --name mongodb -p 27017:27017 -d mongo
```
- O atributo --name especifica o nome do container a ser gerado (mongodb);
- O atributo -p permite configurar a porta (27017) em que acontecerá a comunicação com o MongoDB, a qual será mapeada para a porta default (27017) deste NoSQL dentro do container;
- Quanto ao atributo -d, este parâmetro fará com que o container em questão seja executado como um serviço em background;
- Temos indicada ainda a imagem utilizada como base para a geração do container (mongo).
 
Se tudo correu bem na criação da imagem do mongo basta agora você usar o seguinte comando.
```ssh
$ sudo docker start mongodb
```
no caso, utilizei "start mongodb" pois mongodb é o nome da imagem, como mencionado acima, caso você utilizou outro nome, basta uslá-lo no lugar de mongodb.

> Além disso Recomento o uso do Robo3T que é uma ferramenta gráfica excelente 
> para que você consiga visulizar melhor os registros criados no banco.

