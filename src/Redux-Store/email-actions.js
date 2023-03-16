
import { emailActions } from "./email-slice"
import {  uiActions } from "./ui-slice"
import axios from "axios"

let baseUrl = 'https://mailbox-client-51299-default-rtdb.firebaseio.com/'

let loginEmail = localStorage.getItem("authorEmail")
let authorEmail = loginEmail?.split(".").join("")


  export const fetchRecipient = () => {
    return async(dispatch) => {
     
        try {
      const response = await axios.get(`${baseUrl}recipient/${authorEmail}.json`)
         console.log(authorEmail)

      console.log(response.data)
      let loadedRecipientData = []
      for(const key in response.data ) {
        loadedRecipientData.push({
          id:key,
          emailFrom:response.data[key].authorEmail,
          content:response.data[key].emailContent.content,
          subject:response.data[key].emailContent.subject
        })
      }

      // console.log(loadedRecipientData)
      dispatch(emailActions.recipientData(loadedRecipientData))  
  
      
    }catch(error) {
      // dispatch(uiActions.errorMessage({message:error.message}))
      console.log(error)
      console.log('error from the fetching of recipient')
    }
  }
  }

  
  export  const fetchAuthor =  () => {
     
        return async(dispatch) => {
  
         try {
        const response = await axios.get(`${baseUrl}author/${authorEmail}.json`)
            

  
        console.log(response.data)
        let loadedAuthorData = []
        for(const key in response.data ) {
          loadedAuthorData.push({
            id:key,
            toEmail:response.data[key].recipientEmail,
            content:response.data[key].emailContent.content,
            subject:response.data[key].emailContent.subject
          })
        }

        console.log(loadedAuthorData)
        dispatch(emailActions.addEmail(loadedAuthorData))     
      }catch(error) {
        // dispatch(uiActions.errorMessage({message:error.message}))
        console.log(error)
        console.log('error from the fetching of author')   

      }
      }
      }
   

 



export const sendEmail = (emailContent,recipientEmail) => {
    console.log(recipientEmail)

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

   