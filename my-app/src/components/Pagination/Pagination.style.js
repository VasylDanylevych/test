import styled from "styled-components";

export const Container = styled.div`
    padding: 0 16px;
    margin: 25px auto;
    width: 1200px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 196px;
    height: 50px;
    margin: 0 auto;

    font-family: inherit;
    font-style: normal;
    font-size: 18px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #fff;

    background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :active {
        background: #5cd3a8;
    }
`;
