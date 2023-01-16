import axios from 'axios'

export async function Register(email,otp,password,){
    const data = {
        email:email,
        otp:parseInt(otp),
        password:password,
        isSeller:true
    }
    const sendotp = axios.post('http://localhost:4000/register',data)
      // using .then, create a new promise which extracts the data
  const dataPromise = sendotp.then((response) => {
    return response
  })
  // return it
  return dataPromise
}

export async function Login(email,password,){
  const data = {
      email:email,
      password:password,
      isAdmin:true
  }
  const sendotp = axios.post('http://localhost:4000/server/login',data)
    // using .then, create a new promise which extracts the data
const dataPromise = sendotp.then((response) => {
  return response
})
// return it
return dataPromise
}