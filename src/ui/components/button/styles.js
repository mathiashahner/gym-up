import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '../../../assets/styles'

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.radius,
    backgroundColor: colors.purple,
  },
  title: {
    color: colors.white,
    fontSize: fonts.size.regular,
    fontFamily: fonts.family.bold,
  },
})

export default styles
