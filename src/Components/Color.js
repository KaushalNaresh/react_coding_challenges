import styled from 'styled-components';

const ColorTab = styled.div`
    flex: 0 0 32vw;
    height: 100px;
    background: ${(props) => props.color};
    margin: 0.5vw;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border: solid 0.1vw;
`;


const Color = ({color, changeColor}) => {
    return (
        <>
        <ColorTab color={color} onClick = {() => changeColor(color)}>
            <h3 style={{textAlign: 'center'}}>{color}</h3>
        </ColorTab>
        </>
    );
}

export default Color;