import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    },
        {
            // data de criação e atualização do registro
            timestamps: true
        }
);
export default mongoose.model('User', userSchema);