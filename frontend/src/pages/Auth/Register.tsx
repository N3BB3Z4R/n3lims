// create a register page in frontend/src/pages/auth/login.tsx using react-forms-hooks
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
  confirmationPassword: string;
}

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const passwordRef = useRef<HTMLInputElement>(null);
  const onSubmit = (data: FormData) => {
    console.log(data);
  }
  return (
    <RegisterStyled>
      <div className="register__wrapper">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <p>Email is required</p>}
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <p>Password is required</p>}
          <label htmlFor="confirmation-password">Confirm Password</label>
          <input type="password" {...register('confirmationPassword', { required: true })} />
          {errors.password && <p>Password doesn't Match</p>}
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </RegisterStyled>
  );
}
export default Register;

const RegisterStyled = Styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  .register__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;