import { StatusBar } from 'expo-status-bar'
import { HomeScreen } from './src/ui/screens'
import { Header } from './src/ui/components'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  return (
    <>
      {!loaded && !error ? null : (
        <>
          <StatusBar style='light' />
          <Header />
          <HomeScreen />
        </>
      )}
    </>
  )
}
