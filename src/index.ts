import app from "./app";
import { PORT } from "./env";


app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
})