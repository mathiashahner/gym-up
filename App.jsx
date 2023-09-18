import { StatusBar } from 'expo-status-bar'
import { Header } from './src/ui/components'
import { HomeScreen } from './src/ui/screens'
import { GlobalUserProvider } from './src/hooks'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

const App = () => {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  return (
    <GlobalUserProvider>
      {!loaded && !error ? null : (
        <>
          <StatusBar style='light' />
          <Header />
          <HomeScreen />
        </>
      )}
    </GlobalUserProvider>
  )
}

export default App
