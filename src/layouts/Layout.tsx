import React from 'react'
import { ThemeProvider, CSSReset } from 'chakra'
import Theme from 'theme'

import Footer from 'modules/Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <div>
        <ThemeProvider theme={Theme}>
            <CSSReset />
            {children}
            <Footer />
        </ThemeProvider>
    </div>
)

export default Layout
