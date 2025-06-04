export const emptyObject = (obj) => {
  if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
    return true;
  }
  return false;
};

export const isValidScope = (scopes = [], validScopes) => {
  if (!scopes || !scopes.length) return false;

  const filteredScopes = [...scopes, 'ALL']?.filter((x) => validScopes?.includes(x));

  return !!filteredScopes.length;
};
