import styled from "styled-components";

const Home = styled.article`

.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    flex-direction: column
}

@media (max-width: 768px) {
    .main-container {
        width: 90%;
    }
}

.filter-btn {
    background-color: #4CAF50; /* green color */
    color: white; /* white text color */
    padding: 12px 20px; /* increase the button size */
    border: none; /* remove border */
    cursor: pointer; /* change cursor on hover */
    font-size: 18px; /* increase font size */
    border-radius: 5px; /* add rounded corners */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* add subtle shadow */
    transition: all 0.3s ease-in-out; /* add transition effect */
    font-weight: bold; /* make the text bold */
    margin-bottom: 20px;
}

.filter-btn:hover {
    background-color: #3e8e41; /* darken the background color on hover */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19); /* increase the shadow on hover */
    transform: translateY(-3px); /* add a hover effect */
}



`

export default Home