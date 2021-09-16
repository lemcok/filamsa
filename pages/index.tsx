import type { NextPage } from 'next'
import { Home } from '../components/Home'
import { Meta } from '../components/meta/Meta'

const index: NextPage = () => {
  return (
    <>
      <Meta />
      <Home />
    </>
  )
}

export default index
