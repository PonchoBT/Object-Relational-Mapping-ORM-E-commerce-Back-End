# Object-Relational Mapping (ORM) Challenge: E-commerce Back End
This project was developed using starter code to create a back-end application for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTUL API.

The schema.sql file in the db folder was run in MySQL Workbench to create the ecommerce_db and establish a connection with Insomnia Core through the command line interface (CLI). Once the database is created, the specific NPM packages are installed using npm i. MySQL2 and Sequelize packages to connect an Express.js API to a MySQL database, which utilizes the dotenv package to store sensitive environmental variables such as: username, password, and database name. npm run seed command migrates the data to MYSQL. A table is created out of the four objects located in the models folder: Product, Category, Tag, ProductTag.

With the node.js packages installed and database seeded without error, run NPM Start to start the server and connect to local host http://localhost:3001/. Then, an API GET request is performed for each route displaying in JSON format. All API POST, PUT, and DELETE routes are tested in Insomnia Core. I am able to successfully create, update, and delete data in my database.

### Starting the Application
To start the application, run:

`npm init`

`npm install`

`npm run start`

`npm install mysql2`

`npm run seed`

`npm install sequelize`

`npm install express`

`npm install dotenv`

`npm run start`

## Videos

The walkthrough video must demonstrate how to create the schema from the MySQL shell.

[View the video](https://drive.google.com/file/d/1inR-inYxTwuzHkEtVP8AL92sN5kJSqBT/view?usp=sharing)

The walkthrough video must demonstrate how to start the application’s server.

[View the video](https://drive.google.com/file/d/1g9SZ8xdJwkrad22luogQvA5psPMithYD/view?usp=sharing)

The following video shows the application’s GET, POST, PUT, and DELETE routes for CATEGORIES being tested in Insomnia Core:

[View the video](https://drive.google.com/file/d/1HUISYHhTUuHNwd3F28s0Qg90RnseZN64/view?usp=sharing)

The following video shows the application’s GET, POST, PUT, and DELETE routes for TAGS being tested in Insomnia Core:

[View the video](https://drive.google.com/file/d/19DlQf5GKGrF-YXsGD5TKo0_nmiOU6Q_u/view?usp=sharing)

The following video shows the application’s GET, POST, PUT, and DELETE routes for PRODUCTS being tested in Insomnia Core:

[View the video](https://drive.google.com/file/d/1b6TID9PtC7xOpN0PUp0Z1Hsqdo_V4SAp/view?usp=sharing)


### License
This project is licensed under the [PonchoBT.Dev](LICENSE).

