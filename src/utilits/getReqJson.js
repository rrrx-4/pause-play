const getReqJson = (items) => {

    let newItems = items.map((item) => {
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

        // const duration = Audios.itunes

        return { title, description, enclosure, pubDate, selected: false, id: Math.floor(Math.random() * 1000) }

    })

    return newItems;

}

export default getReqJson