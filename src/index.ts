import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";

import router from "./route/Chart";

mongoose
  .connect(
    "mongodb+srv://tiago:tiago@cluster0-1ac6l.mongodb.net/api-chart?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use("/chord", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Funcionando");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
