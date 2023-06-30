import { db } from "handlers/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const getSingleDocument = async (collectionId: string, documentId: string) => {
  const docRef = doc(db, collectionId, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default getSingleDocument;
