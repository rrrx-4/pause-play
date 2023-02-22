import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import { useEffect } from 'react'
import Posts from '../components/Posts'
import Wrapper from '../assets/wrappers/Home'
import getReqJson from '../utilits/getReqJson'
import useMultiAudio from '../utilits/useMultiAudio'



const Home2 = () => {

    const [currentItems, setCurrentItems] = useState([])

    const fetchData = async () => {

        try {
            const response = await fetch(`https://anchor.fm/s/3b257d18/podcast/rss`)

            // console.log(response);

            let data = await response.text()

            data = new XMLParser().parseFromString(data);


            data = data.children[0].children.slice(18);
            let fset = Array.from(data)
            setCurrentItems(data)

            let newItems = getReqJson(fset)

            setCurrentItems(newItems)


        } catch (error) {
            console.log(error);
        }

    }

    // const handleClick = () => {
    //     let newItems = currentItems.filter((item) => {
    //         if (isChecked.includes(String(item.id))) {
    //             return item;
    //         }
    //     })

    //     newItems.forEach((item) => {
    //         item.selected = false
    //     })

    //     setCurrentItems(newItems)

    //     setIsChecked([])

    //     // allAudios.forEach((audio) => {
    //     //     audio.pause()
    //     // })

    // }

    useEffect(() => {
        fetchData()

    }, [])



    if (currentItems.length == 0) {
        return <h1>loading...</h1>
    }



    return (
        <Wrapper>
            <div className='main-container'>
                {/* <h1>hello</h1> */}

                <Posts currentItems={currentItems} setCurrentItems={setCurrentItems}  ></Posts>

                {/* {isChecked.length > 0 && <button className='filter-btn' onClick={handleClick} >Filter</button>} */}

            </div>

        </Wrapper>

    )
}

export default Home2