
import { emailActions } from "./email-slice"
import {  uiActions } from "./ui-slice"
import axios from "axios"

let baseUrl = 'https://mailbox-client-51299-default-rtdb.firebaseio.com/'
// export const fetchData = (recipientEmail,authorEmail) => {
//   return async(dispatch) => {
        


//     const fetchRecipient = async () => {
//       const response = await fetch(`${baseUrl}recipient/${recipientEmail}.json`)
      
//       if(!response.ok){
//         throw new Error("failed to get the email")
//       }

//       const data = await response.json()

//       return data
//     }

//     try {
//       const recipientEmailData = await fetchRecipient();
//       dispatch(emailActions.replaceRecipientData(recipientEmailData))
//     }catch(error) {
//       dispatch(uiActions.errorMessage({message:error.message}))
//     }

//     const fetchAuthor = async () => {
//       const response = await fetch(`${baseUrl}author/${authorEmail}`)

//       if(!response.ok) {
//         throw new Error("cant fetch the author email")
//       }

//       const data = await response.json()

//       return data 
//     }

//     try {
//       const authorEmailData = await fetchAuthor();
//       dispatch(emailActions.replaceAuthorData(authorEmailData))
//     }catch(error) {
//       dispatch(uiActions.errorMessage({message:error.message}))
//     }

//   }
// }


export const sendEmail = (emailContent,recipientEmail) => {
    console.log(recipientEmail)
    let loginEmail = localStorage.getItem("email")
    let authorEmail = loginEmail?.split(".").join("")

    let cleanRecipientEmail = recipientEmail.split(".").join("")
  return async (dispatch) => {
     const postData = async() => {
      const response = await axios.post(`${baseUrl}recipient/${cleanRecipientEmail}.json`,{
        emailContent:emailContent,
        recipientEmail:recipientEmail,
        authorEmail:loginEmail
       })
       

       await axios.post(`${baseUrl}author/${authorEmail}.json`,{
        emailContent:emailContent,
        recipientEmail:recipientEmail,
        authorEmail:loginEmail
       })

       console.log(response.data)
       return response.data
     }
     try {
      await postData()
     } catch (error){
      console.log(error)
     }
  }
}

   