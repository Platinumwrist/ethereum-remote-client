const NetworkIndicator = require('../../../../../../ui/app/components/app/network')

import React from 'react'
import classnames from 'classnames'

import AppHeader from '../../../../../../ui/app/components/app/app-header/app-header.component'
import BraveWalletDropdown from '../dropdowns/components/brave-wallet-dropdown/brave-wallet-dropdown.component'

module.exports = class BraveAppHeader extends AppHeader {
  constructor (props) {
    super(props)
  }

  state = {
    activeDropdown: ''
  }

  componentDidMount () {
    window.document.onclick = (e) => {
      if (!document
          .querySelector('.app-header__logo-container')
          .contains(e.target)) {
        this.setState({ activeDropdown: '' })
      }
    }
  }

  get browserItems () {
    return [
      (<div>{'Test item 1'}</div>),
      (<div>{'Test item 2'}</div>),
      (<div>{'Test item 3'}</div>),
      (<div>{'Test item 4'}</div>)
    ]
  }

  get connectItems () {
    return [
      (<div>{'Test item 1'}</div>),
      (<div>{'Test item 2'}</div>),
      (<div>{'Test item 3'}</div>),
      (<div>{'Test item 4'}</div>)
    ]
  }

  handleDropdownClick = (dropdownKey) => {
    if (!dropdownKey) {
      return
    }

    this.setState({ activeDropdown: dropdownKey })
  }

  render () {
    const {
      network,
      provider,
      isUnlocked,
      hideNetworkIndicator,
      disabled,
    } = this.props    

    return (
      <div
        className={classnames('app-header', { 'app-header--back-drop': isUnlocked })}>
        <div className="app-header__contents">
          <div className="app-header__logo-container">
            <BraveWalletDropdown
              title={'Browser'}
              children={this.browserItems}
              active={this.state.activeDropdown === 'browser'}
              onSetActive={this.handleDropdownClick.bind(this, 'browser')}
            />
            <BraveWalletDropdown
              connect={true}
              title={'Connect Wallet'}
              children={this.connectItems}
              active={this.state.activeDropdown === 'connectWallet'}
              onSetActive={this.handleDropdownClick.bind(this, 'connectWallet')}
            />
          </div>
          <div className="app-header__account-menu-container">
            {
              !hideNetworkIndicator && (
                <div className="app-header__network-component-wrapper">
                  <NetworkIndicator
                    network={network}
                    provider={provider}
                    onClick={event => this.handleNetworkIndicatorClick(event)}
                    disabled={disabled}
                  />
                </div>
              )
            }
            { this.renderAccountMenu() }
          </div>
        </div>
      </div>
    )
  }
}
