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

      <Title>About</Title>

      <ImageOfMe fluid={data.file.childImageSharp.fluid} />


      <Paragraph>
      My name is Prabhat Kumar Sahu. Currently I am staying in Hyderabad. 
      <br/>
      I work mainly as a Machine Learning Engineer but I can also work with Full Stack Web Dev ( Django + React). 
      <br/>

      <br/>
      <Paragraph>

      <Paragraph>

      My technical interests include software design, applying machine learning & 
      deep learning in real-world applications, web development, automation and computer vision. 
      And I enjoy working with Python stack and JavaScript.
      </Paragraph>


      </Paragraph>
      
      </Paragraph>

      <Paragraph>
      When I'm not hacking away on a project, I enjoy watching tv series, writing, learning new things, and working out.
      </Paragraph>
      <Paragraph>
      <SubTitle>Timeline</SubTitle>
      <br/>
          <ul>
            <li><b>2020 August</b>  - DeepEdge.ai, Hyderabad - Machine Learning Engineer</li>
            <li><b>2019 June - 2020 June</b>  - Frolic, Hyderabad - ML Engineer</li>
            <li><b>2018 May - 2018 July </b>  - Central University Of Rajasthan - Machine Learning Intern</li>
             <li><b>2015-2019</b> - Sambalpur University Institute Of Information Technology, Burla,Odisha - B.Tech in Computer Science Engineering </li>
          </ul>
         
         <br/>
          <Paragraph>
            Everything I have learned and know will be documented here. I owe it all to countless people who have freely shared their knowledge with the world. I want to give back while I continue to learn on my Journey to become a better Developer.
            </Paragraph>
            <br/>
            <div >
            <SubTitle>In case you're wondering, this site </SubTitle>
            <ul>
              <li>Hosted proudly through <a href="https://www.netlify.com/" target="_blank">Netlify</a>.</li>
              <li>Designed and developed on a <a href="" target="_blank">Mac</a></li>
              <li>Written using my favorite text-editor <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>.</li>
              <li>Handcrafted using the awesome <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>.</li>
              <li>Uses the beautiful <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.</li>
              <li>Uses handcrafted icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</li>
            </ul>
          </div>


      </Paragraph>
    </Container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "general/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
