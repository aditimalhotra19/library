import React, { useState } from 'react';
import './login.css';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
 
  // handle login button click
  const handleLogin = () => {
    if((username.value === '' || password.value === '')) {
      setError("Username or password cannot be left blank.");
    } else if (username.value === 'user' && password.value === 'user'){
      props.history.push('/search');
    } else if (username.value === 'master' && password.value === 'master') {
      props.history.push('/dashboard');
    } else {
      setError("Invalid username/password. Please try again.");
    }
  }
 
  return (
    <div>
      Login form
      <form className="login-form">
      <div>
        Username
        <input type="text" {...username} autoComplete="username" className="username"/>
      </div>
      <div>
        Password
        <input type="password" {...password} autoComplete="password" className="password"/>
      </div>
      <input type="button" value="Login" onClick={handleLogin}/>
      {error && <><p className="error">{error}</p><br /></>}<br />
      </form>
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;