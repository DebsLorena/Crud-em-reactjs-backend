import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
            // unique = unico
            unique: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        // data de criação e atualização do registro
        timestamps: true
    }
);
export default mongoose.model('Repository', repositorySchema);