import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [msg, setMsg] = useState('')

  const submit = (e) => {

    e.preventDefault();

    let count = 0;

    [...email].forEach(c => {
        count += 1;
    });
    

    const isValidEmail = count === 1;
    const isValidPassword = password.length >= 8;
    const isValidPassowrdConfirm = password === passwordConfirm;

    const isValid = isValidEmail && isValidPassword && isValidPassowrdConfirm;
    
    if(!isValidEmail && !isValidPassword)
        setMsg("Email field must have exactly one @ sign and Password must be of atleast 8 characters");
    else if(!isValidEmail)
        setMsg("Email field must have exactly one @ sign");
    else if(!isValidPassword)
        setMsg("Password must be of atleast 8 characters");
    else if(!isValidPassowrdConfirm)
        setMsg("Passwords doesn't match");

    if(isValid)
        setMsg("Form Submitted");

  };

  return (
    <form onSubmit = {submit}>

        <h2>Sign Up!</h2>

        <label htmlFor='email'>Email</label>
        <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
        />

        <label htmlFor='password-confirm'>Confirm Password </label>
        <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
        />

        {msg}
        <input type='submit' value='Submit'/>

    </form>
  )
}