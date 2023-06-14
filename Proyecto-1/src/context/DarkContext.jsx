import { createContext, useState } from "react"

export const DarkContext = createContext()
export const DarkContextPrvider = ({children}) => {
    const [isDark, setIsDark] = useState()
    const switchMode = ()=>{
        setIsDark(!isDark)
    }
    let data={
        switchMode
    }
  return (
    <DarkContext.Provider value={data}>{children}</DarkContext.Provider>
  )
}
