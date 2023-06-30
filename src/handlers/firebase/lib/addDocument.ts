import { db } from "handlers/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const addDocument = async (collectionId: string, data: any) => {
  const queryPromise = await addDoc(collection(db, collectionId), data);
  console.log("promise", queryPromise);
  return queryPromise;
};

export default addDocument;
