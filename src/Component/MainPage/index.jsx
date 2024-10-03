import SliderComponent from '../SliderComponent'
import './index.css'

const MainPage = (props)=>{
    const {data}=props;
    return(
        <div className='home'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq1TeJd243NLJIbZQ9I5Ae9GXplbo6oVRIw&s' alt='main-image' className='main-image'/>
            <h1 className='main-heading'>Prabhas Movie Trailer</h1>
            <SliderComponent data={data}/>
        </div>
    )
}

export default MainPage