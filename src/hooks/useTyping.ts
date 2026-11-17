import { useEffect, useState } from 'react'
export function useTyping(words: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(() => {
      if (!del && n === w.length) return setDel(true)
      if (del && n === 0) { setDel(false); return setI((i + 1) % words.length) }
      setN(n + (del ? -1 : 1))
    }, !del && n === w.length ? pause : del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [n, del, i, words, speed, pause])
  return words[i].slice(0, n)
}
