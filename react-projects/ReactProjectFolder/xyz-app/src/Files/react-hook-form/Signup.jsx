import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null])
})


const Signup = () => {
    const {register,handleSubmit,formState : {errors}} = useForm({resolver: yupResolver(schema)});

const submitForm = (data)=>{ 
    console.log(data);
}

return <div style={{textAlign:"center"}}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)}>
          <input name="firstName" placeholder='First Name' {...register("firstName")}/> 
          <p>{errors.firstName?.message}</p>
          <input name="lastName" placeholder='Last Name' {...register("lastName")}/> 
          <p>{errors.lastName?.message}</p>
          <input name='email' placeholder='Email' {...register("email")}/>
          <p>{errors.email?.message}</p>
          <input name="age" placeholder='Age' {...register("age")}/>  
          <p>{errors.age?.message}</p>
          <input type="password" name="password" placeholder="Password" {...register("password")}/> 
          <p>{errors.password?.message}</p>
          <input type="password" name='confirmPassword' placeholder='Confirm password' {...register("confirmPassword")}/>  <p>{errors.confirmPassword && "Passwor Should Match !"}</p>
          <input type="submit" value="Submit"/> 
      </form>
  </div>;
};

export default Signup;
