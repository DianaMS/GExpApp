import { useState } from 'react';
import {AddCategory} from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    // const hadleAdd = () => {
        
    //     // setCategories([...categories, 'four'])
    //     setCategories( cats => [ ...cats, 'four' ])

    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            < AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ hadleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( (category) => (
                        < GifGrid 
                            key= {category}
                            category= {category}
                        />
                    ))
                }
            </ol>
            
        </>
    )
}
