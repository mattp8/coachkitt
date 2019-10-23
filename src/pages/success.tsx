import React from 'react'

// components
import { Image, Flex, Text, Heading } from 'chakra'
import { Link } from 'components'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Logo from 'assets/images/kitt-full-logo-orange.svg'

const SuccessPage = () => {
    return (
        <Layout>
            <Flex
                height="100vh"
                minHeight="100%"
                width="100%"
                direction="column"
                align="center"
                pt="3rem"
                bg="offwhite"
            >
                <Image src={Logo} alt="Coach Kitt" m="0 auto" mb="4rem" />
                <Flex maxWidth="600px" direction="column" align="center" textAlign="center">
                    <Heading
                        fontFamily="heading"
                        color="black400"
                        mb="1rem"
                        fontSize={['display1', 'display2']}
                    >
                        You did it!
                    </Heading>
                    <Text
                        fontFamily="body"
                        color="black300"
                        fontSize={['body', 'body', 'subtitle']}
                        mb="3rem"
                    >
                        Congratulations you’ve added Kitt to your workspace. Check Slack for a
                        message from Kitt, he’ll have your first assignment soon.
                    </Text>
                    <Text color="black200" fontSize="small">
                        Have any problems? <Link to="mailto:hello@coachkitt.com">Contact us</Link>
                    </Text>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default SuccessPage
