import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export default function ProgessBar({file , setFile}) {
    const {url,progress} = useStorage(file);
    console.log(progress,url);


    useEffect(()=>{
      if(url){
        setFile(null);
      }
    },[url])
  return (
    <div className='progress-bar' style={{width: progress + '%'}}></div>
  )
}
