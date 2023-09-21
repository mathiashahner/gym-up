import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_STORAGE_KEY = '@gym-up:storage'

const initialData = {
  name: 'Emily',
  height: 153,
  weight: 53.3,
  birthDate: '2001-01-23',
  image: 'https://avatars.githubusercontent.com/u/61355223?v=4',
  trainings: ['A', 'B', 'C'],
  lastTraining: 'A',
  trainingCount: 145,
  trainingRecords: [],
}

export const getItem = async () => {
  try {
    // await setItem(initialData)
    console.log(await AsyncStorage.getItem(USER_STORAGE_KEY))

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
