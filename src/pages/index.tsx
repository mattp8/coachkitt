import React from 'react'
import styled from '@emotion/styled'
import { Box, Image, Flex, Text, Heading } from 'chakra'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Wave from 'assets/images/header-wave.svg'
import WordMark from 'assets/images/kitt-text-logo-offwhite.svg'

const IndexPage = () => {
    return (
        <Layout>
            <Header justify="center" pt="3rem">
                <Image alt="Coach Kitt" height="32px" src={WordMark} />
            </Header>
            <Flex justify="center" bg="offwhite" height="100vh" width="100%">
                <Box maxWidth={[null, '600px']} textAlign="center">
                    <Heading
                        fontFamily="heading"
                        color="black400"
                        mb="1rem"
                        fontWeight="bold"
                        fontSize="display1"
                        as="h1"
                    >
                        Lead great teams
                    </Heading>
                    <Text fontSize="subtitle" fontFamily="body" color="text" mb="2rem">
                        Your very own team coach for Slack. Kitt helps you build a high performing
                        team and community of people that don’t want to leave.
                    </Text>
                    <Image
                        src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
                        height="50px"
                        alt="Add Coach Kitt to Slack"
                        m="0 auto"
                    />
                </Box>
            </Flex>
        </Layout>
    )
}

export default IndexPage

const Header = styled(Flex)`
    background: ${(props: any) => props.theme.colors.offwhite} url(${Wave}) center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
`
