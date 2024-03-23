import app from "./src/app";
import authRouter from "./src/routers/auth";

const port = process.env.PORT && +process.env.PORT || 8000;

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Server alive...");
})

app.listen(port, () => console.log(`Server is running in port ${port}...`));