import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'components'
import { Box, Image, Flex, Text, Heading } from 'chakra'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Wave from 'assets/images/header-wave.svg'
import WordMark from 'assets/images/kitt-text-logo-offwhite.svg'
import KittIcon from 'assets/images/kitt_icon.png'

const IndexPage = () => {
    return (
        <Layout>
            <Box bg="offwhite" minHeight="100vh" maxWidth="100%" overflowX="hidden">
                <Header justify="center" align="center" pt="6rem">
                    <Image alt="Coach Kitt" height="32px" src={WordMark} mb="3rem" />
                    <Mascot>
                        <Image src={KittIcon} alt="Coach Kitt Icon" width="250px"></Image>
                    </Mascot>
                </Header>
                <Flex justify="center" bg="offwhite" pb="3rem" zIndex="9">
                    <Box
                        maxWidth={[null, '632px']}
                        mt={['3rem', '3rem']}
                        px="1rem"
                        textAlign="center"
                    >
                        <Heading
                            fontFamily="heading"
                            color="black400"
                            mb="1rem"
                            zIndex="9"
                            fontWeight="bold"
                            fontSize={['heading2', 'heading3', 'display1']}
                            as="h1"
                        >
                            Lead great teams
                        </Heading>
                        <Text
                            fontSize={['body', 'body', 'subtitle']}
                            fontFamily="body"
                            color="text"
                            mb="2rem"
                        >
                            Your very own team coach for Slack. Kitt helps you build a high
                            performing team and community of people that don’t want to leave.
                        </Text>
                        <Link to="https://slack.com/oauth/authorize?client_id=729386734450.735260681362&scope=commands,bot,incoming-webhook,channels:read,users.profile:read">
                            <Image
                                src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
                                height="50px"
                                alt="Add Coach Kitt to Slack"
                                m="0 auto"
                            />
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Layout>
    )
}

export default IndexPage

const Header = styled(Flex)`
    background: ${(props: any) => props.theme.colors.offwhite} url(${Wave}) center;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    min-height: 375px;
    flex-direction: column;
`

const Mascot = styled(Flex)`
    padding-top: 3rem;
    width: 500px;
    padding-top: 4rem;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 100%;

    &:before {
        content: '';
        background: ${(props: any) => props.theme.colors.offwhite};
        position: absolute;
        left: 0;
        right: 0;
        top: 0;

        width: 100%;
        height: 250px;
        z-index: -1;
        border-top-left-radius: ${(props: any) => props.theme.radii.rounded};
        border-top-right-radius: ${(props: any) => props.theme.radii.rounded};
    }
`
