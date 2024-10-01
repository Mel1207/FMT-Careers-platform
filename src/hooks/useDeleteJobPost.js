import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase-config"

export const useDeleteJobPost = () => {
  const deleteJobPost = async (id) => {
    const targetDoc = doc(db, 'jobpost', id)
    await deleteDoc(targetDoc)


    // await fetch(`http://localhost:8000/jobPost/${id}`, {
    //   method: 'DELETE'
    // }).then(() => console.log(`item ${id} was deleted`))
  }

  return {
    deleteJobPost
  }
}