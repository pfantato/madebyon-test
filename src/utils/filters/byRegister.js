/**
 * A function that takes an object with a register property that has a date property.
 *
 * @param { register: { date } } - the object with register property that has a 'date' attribute
 * @returns true if the year of the register is between 2000 and 2010, otherwise it returns false.
 */
const byRegister = ({ registered: { date }}) => {
  try {
    const year = new Date(date).getFullYear();
    return year >= 2000 && year <= 2010;
  } catch {
    // If fails to convert the string to date, it will return false since isn't a valid date.
    return false;
  }
}

export default byRegister;