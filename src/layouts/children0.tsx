import { useRouter } from "next/router";
import { FC } from "react"
import Link from 'next/link'
import ReactMarkdown from "react-markdown";
import { Hero } from "../components/hero";
import { Site } from "../interfaces/siteV1";
import { getChildren0, getPathsC0 } from "../utils/functionV3";
import { Blogs } from "./pages/blog";
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import rehypeRaw from "rehype-raw";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
interface Props {
  sites: Site[]
}

export const Children0: FC<Props> = ({ sites }) => {
  const { asPath, query } = useRouter()
  const children0 = getChildren0(sites, query)!
  
  switch (asPath) {
    case getPathsC0(sites, asPath):
      return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {children0.body.title}
        </ReactMarkdown>
      )
    default:
      return null;
  }
}