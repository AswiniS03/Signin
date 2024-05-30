import react , {useState } from 'react';
function Login()
{
    const[username,setName]=useState("");
  const[password,setPassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }
  const handleReset=()=>{
    setName("");
    setPassword("");
  }
  return(
  <div>
    <h1>Signin Page</h1>
    <form onSubmit={handleSubmit}>
      <label for="username">User Name</label>
      <input type="text" name="username" value={username} onChange={(e)=>setName(e.target.value)} title="Username is required"/>
      <br></br>
      <label for="password">Password </label>
      <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} title="Password is required"/><br></br>
      <input type="submit" placeholder="Signin" value={"Signin"}/><br></br>
      <input type="reset" onClick={handleReset}/><br></br>
      
    </form>
    
  </div>
  );
}
export default Login;