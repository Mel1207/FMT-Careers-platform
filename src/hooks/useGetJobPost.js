import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useEffect, useState } from "react"

export const useGetJobPost = () => {
  const [jobPost, setJobPost] = useState([])
  const jobPostCollection = collection(db, 'jobpost')

  const getJobPost = async () => {
    const data = await getDocs(jobPostCollection)
    setJobPost(data.docs.map(item => ({...item.data(), id: item.id})))
  }

  // const getJobPost = async () => {
  //   await fetch('http://localhost:8000/jobPost')
  //     .then(res => res.json())
  //     .then(data => setJobPost(data))
  // }

  useEffect(() => {
    getJobPost()
  }, [])

  return {
    jobPost, getJobPost
  }
}