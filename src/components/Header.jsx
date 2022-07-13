// import { Link } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'

import { BrowserRouter } from 'react-router-dom'

const leftNav = [
  {
    display: "Mua mã thẻ",
    path: "/"
  },
  {
    display: "Đổi thẻ cào",
    path: "/exchange"
  },
  {
    display: "Tin tức",
    path: "/news"
  }
]

const rightNav = [
  {
    display: "Đăng nhập",
    path: "/log-in",
    icon: <FaSignInAlt />,
  },
  {
    display: "Đăng ký",
    path: "/log-up",
    icon: <FaUserPlus />,
  }
]

const Header = () => {

  return (
    <BrowserRouter>

      <div className="header">
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <div className="header-logo">
          {/* <Link to="/"> */}
          <a href="/">
            <img className="logo" src="https://thecaosieure.com/storage/userfiles/images/thecao/logo-default.jpg" alt="" />
          </a>
          {/* </Link> */}
        </div>

        <div className="left-nav-header">
          {
            leftNav.map((item, index) =>
              <div key={index} className="nav-item nav-left-item">
                {/* <Link to={item.path}> */}
                <a href={item.path}>
                  <span>{item.display}</span>
                </a>
                {/* </Link> */}
              </div>
        )
          }
      </div>

      <div className="right-nav-header">
        {
          rightNav.map((item, index) =>
            <div key={index} className="nav-item nav-right-item">
              {/* <Link to={item.path}> */}
              <a href={item.path}>
                <span>{item.icon}</span>
                <span>{item.display}</span>
              </a>
              {/* </Link> */}
            </div>
          )
        }
      </div>
    </div>
    </BrowserRouter >
  )
}

export default Header
