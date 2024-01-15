[![Netlify Status](https://api.netlify.com/api/v1/badges/424abd99-17c8-457f-8af3-ecb3ac553e0b/deploy-status)](https://subtle-kashata-b3a75c.netlify.app/)

# GitHub Search Interface

## To run the project locally

1. **Install Dependencies:**
   ```bash
   npm install
2. **Create Environment File:**
Create a .env file in the root directory using the provided .env.example file.
3. **Start the project:**
   ```bash
   npm run start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## If you make any changes to graphql schema/query
```bash
npm run gql:compile
```
or
```bash
npm run gql:watch
```
This will generate types for the graphql schema and queries.


## To open graphql playground
Open [http://localhost:3000/graphiql](http://localhost:3000/graphiql) to view it in the browser.


