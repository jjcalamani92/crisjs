import { FC } from "react"
import { Hero } from "../../components/hero"
import { Children } from "../../interfaces/site"
interface Home {
  children0: Children
}
export const Home:FC<Home> = ({children0}) => {
  // console.log('home', children0.content.body);
  return(
    // <Hero body={children0.body} />
      // <Brand />
      <h1>Home</h1>

  )
}