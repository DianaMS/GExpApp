import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);


     const { data } = useFetchGifs( category );

    

    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> { category } </h3>

        <div className="card-grid">
            {
                  data.map( img => (                      
                      <GifGridItem 
                        key={img.id}
                        { ...img }
                      />
                  ))
            }  
        </div>
        </>
    )
}
