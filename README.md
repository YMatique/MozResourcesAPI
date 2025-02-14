# MozResourcesAPI

Repository to get informations about Mozambique
MozResourcesAPI is an application programming interface (API) that provides detailed information about the provinces, districts, cities, and natural resources of Mozambique.
The API is designed to facilitate the access and integration of geographic, economic, and social data of Mozambique into your applications.
It's ideal for developers, researchers, and professionals who need accurate and up-to-date information about the country.

# Stacks

## Express

`npm install express`

## TypeScript

`npm install --save-dev typescript @types/node @types/express ts-node nodemon`

## Prisma ORM

`npm install @prisma/client`
` npm install prisma --save-dev`

### Setting prisma ORM

`npx prisma init` <br> <br>
On .env file
`DATABASE_URL="sqlite:./dev.db"` for SQLite database <br>
or `DATABASE_URL="mysql://user:password@localhost:5432/mydatabase?schema=public"` for MySQL database<br> <br>
Migrations <br>
`npx prisma migrate dev --name init` <br> <br>
Prisma Client <br>
`npx prisma generate`
