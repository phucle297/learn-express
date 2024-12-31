import { app } from "./app";
import { dataSource } from "./infrastructure/datasource/datasource";

const HOST = "localhost";
const PORT = 3000;

app.listen(PORT, () => {
  dataSource
    .initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
  console.log(`app listening on port ${PORT}`);
});
