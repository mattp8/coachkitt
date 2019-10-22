import React from 'react'
import { Global, css } from '@emotion/core'

export default () => (
    <Global
        styles={css`
            html {
                font-size: 16px;

                body {
                    margin: 0;
                    text-size-adjust: 100%;
                    font-family: Helvetica, 'Helvetica Neue', Arial, Sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #283444;
                    word-break: break-word;
                    box-sizing: border-box;
                }

                p {
                    font-family: Helvetica, 'Helvetica Neue', Arial, Sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1.4;
                    margin: 0;
                    margin-bottom: 1rem;
                    &:last-child {
                        margin: 0;
                    }
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-weight: bold;
                    margin-bottom: 0;

                    &:first-child {
                        margin-top: 0;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                h2 {
                    font-size: 2.5rem;
                }

                h1 {
                    font-size: 3rem;
                }
                h2 {
                    font-size: 2.5rem;
                }
                h3 {
                    font-size: 1.75rem;
                }
                h4 {
                    font-size: 1.5rem;
                }
                h5 {
                    font-size: 1.25rem;
                }
                h6 {
                    font-size: 1rem;
                }

                a {
                    text-decoration: none;

                    &:hover {
                        text-decoration: none;
                    }
                }

                ul,
                li {
                    padding: 0;
                    margin: 0;
                }

                button {
                    background: transparent;
                    border: none;
                    margin: 0;
                    padding: 0;
                    width: auto;
                    overflow: visible;
                    color: inherit;
                    font: inherit;
                    line-height: normal;
                    cursor: pointer;
                    outline: none;
                    width: 100%;

                    -webkit-font-smoothing: inherit;
                    -moz-osx-font-smoothing: inherit;

                    -webkit-appearance: none;

                    &:hover,
                    &:focus {
                        outline: none;
                        background: none;
                    }
                }
            }
        `}
    />
)
