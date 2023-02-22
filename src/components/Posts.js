
import SinglePost from './SinglePost';
import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../assets/wrappers/Posts';
import { render } from '@testing-library/react';
import useMultiAudio from '../utilits/useMultiAudio';

const Posts = ({ currentItems, setCurrentItems }) => {


    const [isChecked, setIsChecked] = useState([])
    // let allAudios = currentItems.map((item) => {

    //     return new Audio(item.enclosure.url)

    // })

    let urls = currentItems.map((item) => {
        return item.enclosure.url
    })

    const [players, toggle] = useMultiAudio(urls)



    const handleChange = (e, id) => {

        currentItems.forEach(element => {
            if (element.id === id) {
                element.selected = !element.selected;
            }
        });

        if (e.target.checked) {

            setIsChecked([...isChecked, e.target.value])

        }
        else {

            setIsChecked(
                isChecked.filter((filterTag) => filterTag !== e.target.value)
            )
        }



        // allAudios.forEach((audio) => {
        //     audio.pause()
        // })
        // console.log(isChecked);
    }


    const handleClick = () => {
        let newItems = currentItems.filter((item) => {
            if (isChecked.includes(String(item.id))) {
                return item;
            }
        })

        newItems.forEach((item) => {
            item.selected = false
        })

        setCurrentItems(newItems)

        setIsChecked([])

        // allAudios.forEach((audio) => {
        //     audio.pause()
        // })
        const handleFilter = (toggle) => {
            toggle()
        }
        let oidx = players.findIndex((player) => {
            return player.playing
        })
        console.log(oidx);
        if (oidx > -1) {
            handleFilter(toggle(oidx))
            console.log('yeyeye');
        }



        players.forEach((player, idx) => {
            if (player.playing) {
                handleFilter(idx)
            }
        })

    }





    return (
        <>
            <Wrapper>{
                currentItems.map((child, idx) => {
                    return (
                        <div>
                            <div>
                                <SinglePost players={players} toggle={toggle(idx)} key={idx} idx={idx} child={child}  >
                                    <input className='checkbox-container' type="checkbox" id="checkbox" value={child.id} checked={child.selected} onChange={(e) => handleChange(e, child.id)} />
                                    <div className='tick-mark' />
                                    {/* <label htmlFor="checkbox"> </label> */}
                                </SinglePost>
                            </div>
                        </div>
                    )
                }
                )}

                {isChecked.length > 0

                    && <button className='filter-btn' onClick={handleClick} >Filter</button>}
            </Wrapper>
        </>
    )
}

export default Posts