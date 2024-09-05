import { HeaderBox, TotalBalanceBox, RightSidebar } from '@/components'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Anshul', lastName:'Badoni', email:'anshul@gmail.com'};
  
  return (
    <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type = "greeting"
              title = "Welcome"
              user = {loggedIn?.firstName||'Guest'}
              subtext = "Manage your Finances with ease and more securely"
            />
            <TotalBalanceBox 
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance = {12760084.00}
            />
        </header>
        RECENT TRANSACTION
    </div>
    <RightSidebar 
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 12760084.00},{currentBalance: 9468866.00}]}
    />
</section>
  )
}

export default Home