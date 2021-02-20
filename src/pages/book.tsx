import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { graphql } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  width: 100%;
  max-width: 58ch;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-m) var(--space-m);
  display: grid;
  row-gap: var(--space-m);
  font-size: var(--font-m);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const ImageOfMe = styled(Image)`
  border-radius: var(--border-radius);
`

const SubTitle = styled.h1`
  font-size: var(--font-l);
  line-height: 3.2rem;
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.4rem;
  word-break: break-word;
`

export default function AboutPage({ data }) {
  return (
    <Container>
      <Seo title="About" />

      <Title>Bookshelf</Title>



      <Paragraph>
      Books i've liked enough to recommend to friends or colleagues.
      </Paragraph>
      
      <Paragraph>
      <SubTitle>Non Fiction</SubTitle>
      <br/>
          <ul>
            <li>Bad Blood - John Carreyrou</li>
            <li>Atomic Habits - James Clear</li>
            <li>Why We Sleep - Matthew Walker</li>
             <li> What I Talk About When I Talk About Running - Haruki Murakami</li>
             <li>Man’s Search for Meaning - Viktor Frankl</li>
             <li>The Monk who sold his ferrari - Robin Sharmat</li>
             <li>Deep Work - Cal Newport</li>
            <li>Into Thin Air - Jon Krukauer's</li>
            <li>The Virtue of Selfishness - Ayn Rand</li>
             <li>The Innovators - Walter Isaacson</li>
             <li>The Quest - Daniel Yergin</li>
             <li>The Road Less Traveled  -  Scott Peck</li>
             <li>7 Habits of Highly Effective People - Stephen Covey</li>

            
          </ul>
         
         <br/>
            <br/>
            <div >
            <SubTitle>Tech Books </SubTitle>
            <ul>
            <li>Clean Code -  Robert C. Martin</li>
            <li>Cracking The Coding Interview - Gayle Laakmann McDowell</li>
            <li>Clean Architecture - Robert C. Martin</li>
             <li>Database Design Solutions - Rod Stephens</li>
             <li>The Effective Engineer - Edmond Lau</li>
            
          </ul>
          </div>


      </Paragraph>
    </Container>
  )
}

