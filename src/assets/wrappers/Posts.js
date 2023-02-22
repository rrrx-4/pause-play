import styled from "styled-components";

const Posts = styled.div`

input[type="checkbox"] {
    width: 25px; 
    height: 25px; 
  padding: 10px;
    box-sizing: border-box;
}

input[type="checkbox"]:checked + .tick-mark {

    
    display:block;
    animation: show-tick 0.3s ease-out;
}

@keyframes show-tick {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

.tick-mark {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 3px solid black;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
}


`
export default Posts;