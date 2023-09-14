import styles from './styles'

import { Text, View } from 'react-native'

export const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Olá, Emily!</Text>

          <View style={styles.headerProfile}></View>
        </View>
      </View>
    </>
  )
}
