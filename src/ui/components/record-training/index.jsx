import styles from './styles'

import { Button } from '../button'
import { Record } from '../record'
import { useEffect, useState } from 'react'
import { useGlobalUser } from '../../../hooks'
import { Pressable, Text, View } from 'react-native'
import { getFormattedDate, getFormattedTime, getNextTraining } from '../../../core'
import { CalendarIcon, ClockIcon, DumbbellIcon, EditIcon, FlameIcon } from '../../../assets/icons'

const initialValues = {
  dateTime: new Date(),
  training: 'A',
  trainingCount: 0,
}

export const RecordTraining = () => {
  const [user, setUser] = useGlobalUser()
  const [handleEdit, setHandleEdit] = useState(false)
  const [records, setRecords] = useState(initialValues)

  useEffect(() => {
    if (user?.trainings) {
      setRecords({
        ...records,
        trainingCount: user.trainingCount + 1,
        training: getNextTraining(user.trainings, user.lastTraining),
      })
    }
  }, [user])

  const onPressEdit = () => {
    setHandleEdit(!handleEdit)
  }

  const onPressRegister = () => {
    setUser({
      ...user,
      lastTraining: records.training,
      trainingCount: records.trainingCount,
      trainingRecords: [...user.trainingRecords, records],
    })
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
        <Record title={'Data'} value={getFormattedDate(records.dateTime)} icon={<CalendarIcon />} />
        <Record title={'Horário'} value={getFormattedTime(records.dateTime)} icon={<ClockIcon />} />
        <Record title={'Treino'} value={records.training} icon={<DumbbellIcon />} />
        <Record title={'Número de treinos'} value={records.trainingCount} icon={<FlameIcon />} />
      </View>

      <Button title={'Registrar'} onPress={onPressRegister} />
    </View>
  )
}
