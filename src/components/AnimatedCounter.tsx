'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount : number}) => {
  return (
    <div className='w-full'>
        <CountUp 
          start={0} 
          end={amount} 
          decimal=','
          prefix='₹'
          duration={2} />
    </div>
  )
}

export default AnimatedCounter