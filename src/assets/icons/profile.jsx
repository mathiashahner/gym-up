import * as React from 'react'
import { colors } from '../styles'
import Svg, { Path } from 'react-native-svg'

export const ProfileIcon = props => {
  return (
    <Svg width='80%' height='80%' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
        d='M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 002.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 001.004 1.109.99.99 0 00.993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 00.993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218'
        transform='translate(-180 -2159) translate(56 160)'
        fill={colors.white}
        stroke='none'
        strokeWidth={1}
        fillRule='evenodd'
      />
    </Svg>
  )
}
