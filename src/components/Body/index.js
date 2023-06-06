import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="navbar">
      <h1 className="navbar-title">Left Navbar Menu</h1>
      <ul className="navbar-items-list">
        <li className="left-navbar-item">Item 1</li>
        <li className="left-navbar-item">Item 2</li>
        <li className="left-navbar-item">Item 3</li>
        <li className="left-navbar-item">Item 4</li>
      </ul>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="navbar">
      <h1 className="navbar-title">Right Navbar Menu</h1>
      <ul className="navbar-items-list">
        <li className="right-navbar-item">Ad 1</li>
        <li className="right-navbar-item">Ad 2</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="body-content-container">
      <h1 className="content-title">Content</h1>
      <p className="content-text">
        Lorem ipsum dolor sit amet, consectetur adipidcing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimum
        venia.m
      </p>
    </div>
  )

  return (
    <div className="body-container">
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <>
              {showLeftNavbar && renderLeftNavbar()}
              {showContent && renderContent()}
              {showRightNavbar && renderRightNavbar()}
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    </div>
  )
}

export default Body
