import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="config-controller-container">
          <div className="controllers-body">
            <h1 className="app-title ">Layout</h1>
            <ul className="checkbox-inputs-list">
              <li className="input-list-item">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="content"
                  onClick={onToggleShowContent}
                  defaultChecked={showContent}
                />
                <label className="checkbox-label" htmlFor="content">
                  Content
                </label>
              </li>
              <li className="input-list-item">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="leftNavbar"
                  onClick={onToggleShowLeftNavbar}
                  defaultChecked={showLeftNavbar}
                />
                <label className="checkbox-label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </li>
              <li className="input-list-item">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="rightNavbar"
                  onClick={onToggleShowRightNavbar}
                  defaultChecked={showRightNavbar}
                />
                <label className="checkbox-label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
