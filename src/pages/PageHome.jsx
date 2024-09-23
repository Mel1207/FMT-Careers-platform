import React from 'react'
import TestAcc from '../components/TestAcc'

const PageHome = () => {
  return (
    <div className='container'>
      <TestAcc title="Section 1" content="Content for section 1"/>
      <TestAcc title="Section 2" content="Content for section 2"/>
      <TestAcc title="Section 3" content="Content for section 3"/>
    </div>
  )
}

export default PageHome