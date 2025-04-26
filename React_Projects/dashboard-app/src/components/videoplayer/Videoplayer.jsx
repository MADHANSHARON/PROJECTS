import React, { useRef } from 'react'
import './Videoplayer.css'
import vedio from '../../assets/campus.mp4'

export const Videoplayer = ({setPlayvideo,playvideo}) => {
    const stop=useRef();
    const closeplayer =(e)=>{
        if(e.target===stop.current){
            setPlayvideo(false);
        }
    }


  return (
    <div ref={stop} className={`video-player ${playvideo ? '':'hide'}`  }  onClick={closeplayer}>
          <video src={vedio} autoPlay muted controls></video>
    </div>
  )
}
