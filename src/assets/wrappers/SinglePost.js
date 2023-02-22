import styled from "styled-components";

const SinglePost = styled.article`

/* border: 1px solid red; */
 margin-bottom: 30px;
    border-top: 2px solid #eee;
    padding-top: 20px;
    background-color: #fff;
.main{
    display: flex;
    align-items: center;
    gap: 1em;
}

.photo{
    object-fit: cover;
    width: 170px;
    height: 220px;
    border-radius: 0.25rem;
}
.header{
    display:  flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 120px;
    height: 50px;
    padding: 10px 20px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    margin: auto;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
}

.play-btn {
    background-color: green;
    color: white;
}

.pause-btn {
    background-color: red;
    color: white;
}

.subContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
}

.subContainer h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
}

.subContainer p {
    font-size: 16px;
    /* color: #555; */
    color: #888;
    text-align: right;
    margin-top: 10px; 
    letter-spacing: 1px; 
    font-style: italic; 
}

.subContainer {
    opacity: 0;
    animation: fade-in 0.5s ease-out;
    animation-fill-mode: forwards;
}

.description {
    position: relative;
    left: -4px; 
    top: -32px; 
     text-align: justify;
     font-size: 22px; 
    font-weight: normal; 
    line-height: 1.5; 
    color: #555; 
    text-shadow: 1px 1px 1px #ccc; 
    letter-spacing: 1px; 
    word-spacing: 2px;  
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


`

export default SinglePost