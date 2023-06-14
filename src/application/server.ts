import express from "express";
import { PORT } from "../config/config";

class initServer {
    private app;

    constructor() {
        this.app = express();
    }

    listenServer() {
        this.app.listen(PORT, () => {
            console.log(`Server running in port: ${PORT}`)
        })
    }
}

export default new initServer();