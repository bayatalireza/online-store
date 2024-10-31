import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/Config'
import { useEffect, useState } from "react";


export default function Shop() {

  const[isLoading, setIsLoading] = useState (false); 
  const[data, setData] = useState (""); 
  const[error, setError] = useState (false); 

  useEffect(()=>{
    setIsLoading(true);
    setError(false);

    const ref = collection(db, "data");
    getDocs(ref)
    .then(res=>{
      if(res.empty) {

        setIsLoading(false);
        setError(true)
      }else{
        let result = []
        res.docs.forEach(doc => {
          result.push({id: doc.id, ...doc.data()})
          setData(result)
          setIsLoading(false);
          
        })
        
      }})
      

  },[])


  return (
    <>
     <h1>Available items</h1>
     {isLoading && <p>Loading...</p>} 
      {error && <p>{error.message}</p>}
      {data && (<ul>
        {data.map(item=> (
          <li key={item.id}>{item.productName}{item.price}{item.productImage}</li>
        ))}
      </ul>)}
    </>
  )
}
