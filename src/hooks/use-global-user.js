import { useCallback, useEffect } from 'react'
import { getItem, setItem } from '../core/async-storage'
import createGlobalState from 'react-create-global-state'

const [_useGlobalUser, GlobalUserProvider] = createGlobalState({})

const useGlobalUser = () => {
  const [globalUser, _setGlobalUser] = _useGlobalUser()

  const getGlobalUser = useCallback(async () => {
    _setGlobalUser(await getItem())
  }, [getItem])

  useEffect(() => {
    getGlobalUser()
  }, [getGlobalUser])

  const setState = async value => {
    await setItem(value)
    _setGlobalUser(value)
  }

  return [globalUser, setState]
}

export { useGlobalUser, GlobalUserProvider }
