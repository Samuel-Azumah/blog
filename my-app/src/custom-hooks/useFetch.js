import { useState, useEffect } from 'react'

export const apiUrl = 'http://localhost:3000'

export const useFetch = (endPoint) => {
  const [data, setData] = useState(null)
  const [isPending, setPending] = useState(true)
  const [displayErrorMessage, setdisplayErrorMessage] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(`${apiUrl}/${endPoint}`)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not connect to the server')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setPending(false)
          setdisplayErrorMessage(null)
        })
        .catch((err) => {
          setdisplayErrorMessage(err.message)
          setPending(false)
          setData(null)
        })
    }, 1000)
  }, [`${apiUrl}/${endPoint}`])
  return { data, isPending, displayErrorMessage }
}
