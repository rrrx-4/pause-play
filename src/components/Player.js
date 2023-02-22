import React from 'react'
import Wrapper from '../assets/wrappers/Playser'
const Player = ({ playing, audio, currentAudio, setCurrentAudio, setPlaying, audioEle }) => {

    const handleClick = () => {

        if (currentAudio === audio) {
            setPlaying(!playing)
            return
        } else {
            // console.log(audio, currentAudio);
            setPlaying(false)

        }
        setCurrentAudio(audio)
        setPlaying(true)
    }


    return (
        <Wrapper>
            <button onClick={handleClick} ></button></Wrapper>
    )
}

export default Player