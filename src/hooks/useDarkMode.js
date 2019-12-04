import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode')
    var body = document.body
    useEffect(() => {
        darkMode === true ? body.classList.add('dark-mode') : (body.classList.remove('dark-mode'))
    }, [darkMode]); 

    return [darkMode, setDarkMode]

}

