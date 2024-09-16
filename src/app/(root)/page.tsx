import { HeaderBox, TotalBalanceBox, RightSidebar, Recenttransaction } from '@/components'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { dummyTest, getSectorChartData } from '@/lib/actions/dashboard.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  // const accounts = await getSectorChartData({clientId:3693,view:'ACCOUNT'})
  const accounts = await dummyTest();

  if(!accounts) return;
  
  return (
    <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type = "greeting"
              title = "Welcome"
              user = {`${loggedIn?.firstName} ${loggedIn?.lastName}`||'Guest'}
              subtext = "Manage your Finances with ease and more securely"
            />
            <div className='grid grid-cols-2 gap-6'>
              <TotalBalanceBox 
                accounts = {[]}
                holding = {'Sector Allocation'}
                totalCurrentBalance = {12760084.00}
              />
              <TotalBalanceBox 
                accounts = {[]}
                holding = {'Companies Allocation'}
                totalCurrentBalance = {12760084.00}
              />
            </div>
        </header>
        <Recenttransaction />
    </div>
    <RightSidebar 
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 12760084.00},{currentBalance: 9468866.00}].slice(0,2)}
    />
</section>
  )
}

export default Home