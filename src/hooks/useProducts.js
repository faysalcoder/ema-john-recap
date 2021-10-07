import { useEffect, useState } from "react";


const useProducts = () =>{
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-with-router-module-53/main/src/fakeData/products.JSON')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return [products, setProducts];
}
export default useProducts;
