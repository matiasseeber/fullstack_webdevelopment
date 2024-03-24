import app from "./src/app";
import authRouter from "./src/routers/auth";
import teddysRouter from "./src/routers/teddys";
import verifyToken from "./src/routers/verifyToken";

const port = process.env.PORT && +process.env.PORT || 8000;

app.use("/auth", authRouter);
app.use("/teddys", verifyToken, teddysRouter);

app.get("/", (req, res) => {
    res.send("Server alive...");
})

app.listen(port, () => console.log(`Server is running in port ${port}...`));