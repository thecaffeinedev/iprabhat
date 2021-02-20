import React from "react"
import { styled } from "linaria/react"

import { ReactComponent as TwitterIcon } from "../images/icons/twitter.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedin.svg"
import { ReactComponent as InstagramIcon } from "../images/icons/instagram.svg"
import { ReactComponent as YoutubeIcon } from "../images/icons/youtube.svg"
import { ReactComponent as MediumIcon } from "../images/icons/medium.svg"

const Container = styled.div`
  grid-area: social;
  display: grid;
  justify-self: start;
  justify-items: start;
  align-items: start;
  grid-auto-flow: column;
  gap: var(--space-xs);
  transform: translateX(calc(-1 * var(--space-xs)));

  @media (min-width: 600px) {
    gap: var(--space-s);
  }
`

const Social = styled.a`
  padding: var(--space-xs);
  border-radius: 50%;
  display: inline-flex;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    fill: currentColor;

    @media (min-width: 600px) {
      width: 4rem;
      height: 4rem;
    }
  }
`

const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/thecaffeinedev",
    renderIcon: () => <TwitterIcon />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prabhat-kumar-sahu-b9a53674/",
    renderIcon: () => <LinkedInIcon />
  },
  {
    name: "GitHub",
    link: "https://github.com/thecaffeinedev",
    renderIcon: () => <GitHubIcon />
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/caffeinedev/",
    renderIcon: () => <InstagramIcon />
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC-756oKXdvH8GZEDF7GHIlw",
    renderIcon: () => <YoutubeIcon />
  },
  {
    name: "Medium",
    link: "https://medium.com/@thecaffeinedev",
    renderIcon: () => <MediumIcon />
  }

]

export default function SocialList() {
  return (
    <Container>
      {socials.map((social) => (
        <Social
          href={social.link}
          target="_blank"
          rel="noopener"
          aria-label={social.name}
          data-clickable="default"
        >
          {social.renderIcon()}
        </Social>
      ))}
    </Container>
  )
}
