import express from "express";
import { PORT } from "../../config/config";

class initServer {
    private app;

    constructor() {
        this.app = express();
    }

    listenServer() {
        try {
            this.app.listen(PORT, () => {
                console.log(`Server running in port: ${PORT}`)
            })
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new initServer();