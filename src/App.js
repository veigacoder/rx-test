import { Home } from './pages'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export const App = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])
  return (
    <>
      <Home />
    </>
  )
}

export default App
