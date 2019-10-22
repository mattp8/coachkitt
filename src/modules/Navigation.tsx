import React from 'react'
import { Link } from 'components'

// components
import { Box, Flex, Image, List } from 'chakra'

// Assets
import Logo from 'assets/images/metomic-full-purple.svg'

const navLinks = [
    {
        to: '/products',
        name: 'Products'
    },
    {
        to: '/pricing',
        name: 'Pricing'
    },
    {
        to: '/blog',
        name: 'Blog'
    },
    {
        to: '/contact',
        name: 'Contact'
    },
    {
        to: '/lgoin',
        name: 'Login'
    }
]

const Navigation = () => (
    <Flex maxHeight="48px" maxWidth="1140px" m="0 auto" py="16px" align="center">
        <Box>
            <Image height="16px" src={Logo} alt="Metomic" />
        </Box>
        <Flex as="nav" ml="auto" align="center">
            <Flex as={List} isInline align="center">
                {navLinks.map(({ name, to }) => (
                    <Box as="li" ml="3rem">
                        <Link fontSize="small" to={to}>
                            {name}
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Flex>
    </Flex>
)

export default Navigation
