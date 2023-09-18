import { Text } from 'react-native'
import { useGlobalUser } from '../../hooks'

export const HomeScreen = () => {
  const [user] = useGlobalUser()

  return <Text>{user.name}</Text>
}
