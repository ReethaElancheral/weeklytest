import React, { useState } from 'react';

export function withValidation(Component, validateFn) {
  return function WrappedComponent(props) {
    const [errors, setErrors] = useState({});

    const validate = (formData) => {
      const validationErrors = validateFn(formData);
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
    };

    return <Component {...props} validate={validate} errors={errors} />;
  };
}
