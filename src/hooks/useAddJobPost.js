import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase-config"
// import { us}

export const useAddJobPost = () => {
  const jobCollectionRef = collection(db, 'jobpost')

  const addJobPost = async ({ jobTitle, category, type, jobStatus, applicationLink, description}) => {
    await addDoc(jobCollectionRef, {
      jobTitle,
      category,
      type,
      jobStatus,
      applicationLink,
      description
    })
  }

  return {
    addJobPost
  }
}