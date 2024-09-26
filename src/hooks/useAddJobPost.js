import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase-config"

export const useAddJobPost = () => {
  const jobCollectionRef = collection(db, 'jobpost')

  const addJobPost = async ({ jobTitle, category, type, location, setup, applicationLink, description}) => {
    await addDoc(jobCollectionRef, {
      jobTitle,
      category,
      type,
      location,
      setup,
      applicationLink,
      description
    })
  }

  return {
    addJobPost
  }
}