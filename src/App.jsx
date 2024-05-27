import { React, useState, useEffect } from "react";
import "./App.css";
import * as Yup from "yup";

function App() {
  const [errors, setErrors] = useState("");
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });
  let userSchema = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phoneNumber: Yup.string()
      .min(10, "Phone number should be minimum 10 digits")
      .max(10, "Phone number should be maximum 10 digits")
      .required("phoneNumber is required"),
    password: Yup.string()
      .min(8, "minimum 8 characters required")
      .max(10, "maximum 10 characters required")
      .matches(/[A-Z]/,'Password must contain one Uppercase character')
      .matches(/[a-z]/,'Password must contain one Lowercase character')
      .matches(/[0-9]/,'Password must contain one Number')
      .matches(/[$&+,:;=?@#|'<>.-^*()%!]/,'Password must contain one Number')
      .required("Password is required"),
      confirmPassword: Yup.string()
      .min(8, "minimum 8 characters required")
      .max(10, "maximum 10 characters required")
      .matches(/[A-Z]/,' Confirm Password must contain one Uppercase character')
      .matches(/[a-z]/,' Confirm Password must contain one Lowercase character')
      .matches(/[0-9]/,' Confirm Password must contain one Number')
      .matches(/[$&+,:;=?@#|'<>.-^*()%!]/,'Confirm Password must contain one Number')
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password')], 'Passwords must match'),

      age: Yup.number()
      .transform(value => (isNaN(value) ? undefined : value))
      .min(18, 'Age must be above 18')
      .max(100, 'Age must be less than 100')
      .required('Age is required'),
      gender:Yup.string().required('Gender is required'),
      interests:Yup.array().min(1,"Select at least one interest").required('Select at least one interest'),
      birthDate: Yup.date()
      .transform(value => (isNaN(Date.parse(value)) ? undefined : value))
      .required('Birth Date is required')
  });

  let handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
       await userSchema.validate(formdata,{abortEarly:false});
       console.log(formdata)
       alert('Form submitted successfully ')
       setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
      })
       
    }catch(error){
      console.log(error.inner);
      let newErr = {}
      error.inner.map((err)=>{
        newErr[err.path] = err.message

      })
      console.log(newErr)
      setErrors(newErr)
    }
  };
  let handleOnChange = (e) => {
    
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  let handleCheck = (e) => {
   
    if (e.target.checked) {
      let copyInterest = [...formdata.interests];
      copyInterest.push(e.target.id);
      setFormData({ ...formdata, interests: copyInterest });
    } else {
      let copyInterest = [...formdata.interests];
      let filteredInterest = copyInterest.filter((item) => {
        return item != e.target.id;
      });
      setFormData({ ...formdata, interests: filteredInterest });
    }
  };

  return (
    <>
      {/*https://www.youtube.com/watch?v=9rp_1TYDlkY*/}
      <form
        onSubmit={handleSubmit}
        className="p-5 d-flex flex-column align-items-center"
      >
        <div>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name "
            value={formdata.firstName}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.firstName}
          </div>
          
        </div>

        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name "
            value={formdata.lastName}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.lastName}
          </div>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email "
            value={formdata.email}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.email}
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phoneNumber "
            value={formdata.phoneNumber}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.phoneNumber}
          </div>
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password "
            value={formdata.password}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.password}
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter your Password again"
            value={formdata.confirmPassword}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.confirmPassword}
          </div>
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            min={0}
            name="age"
            id="age"
            placeholder="Enter your age "
            value={formdata.age}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.age}
          </div>
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <select
            name="gender"
            id="gender"
            value={formdata.gender}
            onChange={(e) => handleOnChange(e)}
          >
            <option value=" ">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <div className="errors">
          {errors.gender}
          </div>
        </div>
        <div>
          <label htmlFor="birthDate">birthDate</label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            value={formdata.birthDate}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="errors">
          {errors.birthDate}
          </div>
        </div>

        <div>
          {/*checked={formdata.interests.includes('reading')}*/}
          <label>Interest</label>
          <br />
          <label htmlFor="coding" className="me-1">
            coding
          </label>
          <input
            type="checkbox"
            id="coding"
            className="me-3"
            name="coding"
            onChange={(e) => handleCheck(e)}
          />

          <label htmlFor="sports" className="me-1">
            sports
          </label>
          <input
            type="checkbox"
            id="sports"
            className="me-3"
            name="sports"
            onChange={(e) => handleCheck(e)}
          />

          <label htmlFor="reading" className="me-1">
            reading
          </label>
          <input
            type="checkbox"
            id="reading"
            className="me-3"
            name="reading"
            onChange={(e) => handleCheck(e)}
          />
          <div className="errors">
          {errors.interests}
          </div>
        </div>

        <div>
          <button className="btn btn-lg btn-success px-5" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
