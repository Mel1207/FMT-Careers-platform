// import { deleteDoc, doc } from "firebase/firestore"
// import { db } from "../config/firebase-config"

export const useDeleteJobPost = () => {
  const deleteJobPost = (id) => {
    fetch(`http://localhost:8000/jobPost/${id}`, {
      method: 'DELETE'
    }).then(() => console.log(`item ${id} was deleted`))
  }

  return {
    deleteJobPost
  }
}