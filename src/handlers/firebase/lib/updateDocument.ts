import { db } from "handlers/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const updateDocument = async (
  collectionId: string,
  firebaseId: string,
  data: any
) => {
  const docRef = doc(db, collectionId, firebaseId);
  await updateDoc(docRef, data)
    .then(() => {
      console.log("Document update:", "Update is Successful");
    })
    .catch((err) => {
      console.log("No such document! Update not successful");
    });
};

export default updateDocument;
