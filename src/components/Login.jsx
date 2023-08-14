import React, { useState } from 'react';
import { login } from '../Api';
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';

const fields = [
  {
    id: 'email',
    labelText: 'Email',
    labelFor: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
    placeholder: 'Enter your email',
  },
  {
    id: 'password',
    labelText: 'Password',
    labelFor: 'password',
    name: 'password',
    type: 'password',
    isRequired: true,
    placeholder: 'Enter your password',
  },
];

export default function Login({setAccessToken}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      localStorage.setItem('access_token', userData.access_token);
      console.log('Login successful!');

    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };


  return (
    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={(e) => {
              if (field.id === 'email') setEmail(e.target.value);
              else if (field.id === 'password') setPassword(e.target.value);
            }}
            value={field.id === 'email' ? email : password}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleLogin} text="Login" />
    </form>
  );
}
