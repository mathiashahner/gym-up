import styles from './styles'

import { View } from 'react-native'
import { RecordTraining } from '../../components'

export const HomeScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <RecordTraining />
      </View>
    </View>
  )
}
