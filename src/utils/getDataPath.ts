import { Children, ISite } from "../interfaces/site"

export const getDataPaths = (sitesAll:ISite[]) => {
  let pathsAll = sitesAll.map((data: ISite) => (
    [
      {
        asPath: `/dashboard/sites/${data.domain}`
      },
      data.route
        &&
        data.route.map((data0: Children) => (
          [
            {
              asPath: `/dashboard/sites/${data.domain}/${data0.href}`
            },
            data0.children
              &&
              data0.children.map((data1: Children) => (
                [
                  {
                    asPath: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}`
                  },
                  data1.children
                    &&
                    data1.children.map((data2: Children) => (
                      {
                        asPath: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}/${data2.href}`
                      }
                    ))
                    
                ]
              ))
             
          ]
        ))
        
    ]
  ))
  return pathsAll.flat(10).map((data: { asPath: string }) => data).filter((data: { asPath: string }) => data !== null)
}