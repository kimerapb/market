import { db } from '../../utils/firebase';

import { collection,doc,getDocs, getDoc } from 'firebase/firestore'
import { async } from '@firebase/util' 
 
 export const getData = async() =>{

	const query = collection(db, 'items');

	const response = await getDocs (query);

	const dataItems = response.docs.map(doc=> {return {id: doc.id, ...doc.data()}});

	const queryDoc = doc(db,'items','ODrn1NPl3FyYt9am3S5j');
	const responseDoc = await getDoc (queryDoc);
	const dataDoc = responseDoc.data();
	const newDocumentoUnico = {id: responseDoc.id, ...dataDoc}

  }
