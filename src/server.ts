import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const url = process.env.BASE_URL

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${url}`);
});