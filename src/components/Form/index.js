import React from 'react';
import useForm from '../../hooks/useForm';
import { defaultValidators, errorMessagesClient } from './defaultValidators';
import Field from './Field';

const Form = ({ inputs, validators, messages, ...rest }) => {
  const hookProps = {
    ...rest,
    validators: { ...defaultValidators, ...validators },
    messages: { ...errorMessagesClient, ...messages },
  };
  const { fields, change, submit, reset, disabled, loading, response, errors } = useForm(hookProps);
  return (
    <form onSubmit={submit}>
      {inputs?.map((input, index) => (
        <Field
          key={index}
          value={fields[input.name]}
          onChange={change}
          error={errors[input.name]}
          {...input}
        />
      ))}
      <button disabled={disabled}>SEND</button>
    </form>
  );
};

export default Form;
