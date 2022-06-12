import React from 'react'
import Navbar from '../Navbar'
import { Container, DataWrap, DiscoverWrap, Image, ImageWrap, More, MoreItem, Subtitle, Title } from './DiscoverElements'

const Discover = () => {
    return (
        <>
            <DiscoverWrap>
                <Container>
                    <DataWrap>
                        <Title>Discover New Music</Title>
                        <More>
                            <MoreItem>
                                <img src="images/microphone.svg" />
                                <h2>Charts</h2>
                            </MoreItem>
                            <MoreItem>
                                <img src="images/albums.svg" />
                                <h2>Albums</h2>
                            </MoreItem>
                            <MoreItem>
                                <img src="images/more.svg" />
                                <h2>More</h2>
                            </MoreItem>
                        </More>
                        <Subtitle>By joining you can benefit by listening to the latest albums released.</Subtitle>
                    </DataWrap>
                    <ImageWrap>
                        <Image src="images/covers.jpg" />
                    </ImageWrap>
                </Container>
            </DiscoverWrap>
        </>
    )
}

export default Discover
