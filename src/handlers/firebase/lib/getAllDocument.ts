import { db } from "handlers/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getAllDocument = async (collectionId: string) => {
  const querySnapshot = await getDocs(collection(db, collectionId));
  const collectionArr: any[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    collectionArr.push({ ...doc.data(), id: doc.id });
  });
  console.log("Collection", collectionArr);
};

export default getAllDocument;
