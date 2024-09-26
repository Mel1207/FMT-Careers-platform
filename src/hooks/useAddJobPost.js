// import { addDoc, collection } from "firebase/firestore"
// import { db } from "../config/firebase-config"

export const useAddJobPost = () => {
  // const jobCollectionRef = collection(db, 'jobpost')

  // const addJobPost = async ({ jobTitle, category, type, location, setup, applicationLink, description}) => {
  //   await addDoc(jobCollectionRef, {
  //     jobTitle,
  //     category,
  //     type,
  //     location,
  //     setup,
  //     applicationLink,
  //     description
  //   })
  // }

  const addJobPost = ({ jobTitle, category, type, location, setup, applicationLink, description}) => {
    fetch('http://localhost:8000/jobPost', {
      method: 'POST',
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        jobTitle,
        category,
        type,
        location,
        setup,
        applicationLink,
        description
      })
    }).then(() => {
      console.log('new blog added')
    })
  }

  return {
    addJobPost
  }
}