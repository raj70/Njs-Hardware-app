import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    postcode: String,
    country: String
});

userSchema.set('timestamps', true);

userSchema.statics.passwordMatches = function (password, hash) {
    return bcrypt.compareSync(password, hash);
}

userSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    const unsafepassword = this.password;
    this.password = bcrypt.hashSync(unsafepassword);
    next();
});

export default mongoose.model('user', userSchema);