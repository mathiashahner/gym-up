import styles from './styles'

import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated'

const duration = 200
const initialOffset = 5

export const Record = ({ title, value, icon, hasAnimation = false }) => {
  const offset = useSharedValue(initialOffset)

  useEffect(() => {
    if (hasAnimation) {
      offset.value = withRepeat(withTiming(1, { duration }), -1, true)
    }
  }, [hasAnimation])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
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
