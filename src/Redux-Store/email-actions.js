
import { emailActions } from "./email-slice"
import {  uiActions } from "./ui-slice"
import axios from "axios"
import { useSelector } from "react-redux"

let baseUrl = 'https://mailbox-client-51299-default-rtdb.firebaseio.com/'

let loginEmail = localStorage.getItem("authorEmail")
let authorEmail = loginEmail?.split(".").join("")
  
  console.log(authorEmail)

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
          authorEmail:response.data[key].authorEmail,
          content:response.data[key].emailContent.content,
          subject:response.data[key].emailContent.subject,
          blue:response.data[key].emailContent.blue
        })
      }

      console.log(loadedRecipientData)
      dispatch(emailActions.recipientData(loadedRecipientData))  
  
      
    }catch(error) {
      // dispatch(uiActions.errorMessage({message:error.message}))
      console.log(error)
      console.log('error from the fetching of recipient')
    }
  }
  }

  
  export  const fetchAuthor =  () => {
         console.log('from fetch Author',authorEmail)
        return async(dispatch) => {
           console.log('from inside fetchAuthor',authorEmail)
         try {
        const response = await axios.get(`${baseUrl}author/${authorEmail}.json`)
            

  
        console.log(response.data)
        let loadedAuthorData = []
        for(const key in response.data ) {
          loadedAuthorData.push({
            id:key,
            toEmail:response.data[key].recipientEmail,
            content:response.data[key].emailContent.content,
            subject:response.data[key].emailContent.subject,
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
   
 



export const sendEmail = (emailContent,recipientEmail,currentUserEmail) => {
    console.log(recipientEmail)

    let cleanRecipientEmail = recipientEmail.split(".").join("")
    let cleanCurrentUserEmail = currentUserEmail.split(".").join("")
  return async (dispatch) => {
     const postData = async() => {
      const response = await axios.post(`${baseUrl}recipient/${cleanRecipientEmail}.json`,{
        emailContent:emailContent,
        recipientEmail:recipientEmail,
        authorEmail:currentUserEmail,
       })
       
      // console.log('from post author',authorEmail)
       await axios.post(`${baseUrl}author/${cleanCurrentUserEmail}.json`,{
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

export const updateReadInbox = (authorEmail,content,id,currentLoggedEmail) => {
  console.log('loogedEmail from update',currentLoggedEmail)
  let cleanCurrentLoggedEmail = currentLoggedEmail.split(".").join("")
  console.log(cleanCurrentLoggedEmail)

  console.log('this is author email',authorEmail)
  return async(dispatch) => {
    try{
     const  response = await axios.put(`${baseUrl}recipient/${cleanCurrentLoggedEmail}/${id}.json`,{
      emailContent:content,
      recipientEmail: cleanCurrentLoggedEmail,
      authorEmail: authorEmail,
     })
     console.log(response.data)


    }catch(err) {
     console.log(err)
    } 
  }
}

export const DeleteInboxEmail = (id,currentLoggedEmail) => {
  let cleanCurrentLoggedEmail = currentLoggedEmail.split(".").join("")
  return async() => {
    try{
      const response = await axios.delete(`${baseUrl}recipient/${cleanCurrentLoggedEmail}/${id}.json`)

      if(response === 200) {
        console.log(response.data)
      }

            
    }catch(err){
      console.log(err)
    }
  }
}

export const DeleteSendBoxEmail = (id,currentLoggedEmail) => {
  let cleanCurrentLoggedEmail = currentLoggedEmail.split(".").join("")
  return async() => {
    try{
      const response = await axios.delete(`${baseUrl}author/${cleanCurrentLoggedEmail}/${id}.json`)

      if(response === 200) {
        console.log(response.data)
      }
      
            
    }catch(err){
      console.log(err)
    }
  }
}

   