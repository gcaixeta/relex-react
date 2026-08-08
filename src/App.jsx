import { Text } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

const Demo = ({ paper }) => {
  const content = paper
    ? paper.title ?? JSON.stringify(paper)
    : 'Carregando...'

  return <Text textStyle="4xl">{content}</Text>
}

const backendUrl = "http://localhost:8880/paper"

export default function App() {
  const [paper, setPaper] = useState(null)

  useEffect(() => {
    const fetchPaper = async () => {
      const response = await fetch(backendUrl)
      const data = await response.json()
      setPaper(data)
    }
    fetchPaper()
  }, [])

  return <Demo paper={paper} />
}