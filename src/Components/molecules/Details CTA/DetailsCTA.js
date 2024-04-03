import React from 'react'
import Type from '../../atoms/Product details/Type'
import Condition from '../../atoms/Product details/Condition'
import Properties from '../../atoms/Product details/Properties'
import Description from '../../atoms/Product details/Description'

const DetailsCTA = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Type/>
      <Condition/>
      <Properties/>
      <Description/>
    </div>
  )
}

export default DetailsCTA
