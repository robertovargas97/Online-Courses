import React from 'react'

type PageTitleProps = {
  title: string
}
export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const component = (
    <>
      <h1 className="mt-4 text-center"> {title} </h1>
      <hr />
    </>
  )
  return component
}
