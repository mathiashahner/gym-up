import styles from './styles'

import { Text, View } from 'react-native'

export const Record = ({ title, value, icon }) => {
  return (
    <View style={styles.record}>
      {icon}

      <View>
        <Text style={styles.recordTitle}>{title}</Text>
        <Text style={styles.recordValue}>{value}</Text>
      </View>
    </View>
  )
}
