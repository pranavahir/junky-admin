import axios from "axios"
export async function ProductApprovalList(){
    const data = {
        operations:"listing"
    }
    const sendotp = axios.post('http://localhost:4000/filterlistingandupdate',data)
      // using .then, create a new promise which extracts the data
  const dataPromise = sendotp.then((response) => {
    return response
  })
  // return it
  return dataPromise
  }