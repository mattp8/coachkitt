import React from 'react'
import styled from '@emotion/styled'
import { Link, Card } from 'components'
import { Box, Image, Flex, Text, Heading } from 'chakra'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Wave from 'assets/images/header-wave.svg'
import WordMark from 'assets/images/kitt-text-logo-offwhite.svg'
import KittIcon from 'assets/images/kitt_icon.png'
import KittOnboarding from 'assets/images/kittOnboarding.jpg'
import KittBasics from 'assets/images/kittBasics.jpg'
import KittFeedback from 'assets/images/kittFeedback.jpg'

const IndexPage = () => {
    const installUrl =
        'https://slack.com/oauth/authorize?client_id=729386734450.735260681362&scope=commands,bot,incoming-webhook,channels:read,users.profile:read'

    const features = [
        {
            title: 'Improve your team’s core skills',
            description: 'Get weekly actions, nudges, and surveys to develop a range of skills.',
            link: installUrl
        },
        {
            title: 'Be inspired by world class leaders',
            description: 'Learn from lessons and insights from business and world leaders.',
            link: installUrl
        },
        {
            title: 'Develop culture and community',
            description:
                'Foster your values and mission across your company through regular activity.',
            link: installUrl
        }
    ]

    const tutorial = [
        {
            title: 'Add Kitt to Slack',
            subtitle:
                'You’ll receive a message from Kitt who’ll take you through an easy onboarding to get your team set up.',
            image: KittOnboarding
        },
        {
            title: 'Get started with the Basics',
            subtitle:
                'Kitt will kick off with a 3 week plan for building up the basics – from communication to trust.',
            image: KittBasics
        },
        {
            title: 'Get feedback and progress',
            subtitle:
                'Kitt follows your progress and regularly asks for feedback so you can measure your progress.',
            image: KittFeedback
        }
    ]
    return (
        <Layout>
            <Box
                bg="offwhite"
                minHeight="100vh"
                maxWidth="100%"
                overflowX="hidden"
                pb={['3rem', '3rem', '6rem']}
            >
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
                        <Link to={installUrl}>
                            <Image
                                src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
                                height="50px"
                                alt="Add Coach Kitt to Slack"
                                m="0 auto"
                            />
                        </Link>
                    </Box>
                </Flex>
                <Box maxWidth="1140px" m="0 auto" mt="2rem">
                    <Box
                        display={['block', 'block', 'flex']}
                        mx="-1rem"
                        px="1rem"
                        justifyContent="center"
                    >
                        {features.map(({ title, description, link }) => (
                            <Box p="1rem" width="100%" key={title}>
                                <Card
                                    boxShadow="el100"
                                    backgroundColor="white"
                                    p="2rem"
                                    borderRadius="8px"
                                >
                                    <Heading color="primary" fontSize="24px" mb="1rem">
                                        {title}
                                    </Heading>
                                    <Text fontFamily="body" color="text" fontSize="body" mb="1rem">
                                        {description}
                                    </Text>
                                    <Link color="black400" to={link}>
                                        Get Started →
                                    </Link>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box py={['3rem', '3rem', '6rem']}>
                <Heading
                    as="h2"
                    fontSize={['heading3', 'heading3', 'display2']}
                    textAlign="center"
                    fontFamily="heading"
                    color="black"
                    px="1rem"
                    m="0 auto"
                    width={['100%', '100%', 8 / 12, 7 / 12]}
                >
                    Get started with Kitt in seconds
                </Heading>

                <Box maxWidth="1140px" m="0 auto">
                    <Box
                        display={['block', 'block', 'flex']}
                        flexWrap="wrap"
                        mx="-1rem"
                        px="1rem"
                        justifyContent="center"
                    >
                        {tutorial.map(({ title, subtitle, image }, index) => {
                            const isOddRow = index % 2 !== 0
                            return (
                                <Box
                                    display={['block', 'block', 'flex']}
                                    key={index}
                                    flexDirection={isOddRow ? 'row-reverse' : 'row'}
                                    justifyContent="center"
                                    my={['3rem', '3rem', '6rem']}
                                >
                                    <Box
                                        width={[1, 1, 4 / 12]}
                                        marginLeft={[0, 0, isOddRow ? '2rem' : 0]}
                                        p="1rem"
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                    >
                                        <Heading
                                            mb="1rem"
                                            fontFamily="heading"
                                            color="black"
                                            fontSize={['heading1', 'heading2', 'heading2']}
                                        >
                                            {title}
                                        </Heading>
                                        <Text color="black400" fontFamily="body" fontSize="body">
                                            {subtitle}
                                        </Text>
                                    </Box>
                                    <Box
                                        width={[1, 1, 7 / 12]}
                                        textAlign="center"
                                        p="1rem"
                                        marginLeft={[0, 0, isOddRow ? 0 : '2rem']}
                                    >
                                        <Box backgroundColor="primary" borderRadius="8px" p="2rem">
                                            <Image src={image} width="100%" borderRadius="4px" />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    <Box pt="3rem">
                        <Box p="1rem" width={[1, 1, 7 / 12]} m="0 auto" textAlign="center">
                            <Heading
                                as="h2"
                                fontSize={['heading3', 'heading3', 'display2']}
                                textAlign="center"
                                fontFamily="heading"
                                color="black"
                                mb="1rem"
                            >
                                Built by experts in experiential learning
                            </Heading>
                            <Text color="black400" fontFamily="body" fontSize="body">
                                Kitt has been designed by a team of specialists who have helped
                                organizations around the world create high performing teams and
                                meaningful change.
                            </Text>

                            <Box mt="4rem">
                                <Text
                                    color="black400"
                                    textTransform="uppercase"
                                    fontFamily="body"
                                    fontSize="tiny"
                                    fontWeight="medium"
                                >
                                    WE’VE WORKED WITH TEAMS AROUND THE WORLD
                                </Text>
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
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
