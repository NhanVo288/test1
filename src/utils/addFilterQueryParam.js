const addFilterQueryParam = (name, value) => (value ? `${name}=${value}` : '');

export default addFilterQueryParam;
