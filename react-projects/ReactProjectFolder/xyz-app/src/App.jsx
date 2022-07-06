import React from 'react'
import { useFormik } from 'formik'
import "./App.css";
import Download from "./Download";

const App = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        onSubmit:(values)=>
        console.log("form Submit",values),
        validate:(values)=>{
            let errors={}
            if(!values.name){
                errors.name="Name required"
            }

            if(!values.email){
                errors.email="Email required"
            }

            if(!values.password){
                errors.password="Password required"
            }
            return errors;
        }

    })
    //console.log('form values',formik.values);
    return (
        <div>
            <Download/>
            <center>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <label>Name</label><br/>
                <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} /> 
                {formik.errors.name?<div>{formik.errors.name}</div>:null} <br/><br/>

                <label>Email</label> <br/>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email?<div>{formik.errors.email}</div>:null}<br/><br/>


                <label>Password</label><br/>
                <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password?<div>{formik.errors.password}</div>:null}<br/><br/>

                <button type="submit">Register</button>
                
            </form>
            </center>
        </div>
    )
}

export default App;
