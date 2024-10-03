import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'

const SliderItem = (props)=>{
    const {each} = props;
    return(
        <div>
            
            <Popup modal trigger={<img src={each.imageUrl} alt={each.name} className="slider-image"/>}>
    {close => (
      <div className='popup-div'>
        <ReactPlayer url={each.ytUrl} />
        <button type='button' className="close-button" onClick={close}>
          close
        </button>
      </div>
    )}
  </Popup>
        </div>
    )
}

export default SliderItem