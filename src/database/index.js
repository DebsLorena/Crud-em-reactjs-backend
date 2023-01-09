import mongoose from "mongoose";
import config from "../config/database";


// arquivo que faz a conexão com o mongoose
class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                // configurações do mongoose
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    };
};

export default new Database();