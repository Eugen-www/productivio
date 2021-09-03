const isEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const defaultValidators = {
  email: isEmail,
};

export const errorMessagesClient = {
  email: 'Wrong email!',
  confirmPassword: 'Passwords must be the same!',
};
