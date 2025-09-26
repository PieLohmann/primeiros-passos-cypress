import userData from '../fixtures/userData'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage' 


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage

describe('Login Orange HRM Test', () => {

  it('User Info Update - Fail', () => { 
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
  loginPage.checkAccessInvalid()
  })

  it('User Info Update - Sucsses', () => { 
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
  })
  
})