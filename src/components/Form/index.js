import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../Button/Button';
import { defaultValidators, errorMessagesClient } from './defaultValidators';
import Field from './Field';

const Form = ({ inputs, validators, messages, className, ...rest }) => {
  const hookProps = {
    ...rest,
    validators: { ...defaultValidators, ...validators },
    messages: { ...errorMessagesClient, ...messages },
  };
  const { fields, change, submit, disabled, loading, response, errors } = useForm(hookProps);
  if (loading) return <h1>loading</h1>;
  return (
    <form onSubmit={submit} className={className}>
      {inputs?.map((input, index) => (
        <Field
          key={index}
          value={fields[input.name]}
          onChange={change}
          error={errors[input.name]}
          {...input}
        />
      ))}
      <Button disabled={disabled} className={'button__form'}>
        Create account
      </Button>
    </form>
  );
};

export default Form;
