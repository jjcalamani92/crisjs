import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { ISite } from "../../interfaces/site";

import { Button } from "../component";
const data = [1, 2, 3, 4, 5, 6]

interface CardSite {
  data: any
}
export const GridSiteSkeleton = () => {
  return (
    // <Main>
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
      {data.map((d, i) => (
        <CardSite data={d} key={i} />
      ))}
      <div className="shadow-lg p-2 ">
        <div className="w-full bg-white rounded-sm">
          {<Skeleton
            height={210} />}
        </div>
        <div className="py-2 flex justify-between">
          <h3 className="text-xs md:text-sm text-gray-700">
            {<Skeleton />}
          </h3>
          {<Skeleton height={50} />}
        </div>
      </div>
    </div>
    // </Main>
  )
}

const CardSite: FC<CardSite> = ({ data }) => {
  const { push, pathname, query, asPath } = useRouter()

  const onDelete = async (id: string) => {
    // Swal.fire({
    //   title: '¿Está seguro?',
    //   text: "¡No podrás revertir esto!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: '¡Sí, bórralo!'
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     await graphQLClientS.request(REMOVE_SITE, { _id: id })
    //     push(`${asPath}`)
    //   }
    // })
  }
  // const {title, imageSrc, imageAlt} = data.data
  // const {_id, domain} = data

  return (
    <div className="shadow-lg ">
      <Skeleton
        height={210} />
      <Skeleton height={16} />
      <Skeleton height={30} />
    </div>
  )
}
