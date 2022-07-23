import React from 'react'
import { useState } from 'react'
import MediaCard from './MediaCard'

function HomePage() {
    const [data, setData] = useState({})
  return (
    <div>
        <MediaCard props={data}/>
        {/* <MediaCard/>
        <MediaCard/>
        <MediaCard/> */}

    </div>
  )
}

export default HomePage