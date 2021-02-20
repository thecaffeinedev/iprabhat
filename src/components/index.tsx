import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"

import BlogPostCard from "./BlogPostCard"
import CodeBlock from "./CodeBlock"
import Header from "./Header"
import Input from "./Input"
import ReadingProgress from "./ReadingProgress"
import Seo from "./Seo"
import SocialList from "./SocialList"
import TabBar from "./TabBar"
import YouTube from "./YouTube"

export {
  BlogPostCard,
  CodeBlock,
  Header,
  Input,
  ReadingProgress,
  Seo,
  SocialList,
  TabBar,
  YouTube
}

export const Title = styled.h1`
  font-size: 4.8rem;
`

export const Subtitle = styled.h2`
  font-size: var(--font-l);
  line-height: 2.8rem;
`

export const Paragraph = styled.p`
  font-size: var(--font-s);
  line-height: 2.8rem;
`

export const Button = styled.button`
  padding: var(--space-s);
  padding-top: calc(var(--font-padding) + var(--space-s));
  border-radius: 40px;
  background: var(--primary-color);
  color: var(--default-text-color);
  font-size: var(--font-s);
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: var(--background-color);
  }
`

