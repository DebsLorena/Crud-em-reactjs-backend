import bcrypt from 'bcryptjs';

export const createPasswordHash = async (password) => {
    bcrypt.hash(password, 6);
}

// export const checkPassword = async (password) => {
//     // bcrypt.compare(password, user.password);
//     bcrypt.compare(password);
// }