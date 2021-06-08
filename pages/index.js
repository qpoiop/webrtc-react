import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import Layout from '@/components/layout'

export default function Index () {
  const [ session, loading ] = useSession()
  const [ content, setContent ] = useState()

  // this hook correspond to lifecycle 
  // express componentDidMount, componentDidUpdate and componentWillUnmount instead
  useEffect(() => {
    
  })

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    
  }

  return (
    <Layout>

    </Layout>
  )
}