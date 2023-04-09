import React, { ReactElement } from 'react'

type HeadingProps = {
    title: string
}

const Heading = (props: HeadingProps): ReactElement => {
  return (
    <h1>
      <h2>{props.title}</h2>
    </h1>
  )
}

export default Heading