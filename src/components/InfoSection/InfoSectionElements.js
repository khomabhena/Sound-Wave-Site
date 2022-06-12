import styled from "styled-components";

export const InfoBackground = styled.div`
    background-color: #282c34;
    position: relative;
`

export const InfoContainer = styled.div`
    display: flex;
    height: 85vh;
    max-width: 1200px;
    margin: 0 auto;
`

export const ImageWrap = styled.div`
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
    align-content: flex-end;
`

export const Image = styled.img`
    position: relative;
    height: 85%;
    width: auto;
`

export const DataWrap = styled.div`
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    color: white;
`

export const Title = styled.p`
    font-size: 4rem;
`

export const Subtitle = styled.p`
    padding-top: 1.5rem;
    font-size: 1.5rem;
`

export const Btn = styled.button`
    padding: 12px 24px;
    border-radius: 10px;
    flex-wrap: wrap;
    width: 200px;
    font-size: 1.2rem;
    margin-top: 2rem;
    border-style: none;
    background-color: #1c2aec;
    color: white;
`

export const Circle = styled.div`
    /* position: absolute;
    height: 200px;
    width: 200px;
    background-color: red; */
    background-color: #ff00001c;
    position: absolute;
    border-radius: 100px;
    height: 200px;
    width: 200px;
    top: 1%;
    right: 30%;
    z-index: 1;
`