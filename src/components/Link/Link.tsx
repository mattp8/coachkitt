import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

// components
import { Box } from 'chakra'

interface LocalLinkProps {
    to: string
    children: React.ReactNode
    target?: string
    className: string
}

const Link = ({ to, className, children, ...props }: LocalLinkProps) => {
    const isExternalLink = to.startsWith('http') || to.startsWith('mailto:')

    if (isExternalLink) {
        return (
            <_Link as={GatsbyLink} {...{ className, to }} {...props}>
                {children}
            </_Link>
        )
    } else {
        return (
            <_Link as="a" {...{ className, to }} {...props}>
                {children}
            </_Link>
        )
    }
}

export default Link

export const LinkDefaultProps: Partial<LocalLinkProps> = {
    className: undefined,
    color: 'primary',
    as: 'a'
}

Link.defaultProps = LinkDefaultProps

const _Link = styled(Box)`
    text-decoration: none;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-word;
    font-weight: bold;
    position: relative;

    &:after {
        content: '';
        display: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        color: #000;
    }
`
