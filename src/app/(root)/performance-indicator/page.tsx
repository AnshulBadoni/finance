import { HeaderBox, TotalBalanceBox ,BarChart} from '@/components'
import React from 'react'

const page = () => {
  return (
    <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type = "title"
              title = "Performance Indicator"
              subtext = "Manage your Finaances with ease and more securely"
              />
              <div className='grid grid-cols-2 gap-6'>
              <TotalBalanceBox 
              accounts = {[]}
              holding = {'Sector Allocation'}
              totalCurrentBalance = {14512729.28}
              title='Amount Invested (Portfolio Value@Cost)'
            />
            <TotalBalanceBox 
              accounts = {[]}
              holding = {'Companies Allocation'}
              totalCurrentBalance = {12921502.50}
              title='Current Portfolio Value'
            />
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-1 total-balance'>
                  <BarChart />
                </div>
                <div className='col-span-1 total-balance'>
                  <BarChart />
                </div>
            </div>

        </header>
    </div>
    </section>
  )
}

export default page