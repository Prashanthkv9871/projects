import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const validate = (values: { confirm_password: string; username: string; email: string; password: string | any[] }) => {
  let errors: any = {};
  if (!values.username.trim) {
    errors.username = 'Username is required';
  }
  if (!values.email.trim) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.confirm_password.trim) {
    errors.confirm_password = 'Password is required';
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = 'password do not match';
  }
  return errors;
};

const SignUp = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post('/v1/api/user/signup', data)
      .then((res) => {
        if (res.status === 200) {
          reset();
          setSuccess('Registration is successful');
          window.alert('Registration is successful');
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setError('Some of the fields are missing or incorrect');
        } else if (error.response.status === 402) {
          setError('User Already Exists with the given email id');
        }
      });
    setError(validate(values as any));
  };

  return (
    <EditProfile>
      <ImageContainer>
        <Image>
          <img src="/assets/signup.svg" alt="home" height="100%" width="100%"></img>
        </Image>
        <Text>
          <h1>Untitled is the options analytics platform</h1>
          <h2>
            UNTITLED App is an options analytics app comprising of several tools that help to find, analyse and track options trading
            opportunities. Contact us.
          </h2>
        </Text>
      </ImageContainer>
      <LoginContainer>
        <h1>Sign up</h1>
        <h2>Satrt your 3-days free trail.</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input type="text" placeholder="username" {...register('username')} />
          {errors.username && <p>{errors.username}</p>}
          <br />
          <label>Email</label>
          <input type="email" placeholder="email" {...register('email')} />
          {errors.email && <p>{errors.email}</p>}
          <br />
          <label>password</label>
          <input type="password" placeholder="Password" {...register('password')} />
          <br />
          <label>Confirm password</label>
          <input type="password" placeholder="confirm_password" {...register('confirm_password')} />
          {errors.confirm_password && <p>{errors.confirm_password}</p>}
          <br />
          <label>Phone number</label>
          <input type="text" placeholder="phone_number" {...register('phone_number')} />
          {errors.phone_number && <p>{errors.phone_number}</p>}
          <br />
          <div>
            <p className="text-success fw-bold">{success}</p>
          </div>
          <div>
            <p className="text-danger fw-bold fs-5">{error}</p>
          </div>
          <input type="submit" value="Submit" />
          <Checkbox>
            <h2>Must be at least 8 characters</h2>
          </Checkbox>
        </form>
        <Button>
          <button>Sign in with google</button>
        </Button>
      </LoginContainer>
    </EditProfile>
  );
};
export default SignUp;