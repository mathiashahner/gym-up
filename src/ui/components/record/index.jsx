import styles from './styles'

import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated'

export const Record = ({ title, value, icon }) => {
  const sharedValue = useSharedValue(-1.5)

  useEffect(() => {
    sharedValue.value = withRepeat(withTiming(1), -1, true)
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sharedValue.value * 1.5}deg` }],
  }))

  return (
    <Animated.View style={[styles.record, animatedStyle]}>
      {icon}

      <View>
        <Text style={styles.recordTitle}>{title}</Text>
        <Text style={styles.recordValue}>{value}</Text>
      </View>
    </Animated.View>
  )
}
