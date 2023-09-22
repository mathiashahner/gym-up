import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '../../../assets/styles'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: metrics.radius,
    backgroundColor: colors.white,
    transform: [{ translateY: -35 }],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    padding: 10,
    fontSize: fonts.size.large,
    fontFamily: fonts.family.bold,
  },
  headerButton: {
    padding: 10,
  },
  records: {
    rowGap: 20,
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default styles
