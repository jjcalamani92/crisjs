import { Children, ISite } from "../interfaces/site";

export const pathsAlls = (sitesAll:ISite[]) => {
  let pathsAll = sitesAll.map((data: ISite) => (
    [
      {
        path: `/dashboard/sites/${data.domain}`
      },
      data.route
        &&
        data.route.map((data0: Children) => (
          [
            {
              path: `/dashboard/sites/${data.domain}/${data0.href}`
            },
            data0.children
              &&
              data0.children.map((data1: Children) => (
                [
                  {
                    path: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}`
                  },
                  data1.children
                    &&
                    data1.children.map((data2: Children) => (
                      {
                        path: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}/${data2.href}`
                      }
                    ))
                    
                ]
              ))
             
          ]
        ))
        
    ]
  ))
  return pathsAll.flat(10).map((data: { path: string }) => data).filter((data: { path: string }) => data !== null)
}

export const tree = (sitesAll:ISite[]) => {
  let sites = sitesAll.map((data: ISite) => (
    {
      title: data.data.title,
      key: `/dashboard/sites/${data.domain}`,
      children:
        data.route
        &&
        data.route.map((data0: Children) => (
          {
            title: data0.name,
            key: `/dashboard/sites/${data.domain}/${data0.href}`,
            children:
              data0.children
              &&
              data0.children.map((data1: Children) => (
                {
                  title: data1.name,
                  key: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}`,
                  children:
                    data1.children
                    &&
                    data1.children.map((data2: Children) => (
                      {
                        title: data2.name,
                        key: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}/${data2.href}`,
                        children:
                          data2.children
                          &&
                          data2.children.map((data3: Children) => (
                            {
                              title: data3.name,
                              key: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}/${data2.href}/${data3.href}`,

                            }))


                      }
                    ))

                }
              ))

          }
        ))

    }
  ))
  return sites
}
export const paths = (site:ISite) => {
  let path = site.route.map((data0: Children) => (
    [
      data0.children
        ?
        data0.children.map((data1: Children) => (
          [{
            path: `/${data0.href}/${data1.href}`
          },
          data1.children.map((data2: Children) => (
            [{
              path: [data0.href, data1.href, data2.href]
            },
            data2.children.map((data3: Children) => ({
              path: [data0.href, data1.href, data2.href, data3.href]
            }))
            ]
          )),
          ]
        ))
        :
        {
          path: data0.href === 'home' ? '/' : `/${data0.href}`
        },
    ]
  ))
  return path.flat(10).map((data: { path: any }) => data)

}