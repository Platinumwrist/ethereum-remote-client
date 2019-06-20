import React, { PureComponent } from 'react'
import CaratDownIcon from './assets/carat-down'
import PlusIcon from './assets/plus'
import styles from './styles'

module.exports = class BraveWalletDropdown extends PureComponent {
  constructor (props) {
    super(props)
  }

  state = {
    dropdownOpen: false
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({ dropdownOpen: nextProps.active })
    }
  }

  handleClick = () => {
    const { onSetActive } = this.props

    if (onSetActive) {
      onSetActive()
    }
  }

  getDropdown = () => {
    const { children } = this.props

    if (!children || children.length === 0) {
      return null
    }

    const display = this.state.dropdownOpen ? 'block' : 'none'

    return (
      <div 
        style={
          {
            display,
            ...styles.dropdownContainer
          }
        }
      >
        {children.map((child, i) => {
          return (
            <div
              key={`item-${i}`}
              style={styles.dropdownItem}
            >
              {child}
            </div>
          )
        })}
      </div>
    )
  }

  render () {
    const {
      active,
      connect,
      title
    } = this.props

    const activeKey = active ? 'active' : 'inactive'

    return (
      <div>
        <div
          onClick={this.handleClick}
          style={
            {
              ...styles.container.general,
              ...styles.container[activeKey]
            }
          }
        >
          <span
            style={
                {
                ...styles.title.general,
                ...styles.title[activeKey]
                }
            }
          >
            {
              connect
              ? <div style={styles.plusContainer}>
                  <PlusIcon />
                </div>
              : <div style={styles.leftPadding}></div>
            }
            {title}
            <div style={styles.caratContainer}>
              <CaratDownIcon />
            </div>
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          {this.getDropdown()}
        </div>
      </div>
    )
  }
}