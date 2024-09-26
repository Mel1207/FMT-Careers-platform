// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../config/firebase-config"
import { useEffect, useState } from "react"

export const useGetJobPost = () => {
  const [jobPost, setJobPost] = useState([])

  const getJobPost = async () => {
    fetch('http://localhost:8000/jobPost')
      .then(res => res.json())
      .then(data => setJobPost(data))
  }

  useEffect(() => {
    getJobPost()
  }, [jobPost])

  return {
    jobPost, getJobPost
  }
}