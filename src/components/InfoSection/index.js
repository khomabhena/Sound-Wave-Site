import React from 'react'
import { Circle, Btn, DataWrap, Image, ImageWrap, InfoBackground, InfoContainer, Subtitle, Title } from './InfoSectionElements'

const InfoSection = () => {
    return (
        <>
            <InfoBackground>
                <InfoContainer>
                    <ImageWrap>
                        <Circle />
                        <Image src="images/girl.png" />
                    </ImageWrap>
                    <DataWrap>
                        <Title>Feel The Music</Title>
                        <Subtitle>Stream over 20 thousand songs with one click</Subtitle>
                        <Btn>Join Now</Btn>
                    </DataWrap>
                </InfoContainer>
            </InfoBackground>
        </>
    )
}

export default InfoSection
