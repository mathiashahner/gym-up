import styles from './styles'

import { useGlobalUser } from '../../../hooks'
import { ProfileIcon } from '../../../assets/icons'
import { Pressable, Text, View } from 'react-native'

export const Header = () => {
  const [user] = useGlobalUser()

  const onPressProfile = () => {
    console.log('onPressProfile')
  }

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Olá, {user?.name}!</Text>

          <Pressable style={styles.headerProfile} onPress={onPressProfile}>
            <ProfileIcon />
          </Pressable>
        </View>
      </View>
    </View>
  )
}
