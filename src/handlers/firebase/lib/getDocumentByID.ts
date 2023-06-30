import { db } from "handlers/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const getDocumentByID = async (collectionId: string, Id: string) => {
  const docRef = collection(db, collectionId);
  const q = query(docRef, where("id", "==", Id));
  const querySnap = await getDocs(q);
  const docList: any[] = [];
  if (!querySnap.empty) {
    querySnap.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      docList.push({ ...doc.data(), fbId: doc.id });
    });
  } else {
    // docSnap.data() will be undefined in this case
    // console.log("No such document!");
  }
  return docList[0];
};

export default getDocumentByID;
