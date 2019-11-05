import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://tiago:tiago@cluster0-1ac6l.mongodb.net/api-chart?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

export default mongoose;
