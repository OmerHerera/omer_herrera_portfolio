import { useState, useEffect } from 'react';

export function useTypedText(text: string, speed: number, delayTime?: number) {
  const [textState, setTextState] = useState("")
  const chars = text.split("")
  let interval = speed

  if(textState.length === 0 && delayTime)
    interval = speed + delayTime

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextState((prevText) => {
        if (prevText.length !== chars.length) {
          const newText = prevText.concat(chars[prevText.length])
          return newText
        }
        return prevText
      })
    }, interval)
    return () => clearTimeout(timer)
  })

  return textState
}