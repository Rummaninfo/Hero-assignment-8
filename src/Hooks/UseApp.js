import axios from "axios"
import { useEffect, useState } from "react"

import React from 'react';


const UseApp = () => {
    let [apps, setApps] = useState([])
   let [loading, setLoading]= useState(true)
   let [error,setError]= useState(null)

   useEffect(()=>{
    setLoading(true)
    axios.get('/Data.json').then(data => setApps(data.data))
    .catch(err => setError(err))
    .finally(()=> setLoading(false))

   },[])
   return { apps, loading, error}
};

export default UseApp;