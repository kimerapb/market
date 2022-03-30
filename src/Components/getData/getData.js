import { db } from '../../utils/firebase';

//importa para conectar a firebase
import { collection,doc,getDocs, getDoc } from 'firebase/firestore'
import { async } from '@firebase/util' 
 
 export const getData = async() =>{

	//referencia a la base de datos de firebase
	const query = collection(db, 'items');
	//obtener documentos dentro de la coleccion item
	const response = await getDocs (query);
	console.log('respuesta', response);
	/*  
	  const newDoc ={
		id: doc.id,
		data: doc.data()
	  } 
	*/
	//obtener la iformacion del documento y su Id
	//console.log('info-documento', response.docs[0].data());
	//console.log('id-documento', response.docs[0].id);

	//const dataItems = response.docs.map(doc=> doc.data());
	//iteramos para poder generar el objeto con la informacion de los productos teniendo id y la información del producto por cada uno de nuestros productos
	const dataItems = response.docs.map(doc=> {return {id: doc.id, ...doc.data()}});
	console.log("🚀 ~ getData ~ dataItems", dataItems)
	//setProductos(dataItems);
	//setLoading(false)
	//console.log('dataItem');

	//para obtener informacion de un solo documento
	const queryDoc = doc(db,'items','ODrn1NPl3FyYt9am3S5j');
	const responseDoc = await getDoc (queryDoc);
	const dataDoc = responseDoc.data();
	console.log('info-documento-unico', dataDoc);
	console.log('id-documento-unico', responseDoc.id);
	const newDocumentoUnico = {id: responseDoc.id, ...dataDoc}

	console.log("🚀 ~ newDocumentoUnico", newDocumentoUnico)
  }
