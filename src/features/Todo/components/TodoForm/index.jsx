import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/FormControl/InputField';




TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
  }).required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data) => {
    console.log('Todo Form', data);
    const {onSubmit} = props
    if (onSubmit) {
      onSubmit(data);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {/* <InputField name="Firstname" label="Firstname" form={form} /><br></br> */}
      <InputField name="title" label="Todo" form={form} 
      />
    </form>
  );
}

export default TodoForm;
