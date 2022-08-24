// create a login page in frontend/src/pages/auth/login.tsx using react-forms-hooks
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  }
  return (
    <LoginStyled>
      <div className="login__wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input type="text" {...register('email', { required: true })} />
          {errors.email && <p>Email is required</p>}
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <p>Password is required</p>}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </LoginStyled>
  );
}
export default Login;

const LoginStyled = Styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  .login__wrapper {
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
      width: 100%;
      max-width: 400px;
      input {
        width: 100%;
        max-width: 400px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        &:focus {
          outline: none;
          border: 1px solid #000;
        }
      }
      button {
        width: 100%;
        max-width: 400px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        &:focus {
          outline: none;
        }
      }
    }
    p {
      margin-top: 20px;
      a {
        color: white;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;