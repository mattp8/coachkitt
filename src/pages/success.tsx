import React, { useEffect, useState } from 'react'
import { Router, Location } from '@reach/router'
import queryString from 'query-string'
import axios from 'axios'

// components
import { Image, Flex, Text, Heading } from 'chakra'
import { Link } from 'components'

// Sections
import Layout from '../layouts/Layout'

// Assets
import Logo from 'assets/images/kitt-full-logo-orange.svg'

const SuccessPage = ({ location, search }) => {
    const [state, setState] = useState({ loading: true, data: null, error: false })
    useEffect(() => {
        const getData = async code => {
            try {
                const { data } = await axios.get(
                    `https://coachkitt.herokuapp.com/install/auth?code=${code}`
                )
                setState({ ...state, loading: false, data, error: false })
            } catch (e) {
                setState({ ...state, loading: false, error: true })
            }
        }

        if (search.code) {
            getData(search.code)
        } else {
            setState({ ...state, loading: false, error: true })
        }

        return
    }, [search])

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
                <Link to="/">
                    <Image src={Logo} alt="Coach Kitt" m="0 auto" mb="4rem" />
                </Link>
                {!state.loading && (
                    <Flex
                        maxWidth="630px"
                        direction="column"
                        align="center"
                        textAlign="center"
                        px="2rem"
                    >
                        <Heading
                            fontFamily="heading"
                            color="black400"
                            mb="1rem"
                            fontSize={['display1', 'display2']}
                        >
                            {state.error ? 'Uh oh. Invalid Code.' : 'You did it!'}
                        </Heading>
                        <Text
                            fontFamily="body"
                            color="black300"
                            fontSize={['body', 'body', 'subtitle']}
                            mb="3rem"
                        >
                            {state.error
                                ? 'Looks like that Slack authentication isn\'t valid anymore. Please try the "add to Slack" button again.'
                                : `Congratulations you’ve added Kitt to your workspace. Check Slack for a
                        message from Kitt, he’ll have your first assignment soon.`}
                        </Text>
                        {/* <Text color="black200" fontSize="small">
                            Have any problems?{' '}
                            <Link to="mailto:hello@coachkitt.com">Contact us</Link>
                        </Text> */}
                    </Flex>
                )}
            </Flex>
        </Layout>
    )
}

const withLocation = ComponentToWrap => props => (
    <Location>
        {({ location }) => (
            <ComponentToWrap
                {...props}
                location={location}
                search={location.search ? queryString.parse(location.search) : {}}
            />
        )}
    </Location>
)

export default withLocation(SuccessPage)
