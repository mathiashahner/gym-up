import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '../../../assets/styles'

const styles = StyleSheet.create({
  body: {
    height: '20%',
    backgroundColor: colors.darkWhite,
  },
  header: {
    backgroundColor: colors.purple,
    borderBottomStartRadius: metrics.radius,
    borderBottomEndRadius: metrics.radius,
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: fonts.size.veryLarge,
    fontFamily: fonts.family.bold,
    color: colors.white,
  },
  headerProfile: {
    borderWidth: 3,
    borderColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  headerProfileImage: {
    width: '100%',
    height: '100%',
  },
})

export default styles
