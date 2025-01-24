import React from 'react'
import styled from 'styled-components'

const About = () => {

    const Page = styled.div `

        margin-top: 20px;
        font-size: 18px;
        color: red;
    
    `

    return (
        <Page>
            <h1>About Page</h1>
            <p>Welcome to About Page</p>
        </Page>
    )
}

export default About
