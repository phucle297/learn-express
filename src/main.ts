import { app } from "./app";

const HOST = "localhost";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
