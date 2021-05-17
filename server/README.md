# Luxury server side take-home

- YARN
- NODEMON
- JAVASCRIPT EC6
- NODEJS
- EXPRESS
- EXPRESS APOLLO SERVER / GRAPHQL
- SQLITE
- SEQUELIZE
- DOTENV

## Install

```
yarn install
```

#### Run with nodemon DEV
```
yarn dev
```

#### TODO:

- Finish adding DB, mysql or postgress db.
- Filter data with sequelize commands over the model:
    Example:
    ```js
    const property = await Property.findByPk(1);
    if(property) return property

    return apiData
    ```
- Finish adding eslint + prettier
- Create more GraphQL queries/mutations (crud)



