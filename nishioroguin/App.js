import { useState } from 'react';
import './App.css';
import db from "./firebase";



function App() {
  const texts = {username:"", password:""};
  const [formvalues, setFormvalues] = useState(texts);
  const [formErrors, setFormErrors] = useState({});
  const [submitOn, setsubmitOn] = useState(false);


  const handleChange = (e) => {
    //console.log(e.target.value);
    const {name, value} = e.target;
    setFormvalues({...formvalues, [name]: value});
    console.log(formvalues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setsubmitOn(true);
  };

  const validate = (values) => {
    const errors = {};
    if(!values.username){
      errors.username = "ユーザー名を入力してください";
    }
    if(!values.password){
      errors.password = "パスワードを入力してください";
    }

    return errors;
  };


  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログイン</h1>
        <hr />
        <div className='uiForm'>
          <div className='formField'>
            <label>UserName</label>
            <input 
             type='text'
             placeholder="UserName"
             name="username"
             onChange={(e) => handleChange(e)}
             />
          </div>
          <p className='errormsg'>{formErrors.username}</p>
          <div className='formField'>
            <label>Password</label>
            <input
             type='text' 
             placeholder="Password" 
             name="password" 
             onChange={(e) => handleChange(e)} 
             />
          </div>
          <p className='errormsg'>{formErrors.password}</p>
          <button className='submitButton'>Sign In</button>
          {Object.keys(formErrors).length === 0 && submitOn &&(
            alert('ログインしたよ')
          )}
        </div>

      </form>
 

    </div>
  );
}

export default App;