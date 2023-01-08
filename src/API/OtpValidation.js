import axios from 'axios'

export async function SendOTP(email){
    const data = {
        email:email
    }
    const sendotp = axios.post('http://localhost:4000/sendOtp',data)
      // using .then, create a new promise which extracts the data
  const dataPromise = sendotp.then((response) => {
    return response
  })
  // return it
  return dataPromise
}