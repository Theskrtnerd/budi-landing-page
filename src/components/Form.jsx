// BasicExampleForm.js
// Create a fully operational form.
import React from 'react'
import ReactDOM from 'react-dom'
import Form, {
  Input,
  Select,
  FormButton,
} from 'react-form-component'

const BasicExampleForm = () =>
  <Form fields={['name', 'email', 'type']}>
    <Input
      name='name'
      label='User name'
    />
    <Input
      name='email'
      type='email'
      label='E-mail'
    />
    <Select
      name='type'
      label='Type of a user'
      options={['Viewer', 'Moderator', 'Admin']}
    />
    <FormButton
      onClick={fields => console.log(fields)}
    >Save</FormButton>
  </Form>

export default BasicExampleForm