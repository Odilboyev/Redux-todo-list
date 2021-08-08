import styled from "styled-components";

export const gradient = 'linear-gradient(-20deg, #ff2846 0%, #6944ff 100%)'
export const blue = '#6944ff'
export const red = '#ff2846'
export const blueGradient = 'linear-gradient(45deg, #1da1f2,#0e71c8)'
export const redGradient = "linear-gradient(45deg, #d5135a, #f05924)"

const TodoWrapper = styled.div`

width: 60%;
margin: auto;
background: #fff;
backdrop-filter: blur(8px);
border-radius: 15px;
padding: 50px;

.title{
    color: #6944ff;
}

@media (max-width: 865px){
    width: 80%;
    padding: 20px;
}

.gr-btn{
    padding: 10px 0;
    color: #fff !important;
    align-items: center !important;
    width: 48%;
    margin: 5px;
    border-radius: 25px;
    cursor: pointer;
    p{
        margin: 0 !important;
    }
    &.blue{
        background: ${blueGradient};
        box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);
    }
    &.red{
        background: ${redGradient};
        box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
    }
}


.wrapperHoverBtn{
    width: 25%;
    opacity: 0;
    transform: translateY(50%);
    transition: all 0.3s;
}
.list-group-item:hover .wrapperHoverBtn{
    opacity: 1;
    transform: translateY(0);
}

.hoverbtn{
    width: 30px;
    height: 30px;
    background: ${blue};
    box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
    color: #fff;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease;
}
.none{
    background: transparent;
    border: 2px solid ${blue};
}
.hoverbtn.fill{
    background-image: ${blueGradient};
}

.hoverbtn:last-child{
    background-image: ${redGradient};

}

.hoverbtn:hover{
    transform: scale(1.1);
}
`
export default TodoWrapper