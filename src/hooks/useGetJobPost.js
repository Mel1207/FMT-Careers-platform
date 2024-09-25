import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/firebase-config"

export const useGetJobPost = () => {
  const [jobPost, setJobPost] = useState([])
  const jobCollectionRef = collection(db, 'jobpost')

  const getJobPost = async () => {
    const data = await getDocs(jobCollectionRef)
    setJobPost(data.docs.map(item => ({...item.data(), id: item.id})))
  }

  useEffect(() => {
    getJobPost()
  }, [jobPost])


  return {
    jobPost, getJobPost
  }
}