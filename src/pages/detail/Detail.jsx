import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const {data} = useFetch(`/product/get/${id}`)
  
  console.log(data);
  
  return (
    <div className='container'>
        <p>Detail</p>
        <img src={data?.image} alt="" />
    </div>
  )
}

export default Detail