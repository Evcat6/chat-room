import { useRef, useEffect } from 'react'
import { Chat, Auth } from './components'

function App() {


  const user = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_TOKEN) || "{}");

  const scroll = useRef<HTMLDivElement>(document.createElement("div"))

  useEffect(() => {
    setTimeout(() => {
      scroll.current.scrollIntoView({behavior: "smooth"})
    }, 3000)
  }, [])


  return (
    <>
      {!user.user? <Auth/>: <Chat />}
    </>
  )
}

export default App;
