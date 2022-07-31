import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Swal from "sweetalert2";
import { DELETE_CHILDREN_0, DELETE_CHILDREN_1, DELETE_CHILDREN_2, DELETE_CHILDREN_3, DELETE_CHILDREN_4, DELETE_CHILDREN_5 } from "../../graphql";
import { Children } from "../../interfaces/site";
import { graphQLClientS } from "../../swr/graphQLClient";
import { getQuery } from "../../utils/function";

import { Button, Main } from "../component";

interface GridSection {
  data: Children[]
}
export const GridSection: FC<GridSection> = ({ data }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
      {data?.map((d, i) => (
        <CardSection data={d} key={i} />
      ))}
    </div>
  )
}


interface CardSection {
  data: Children
}

export const CardSection: FC<CardSection> = ({ data }) => {
  const { replace, pathname, query, push, asPath } = useRouter()
  const url = getQuery(asPath)
  
  const onDelete = async (uid: string) => {

    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        if (url.length === 4) {
          await graphQLClientS.request(DELETE_CHILDREN_0, { _id: url[2], input: { 'children_uid_0': uid } })
          push(`${asPath}`)
        } else if (url.length === 5) {
          await graphQLClientS.request(DELETE_CHILDREN_1, { _id: url[2], input: { 'children_uid_0': url[4], 'children_uid_1': uid } })
          push(`${asPath}`)
        } else if (url.length === 6) {
          await graphQLClientS.request(DELETE_CHILDREN_2, { _id: url[2], input: { 'children_uid_0': url[4], 'children_uid_1': url[5], 'children_uid_2': uid } })
          push(`${asPath}`)
        } else if (url.length === 7) {
          await graphQLClientS.request(DELETE_CHILDREN_3, { _id:url[2], input: { 'children_uid_0': url[4], 'children_uid_1': url[5], 'children_uid_2': url[6], 'children_uid_3': uid } })
          push(`${asPath}`)
        } else if (url.length === 8) {
          await graphQLClientS.request(DELETE_CHILDREN_4, { _id: url[2], input: { 'children_uid_0': url[4], 'children_uid_1': url[5], 'children_uid_2': url[6], 'children_uid_3': url[7], 'children_uid_4': uid } })
          push(`${asPath}`)
        } else if (url.length === 9) {
          await graphQLClientS.request(DELETE_CHILDREN_5, { _id: url[2], input: { 'children_uid_0': url[4], 'children_uid_1': url[5], 'children_uid_2': url[6], 'children_uid_3': url[7], 'children_uid_4': url[8], 'children_uid_5': uid } })
          push(`${asPath}`)
        }
      }
    })
  }

  const { name, href, imageSrc, imageAlt, uid } = data
  return (
    <div className="shadow-lg p-2 ">
      <Link href={`${asPath}/${href}`}>
        {/* <Link href={`/${path}/${query.id}/${href}`}> */}
        <a>
          <div className="w-full bg-white rounded-sm overflow-hidden leading-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={210}
              height={210}
              objectFit={'cover'}
            />
          </div>
          <div className="py-2 flex justify-between">
            <h3 className="text-xs md:text-sm text-gray-700">
              {name}
            </h3>
          </div>
        </a>
      </Link>
      <Button bg="none" content='eliminar' click={() => onDelete(uid)} />
    </div>
  )
}