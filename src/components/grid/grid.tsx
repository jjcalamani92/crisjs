import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Main } from "../component";

interface Grid {
  data: any[]
  url: string
  // data: Category[] | Section[] | Featured[] | Item[] | IMark[];
}
export const Grid: FC<Grid> = ({ data, url }) => {  
  return (
    <Main>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-3 md:gap-6`}>
        {data.map((d, i) => (
          <Card data={d} key={i} url={url}/>
        ))}
      </div>
    </Main>
  )
}

interface Card {
  data: any
  url: string
}

const Card: FC<Card> = ({ data, url }) => {
  const { push } = useRouter()

  return (
    <div className="shadow-lg p-2 ">
      <Link href={`${url}/${data.href}`}>
        <a>
          <div className="w-full bg-white rounded-sm overflow-hidden leading-none">
            <Image
              src={data.imageSrc}
              alt={data.title}
              width={210}
              height={210}
              objectFit={'cover'}
            />
          </div>
          <div className="py-2 flex justify-between">
            <h3 className="text-xs md:text-sm text-gray-700">
              {data.title}
            </h3>
          </div>
        </a>
      </Link>
      {/* <Button bg="none" content='eliminar' click={() => onDelete(_id)} /> */}
    </div>
  )
}