import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MainSection(props) {
    console.log(props.produits)
    const id = useParams('id')  
    const [filtredProduits, setFiltredProduits] = useState(["ff"])
    useEffect(()=>{
        const lis = props.produits.filter(ele=>ele.type == id)
        setFiltredProduits(lis)
        console.log(filtredProduits)
    },[id])
    return (
        <div>
            <h1></h1>
            <img src='Produits/body/sahl.jpg' alt='hello'/>
        </div>
  )
}

export default MainSection
