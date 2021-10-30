const getKey = () => localStorage.getItem('KEY');
const setKey = () => localStorage.setItem('KEY', 'SECRET_KEY');
const removeKey = () => localStorage.removeItem('KEY');
const sort = (arr, key) =>
  arr.sort((a, b) =>
    a[key].toLowerCase() > b[key].toLowerCase()
      ? 1
      : b[key].toLowerCase() > a[key].toLowerCase()
      ? -1
      : 0
  );

export { getKey, setKey, removeKey, sort };
