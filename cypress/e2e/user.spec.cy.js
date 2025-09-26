
import userData from '../fixtures/userData'
import LoginPage from '../pages/loginPage' 
import DashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage ()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()

describe('Orange HRM Test', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    MenuPage.accessMyInfo()
    MyInfoPage.fillPersonalDetails(chance.first(),chance.last(),chance.last())
    MyInfoPage.fillEmployDetails('EmployId','OtherId','DriversLicence','2025-09-09','012345','98765')
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm()
  })
})
