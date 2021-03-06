// Author: Veda
const express= require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://assesmentDB:assesmentDB@cluster0.u88ek.mongodb.net/I-LMS?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use("/",require("./routes/routes"))


app.listen(3001, function() {
    console.log("express server is running on port 3001");
})
