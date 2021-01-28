import { useState, useEffect } from "react";
import {useAppContext} from "../contexts/state.js"
import fetch from "isomorphic-fetch"

const SmallForm = () => {

  const {addClick} = useAppContext()

  const onClick = (e) => {
    submitForm(form);
    addClick({loc:`Small Form Btn`, time: `${(new Date()).getTime()}`})
    clearAll();
  };



  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
   
    });
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const clearAll = () => {
    setForm({
      fullName: "",
      email: "",
    });
  };

  const submitForm = (form) => {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {
      res.status === 200 ? console.log('22 skadoo') : ''
    })
  }


  const { fullName, email } = form;

  return (
    <div style={{ width: "100vw" }}>
      <form className='navbar' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='fullName'
          value={fullName}
          onChange={onChange}
          style={{ width: "33%", borderRadius: "5px" }}
        />
        <input
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
          style={{ width: "33%", borderRadius: "5px" }}
        />
        <button
          onClick={onClick}
          className='btn btn-success btn-sm'
          style={{ width: "25%", borderRadius: "5px" }}>
          Lets Get Started!
        </button>
      </form>
    </div>
  );
};

export default SmallForm;
