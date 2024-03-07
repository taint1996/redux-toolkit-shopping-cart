import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import { ProductTile } from '../components/product-tile'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchListOfProducts() {
        return await fetch('https://fakestoreapi.com/products').then(res => {
            setLoading(true)
            return res.json()
        }
        ).then((data) => {
            setLoading(false)
            setProducts(data)
        }).catch((err) => console.log(`Error when Get List of Product ${err}`))
    }

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    return (
        <div>
            {
                loading ? <div className='min-h-screen flex justify-center items-center'>
                    <Circles height="120" width="120" color="rgb(127,29,29)" visible={true} />
                </div> : <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
                    {products && products.length > 0 ? products.map(productItem => <ProductTile product={productItem} key={productItem.id} />) : null}
                </div>
            }
        </div>
    )
}

export default Home