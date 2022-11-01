/* You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric) */

const passwordChecker = (password) => {
  if (password.length <= 5) return false;

  return hasCapital(password);
};

const hasCapital = (s) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/.test(s);

console.log(passwordChecker("djI38D55@@"));
