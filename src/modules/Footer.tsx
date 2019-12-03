import React from 'react'
import { Box, Text, List, ListItem } from 'chakra'
import { Link } from 'components'

export default () => (
    <Box p="2rem 1rem">
        <Box
            maxWidth="1140px"
            m="0 auto"
            display={['block', 'block', 'flex']}
            alignItems="baseline"
            textAlign={['center', 'center', 'left']}
        >
            <Box>
                <Text fontSize="body" fontWeight="semibold" fontFamily="body" color="black">
                    Coach Kitt
                </Text>
            </Box>
            <Box marginLeft="auto" pt={['1rem', '1rem', 0]}>
                <List styleType="none" display={['block', 'block', 'flex']}>
                    <ListItem mr="1rem">
                        <Link
                            color="black"
                            fontWeight="normal"
                            to="https://www.redrockinternational.com/en/privacy-policy/"
                        >
                            Privacy
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="mailto:hello@coachkitt.com">hello@coachkitt.com</Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    </Box>
)
