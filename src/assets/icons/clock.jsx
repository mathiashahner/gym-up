import * as React from 'react'
import { colors } from '../styles'
import Svg, { Path } from 'react-native-svg'

export const ClockIcon = props => {
  return (
    <Svg
      width='30px'
      height='30px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M12 7v5l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        stroke={colors.gray}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
