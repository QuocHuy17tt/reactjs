import React from 'react'
import Products from '../componets/Products'

const HomePage = (props) => {
    console.log(props)
    return (
        <div>
            <Products {...props}/>
        </div>
    )
}

export default HomePage
