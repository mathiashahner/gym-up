import * as React from 'react'
import { colors } from '../styles'
import Svg, { Path } from 'react-native-svg'

export const DumbbellIcon = props => {
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
        d='M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 001.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 001.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 00-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 00-1.06 1.06c-.052.192-.052.424-.052.889zM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 001.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 001.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 00-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 00-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9z'
        stroke={colors.gray}
        strokeWidth={1.5}
      />
      <Path d='M5 10H4a2 2 0 100 4h1m4-2h6m4 2h1a2 2 0 100-4h-1' stroke={colors.gray} strokeWidth={1.5} />
    </Svg>
  )
}
