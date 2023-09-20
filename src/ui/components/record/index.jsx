import styles from './styles'

import { Text, View } from 'react-native'

export const Record = ({ title, value, children }) => {
  return (
    <View style={styles.record}>
      {children}

      <View>
        <Text style={styles.recordTitle}>{title}</Text>
        <Text style={styles.recordValue}>{value}</Text>
      </View>
    </View>
  )
}
