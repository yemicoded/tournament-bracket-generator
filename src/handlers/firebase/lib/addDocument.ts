import { db } from "handlers/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const addDocument = async (collectionId: string, data: any) => {
  try {
    const queryPromise = await addDoc(collection(db, collectionId), data);
    console.log("promise", queryPromise);
    return queryPromise;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default addDocument;
