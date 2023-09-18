import { StyleSheet } from 'react-native'
import { fonts, metrics } from '../../../assets/styles'

const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: '#7B60DB',
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
    fontSize: fonts.size.large,
    fontFamily: fonts.family.bold,
    color: '#F0F2F6',
  },
  headerProfile: {
    borderWidth: 3,
    borderColor: '#F0F2F6',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
})

export default styles
