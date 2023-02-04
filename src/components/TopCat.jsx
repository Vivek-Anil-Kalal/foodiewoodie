import { food } from "../assets"

import React from 'react'

const TopCat = () => {
  return (
    <div className="flex md:w-[120px] w-[80px] md:h-[120px] h-[80px] rounded-full drop-shadow">
        <img src="https://imgs.search.brave.com/0tdmk1CIhZq50iw3rW1pwFSB0y70RlkC_UmpNI-7r14/rs:fit:1000:1022:1/g:ce/aHR0cHM6Ly9jZG4z/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC85Ni83Mi9i/dXJnZXItaXNvbGF0/ZWQtY2FydG9vbi1k/ZXNpZ24tdmVjdG9y/LTMxODA5NjcyLmpw/Zw" alt="food" className="object-contain rounded-full " />
    </div>
  )
}

export default TopCat