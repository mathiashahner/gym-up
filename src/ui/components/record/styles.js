import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../assets/styles'

const styles = StyleSheet.create({
  record: {
    gap: 5,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordTitle: {
    color: colors.gray,
    fontSize: fonts.size.small,
    fontFamily: fonts.family.bold,
  },
  recordValue: {
    color: colors.black,
    fontSize: fonts.size.regular,
    fontFamily: fonts.family.bold,
  },
})

export default styles
