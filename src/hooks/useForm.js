// This hook is a copy of a hook from "https://habr.com/ru/company/timeweb/blog/574000/", but i've decided to rewrite it for better understanding for me

import { useState, useEffect } from 'react';

const escapeAndTrim = (str) =>
  str
    .replace(/[<>&'"/]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

const isEmpty = (fields) => Object.values(fields).some((field) => !field);
const validate = (fields, validators, messages) => {
  const isValid = (key, value) =>
    (!validators[key] && !key.includes('confirm')) || // there is no any validator for this field and this is not a confirm field
    (validators[key] && validators[key](value)) || // make a validation if there is a validator
    (key.includes('confirm') && value === fields[key.replace('confirm', '').toLowerCase()]); // check value with confirm value
  return Object.entries(fields).reduce((errors, [key, value]) => {
    if (!isValid(key, value)) {
      errors[key] = messages[key] || true;
    }
    return errors;
  }, {});
};

const getRequiredField = (target) => {
  [...target.closest('form').querySelectorAll('input[required]')].reduce((obj, { name, value }) => {
    obj[name] = value;
    return obj;
  }, {});
};

const useForm = ({ initialData, apiMethod, validators, required = true, messages }) => {
  const [fields, setFields] = useState(initialData);
  const [requiredFields, setRequiredFields] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(initialData);
  console.log(fields);

  useEffect(() => {
    if (!required && requiredFields) {
      setDisabled(isEmpty(requiredFields));
    } else {
      console.log(isEmpty(fields));
      setDisabled(isEmpty(fields));
    }
  }, [required, fields, requiredFields]);

  const change = (e) => {
    if (!required && !requiredFields) {
      setRequiredFields(getRequiredField(e.target));
    }

    setResponse(null);
    setErrors(initialData);

    const { name, value } = e.target;

    if (requiredFields && requiredFields.hasOwnProrerty(name)) {
      setRequiredFields({ ...requiredFields, [name]: escapeAndTrim(value) });
    }

    setFields({ ...fields, [name]: escapeAndTrim(value) });
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validators) {
      const fieldsToValidate = requiredFields ? requiredFields : fields;
      const validationErrors = validate(fieldsToValidate, validators, messages);

      if (Object.keys(validationErrors).length > 0) {
        setLoading(false);
        return setErrors(validationErrors);
      }
    }

    const response = apiMethod(fields);
    setResponse(response);
    setLoading(false);
  };

  const reset = () => {
    setFields(initialData);
    setResponse(null);
    setErrors(initialData);
  };
  return { fields, change, submit, reset, disabled, loading, response, errors };
};

export default useForm;
