import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useAuthContext } from 'src/auth/hooks';

function ScopeValidation({ validScopes = [], element }) {
  const { user } = useAuthContext();
  const { scopes } = user || {};

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (validScopes.includes('ALL')) {
      setValid(true);
      return;
    }

    let temp = false;
    validScopes.forEach((x) => {
      if (scopes?.includes(x)) temp = true;
    });
    setValid(temp);
  }, [scopes, validScopes]);

  if (!valid) return null;

  return element;
}

export default ScopeValidation;

ScopeValidation.propTypes = {
  validScopes: PropTypes.array,
  element: PropTypes.node,
};
