import styles from './styles'

import { Button } from '../button'
import { Record } from '../record'
import { CalendarIcon, ClockIcon, DumbbellIcon, EditIcon, FlameIcon } from '../../../assets/icons'
import { Pressable, Text, View } from 'react-native'

export const RecordTraining = () => {
  const onPressEdit = () => {
    console.log('Edit')
  }

  const onPressRegister = () => {
    console.log('Register')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Registre seu treino</Text>

        <Pressable style={styles.headerButton} onPress={onPressEdit}>
          <EditIcon />
        </Pressable>
      </View>

      <View style={styles.records}>
        <View style={styles.recordRow}>
          <Record title={'Data'} value={'08/09/2023'}>
            <CalendarIcon />
          </Record>
          <Record title={'Horário'} value={'19:30'}>
            <ClockIcon />
          </Record>
        </View>
        <View style={styles.recordRow}>
          <Record title={'Treino'} value={'A'}>
            <DumbbellIcon />
          </Record>
          <Record title={'Número de treinos'} value={'143'}>
            <FlameIcon />
          </Record>
        </View>
      </View>

      <Button title={'Registrar'} onPress={onPressRegister} />
    </View>
  )
}
