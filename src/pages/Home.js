import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import { useEffect } from 'react'
import Posts from '../components/Posts'

const Home = () => {

    let data = null;

    // const [items, setItems] = useState([])

    let items = []


    const getReqItems = () => {

        let newItems = items.length > 0 && items.map((item) => {
            let Audios = {};

            // console.log(item.children);

            Array.from(item.children).forEach(element => {
                // console.log(element);

                const { name, value, attributes } = element

                // console.log(name, value);

                if (name === 'enclosure') {
                    // console.log(name);
                }

                if (name) {
                    Audios[name] = value || attributes;
                    // Audios.attribute = attribute || ''
                }

            })


            // console.log(Audios);
            const { title, description, enclosure, pubDate, } = Audios;

            const duration = Audios.itunes

            return { title, description, enclosure, pubDate, duration }

        })

        return newItems;

    }
    const [currentChildren, setCurrentChildren] = useState([]);
    useEffect(() => {

        fetchData();
        // setCurrentChildren(getReqItems())

    }, [])

    // console.log(typeof items);






    // setItems(newItems)

    // console.log(children);


    // console.log(children);

    // useEffect(() => {

    //     setCurrentChildren(children)
    //     console.log(currentChildren);

    // }, currentChildren)


    const [isChecked, setIsChecked] = useState([])

    // const handleClick = () => {
    //     let newData = currentChildren.filter((item) => {
    //         if (isChecked.includes(item.title)) {
    //             return item;
    //         }
    //     })

    //     setCurrentChildren(newData);
    // }
    if (items.length == 0) {
        return <h1>Loading</h1>
    }

    setCurrentChildren(getReqItems())



    // console.log(currentChildren);
    // setCurrentChildren(newItems)
    // console.log(newItems);

    return (
        <div>
            {/* <h1>hello</h1> */}

            <Posts currentChildren={currentChildren} setCurrentChildren={setCurrentChildren} isChecked={isChecked} setIsChecked={setIsChecked} ></Posts>
            <button  >Filter</button>
        </div>
    )
}

export default Home