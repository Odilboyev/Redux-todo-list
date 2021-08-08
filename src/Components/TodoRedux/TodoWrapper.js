import styled from "styled-components";

const TodoWrapper = styled.div`
width: 60%;
margin: auto;
background-image: linear-gradient(to right bottom, #ffffff40, #ffffff09);
backdrop-filter: blur(8px);
padding:  50px 100px;

@media (max-width: 865px){
    width: 80%;
    padding: 20px;
}


`
export default TodoWrapper