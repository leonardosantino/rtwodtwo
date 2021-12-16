import { createConnection } from "typeorm";

createConnection({
    type: "sqlite",
    database: "src/database/database.sqlite",
    entities: [
        "src/entity/*.ts"
    ],
    synchronize: true,
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));