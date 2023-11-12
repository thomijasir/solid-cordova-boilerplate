import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../utils/firebase";

const useFirestore = () => {

  const COLLECTION = 'gasStation';

  const getGasStation = async (uid?: string) => {

    console.log('GET UID: ', uid);
    const createQuery = query(collection(db, COLLECTION))
    const resultSnapshot = await getDocs(createQuery)
    return resultSnapshot.docs.map(value => {
      const item = value.data()
      return { ...item }
    })

  }

  return { getGasStation }
}

export default useFirestore