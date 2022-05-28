# DansMultiProTest

## to running the apps
 
1. npm install di folder server
2. npx sequelize-cli db:seed:all , untuk seeding data user
3. run node app.js at server folder 
4. run npm start on client folder
5. npm install di folder client
6. login username: admin password: 12345


## spec of code

1. design patern yang digunakan mvc
2. database yang digunakan sql dengan orm sequelize
3. diserver terdapat folder routes untuk mengetahui semua rest API yang tersedia
4. pada frontend menggunakan state management redux , terdapat reducer dan action
5. action digunakan untuk meng-hit rest api