import * as React from 'react'
import { colors } from '../styles'
import Svg, { Path } from 'react-native-svg'

export const CalendarIcon = props => {
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
        d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2z'
        stroke={colors.gray}
        strokeWidth={1.5}
      />
      <Path d='M7 4V2.5M17 4V2.5M2.5 9h19' stroke={colors.gray} strokeWidth={1.5} strokeLinecap='round' />
      <Path
        d='M18 17a1 1 0 11-2 0 1 1 0 012 0zM18 13a1 1 0 11-2 0 1 1 0 012 0zM13 17a1 1 0 11-2 0 1 1 0 012 0zM13 13a1 1 0 11-2 0 1 1 0 012 0zM8 17a1 1 0 11-2 0 1 1 0 012 0zM8 13a1 1 0 11-2 0 1 1 0 012 0z'
        fill={colors.gray}
      />
    </Svg>
  )
}
