import { useRouter } from "next/router"
import { FC, useState } from "react"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { ModalH } from "../../components/headlessui/modal"
import { ISite } from "../../interfaces/site"
import { getSite, getSiteDataForm, getSiteChildren0 } from "../../utils/functionV2"
import { getChildren0DataForm } from "../../utils/getSiteByUrl"

interface Pages {
  sites: ISite[]
}

export const Pages: FC<Pages> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <HeadingDashboard title='Páginas'/>
      <GridSection data={getSiteChildren0(sites, asPath)} />
      <ModalH open={open} setOpen={setOpen} >
        {/* <FormChildren data={getChildren0DataForm(sites, asPath)} /> */}
      </ModalH>
    </>
  )
}