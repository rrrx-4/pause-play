import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../assets/wrappers/SinglePost'
import image from '../assets/images/Sadguru.jpeg'
import moment from 'moment/moment'
import Player from './Player'
import { Howl, Howler } from 'howler';

const SinglePost = ({ children, child, players, toggle, idx }) => {

    const [playing, setPlaying] = useState(false);
    const [Audio, setAudio] = useState(null);

    let title = child.title;

    title = title.replace(/[>]/g, '')
    title = title.replace(/#\w+/g, '')

    let description = child.description;

    description = description.replace(/<[^>]+>/g, '')
    description = description.replace(/[>]/g, '')

    let desc_sentence = description.split(".");

    let newDesc = desc_sentence.map((sent) => {

        return sent.charAt(0).toUpperCase() + sent.slice(1).toLowerCase()

    }).join(" ")

    let date = moment(child.pubDate).format('MMM Do YYYY');


    // const getCurrentAudio = () => {


    //     return allAudios.find((audio) => false === audio.paused)
    // }



    // const handleClick = (audio, idx) => {

    //     // setAudio(audio)

    //     let currentAudio = getCurrentAudio()

    //     if (currentAudio && currentAudio !== audio) {
    //         currentAudio.pause()
    //         console.log('hh');
    //         currentAudio.currentTime = 0
    //     }

    //     audio.paused ? audio.play() : audio.pause();
    //     console.log('hhhhh');
    //     // audio.currentTime = 0

    //     setPlaying(!playing)
    // }

    // useEffect(() => {



    // }, [playing])


    const handletoggle = () => {

        toggle()

    }


    return (
        <Wrapper>
            <div className='main' >
                <div className='image-button-container'>
                    <div className='image-container' >
                        <img src={image} className='photo'></img>
                    </div>
                    <div className='audio-container' >
                        {/* Player */}
                        <button className='btn play-btn' onClick={handletoggle}  >
                            {players[idx].playing ? 'pause' : 'play'}
                        </button>
                    </div>
                </div>
                <div className='info-container' >
                    <header className='header' >
                        <div className='subContainer'>
                            <h3>{title}</h3>
                            <p  >{date}</p>
                        </div>
                        <div className='checkbox-container'>
                            {/* <children></children> */}
                            {children}
                        </div>
                    </header>
                    <p className='description' >{newDesc}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default SinglePost

//onClick={() => handleClick(allAudios[idx], idx)}