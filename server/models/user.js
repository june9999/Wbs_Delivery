const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, 'username is Required!'] },
    email: { type: String, unique: true, required: [true, 'email is Required!'] },
    password: {
      type: String,
      minLength: [8, 'Password Must Be 8 characters or more!'],
      required: [true, 'Book Year is Required!'],
    },
  },
  {
    timestamps: true,
  },
);

userSchema
  .virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set(value => (this._confirmPassword = value));

userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password need to match!');
  }
  next();
});
userSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 6);
    console.log('🚀 ~ file: user.js:32 ~ hashedPassword:', hashedPassword);
    console.log('PASSWORD', this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log('HASHING ERROR!!', error);
  }
});

const model = mongoose.model('User', userSchema);
module.exports = model;
