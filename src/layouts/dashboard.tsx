import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../components/component"

interface Dashboard {
  tree: DataNode[]
  children?: React.ReactNode;
}

export const Dashboard:FC<Dashboard> = ({ tree, children}) => {
  const {asPath} = useRouter()
  return (
    <Main>
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-5'>
        <div className='hidden lg:block col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />
        </div>
        <main className='col-span-4'>
          {children}
        </main>
      </div>
    </Main>
  )
}