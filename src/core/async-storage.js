import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_STORAGE_KEY = '@gym-up:user'

export const getItem = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_STORAGE_KEY)
    return value ? JSON.parse(value) : {}
  } catch (error) {
    console.log(error)
  }
}

export const setItem = async value => {
  try {
    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}
