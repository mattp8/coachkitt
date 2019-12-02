import React from 'react'
import { graphql } from 'gatsby'
import { SLACK_INSTALL_URL, SLACK_BUTTON } from 'data'
import styled from '@emotion/styled'
import { Link, Card } from 'components'
import { Box, Image, Flex, Text, Heading } from 'chakra'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Wave from 'assets/images/header-wave.svg'
import WordMark from 'assets/images/kitt-text-logo-offwhite.svg'
import KittIcon from 'assets/images/kitt_icon.png'

const IndexPage = ({ data: { datoCmsHomePage } }) => {
    const {
        headline,
        subtitle,
        features,
        tutorialSections,
        tutorialTitle,
        aboutText,
        aboutTitle,
        clientLogos,
        qA
    } = datoCmsHomePage

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
                            {headline || 'Lead great teams'}
                        </Heading>
                        <Text
                            fontSize={['body', 'body', 'subtitle']}
                            fontFamily="body"
                            color="text"
                            mb="2rem"
                        >
                            {subtitle}
                        </Text>
                        <Link to={SLACK_INSTALL_URL}>
                            <Image
                                src={SLACK_BUTTON}
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
                        {features.map(({ title, subtitle, buttonText, link }) => (
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
                                        {subtitle}
                                    </Text>
                                    <Link color="black400" to={link}>
                                        {buttonText || 'Get Started →'}
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
                    {tutorialTitle}
                </Heading>

                <Box maxWidth="1140px" m="0 auto">
                    <Box
                        display={['block', 'block', 'flex']}
                        flexWrap="wrap"
                        mx="-1rem"
                        px="1rem"
                        justifyContent="center"
                    >
                        {tutorialSections.map(({ title, description, image }, index) => {
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
                                            {description}
                                        </Text>
                                    </Box>
                                    <Box
                                        width={[1, 1, 7 / 12]}
                                        textAlign="center"
                                        p="1rem"
                                        marginLeft={[0, 0, isOddRow ? 0 : '2rem']}
                                    >
                                        <Box backgroundColor="primary" borderRadius="8px" p="2rem">
                                            <Image
                                                src={image.url}
                                                width="100%"
                                                borderRadius="4px"
                                                alt={image.alt || image.title || title}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    <Box py="3rem">
                        <Box p="1rem" width={[1, 1, 7 / 12]} m="0 auto" textAlign="center">
                            <Heading
                                as="h2"
                                fontSize={['heading3', 'heading3', 'display2']}
                                textAlign="center"
                                fontFamily="heading"
                                color="black"
                                mb="1rem"
                            >
                                {aboutTitle}
                            </Heading>
                            <Text color="black400" fontFamily="body" fontSize="body">
                                {aboutText}
                            </Text>
                        </Box>
                        <Box
                            p="3rem 1rem 1rem"
                            width={[1, 1, 8 / 12]}
                            m="0 auto"
                            textAlign="center"
                        >
                            <Text
                                color="black400"
                                textTransform="uppercase"
                                fontFamily="body"
                                fontSize="tiny"
                                fontWeight="medium"
                            >
                                WE’VE WORKED WITH TEAMS AROUND THE WORLD
                            </Text>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                pt="2rem"
                                px="-2rem"
                            >
                                {clientLogos.map(({ alt, title, url }) => (
                                    <Box
                                        px="2rem"
                                        py={['1rem', '1rem', 0]}
                                        display="flex"
                                        justifyContent="center"
                                    >
                                        <Image
                                            src={url}
                                            alt={alt || title}
                                            width="auto"
                                            maxHeight="40px"
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box bg="offwhite" py="6rem" px="1rem">
                <Heading
                    as="h3"
                    fontSize={['heading3', 'heading3', 'display2']}
                    fontFamily="heading"
                    textAlign="center"
                >
                    Questions
                </Heading>
                <Box display="flex" flexWrap="wrap" justifyContent="center" pt="3rem">
                    <Box
                        bg="white"
                        width={[1, 1, 10 / 12, 8 / 12]}
                        p={['1rem', '2rem']}
                        borderRadius="medium"
                    >
                        <Box display={['block', 'block', 'flex']} flexWrap="wrap" mx="-1rem">
                            {qA.map(({ question, answer }) => (
                                <Box p="1rem 2rem" width={[1, 1, 1 / 2]}>
                                    <Text
                                        fontFamily="body"
                                        fontWeight="bold"
                                        fontSize="subtitle"
                                        color="black"
                                        mb="1rem"
                                    >
                                        {question}
                                    </Text>
                                    <Text fontFamily="body" fontSize="body" color="black300">
                                        {answer}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export const query = graphql`
    query HomePageQuery {
        datoCmsHomePage {
            headline
            subtitle
            features {
                title
                subtitle
                buttonText
                link
            }
            tutorialTitle
            tutorialSections {
                title
                description
                image {
                    alt
                    title
                    url
                }
            }
            aboutTitle
            aboutText
            clientLogos {
                alt
                title
                url
            }
            qA {
                question
                answer
            }
        }
    }
`

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
