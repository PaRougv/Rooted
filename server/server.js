import { ENV } from "./src/config/env.js";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

app.listen(ENV.PORT , () => {
    connectDB()
    console.log(`Server running on PORT: ${ENV.PORT}`)
})