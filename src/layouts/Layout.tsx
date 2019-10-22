import React from 'react'
import { ThemeProvider, CSSReset } from 'chakra'
import Theme from 'theme'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <div>
        <ThemeProvider theme={Theme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    </div>
)

export default Layout
