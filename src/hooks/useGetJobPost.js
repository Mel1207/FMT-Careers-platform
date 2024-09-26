// import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
// import { db } from "../config/firebase-config"

export const useGetJobPost = () => {
  const [jobPost, setJobPost] = useState([])
  // const jobCollectionRef = collection(db, 'jobpost')

  const getJobPost = async () => {
    // const data = await getDocs(jobCollectionRef)
    // setJobPost(data.docs.map(item => ({...item.data(), id: item.id})))

    // try {
    //   const res = await fetch('http://localhost:8000/jobPost')
    //   const data = await res.json()
    //   setJobPost(data)
    // } catch (error) {
    //   console.log(error)
    // }

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