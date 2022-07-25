import { DataNode } from "antd/lib/tree"
import { Children, ISite } from "../interfaces/site"

export const getDataSite = (sitesAll:ISite[], domain: string):ISite => {
  let site = sitesAll.filter((data: {domain: string}) => data.domain === domain)
  return site[0]
}