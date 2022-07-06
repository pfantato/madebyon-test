/**
 * A function that takes two arguments, the first being an object with a name property, and
 * the second being a string. The function returns a boolean value.
 *
 * @param { name: { first, last } } - the object with name property that has 'first' and 'last' attributes.
 * @param filter - the filter string
 * @returns true if the filter matches the first or last name of the person
 */
const byName = ({ name }, filter) => {
  if(!filter || !name) return false;
  
  const { first, last } = name;
  const pattern = new RegExp(filter, 'g');
  
  return pattern.test(first) || pattern.test(last);
}