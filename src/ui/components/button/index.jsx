import styles from './styles'

import { Pressable, Text } from 'react-native'

export const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}
