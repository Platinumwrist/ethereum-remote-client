import React, { PureComponent } from 'react'
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
              ? <span style={{ fontWeight: 'bold', color: '#a6a6a6', fontSize: '18px', marginRight: '5px' }}>+</span>
              : null
            }
            {title}
            <div style={{ display: 'inline-block', width: '12px', marginLeft: '7px', color: '#a6a6a6', position: 'relative', top: '1px' }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                <path d='M16 19.047l11.04-9.2a1.5 1.5 0 0 1 1.92 2.305l-12 10a1.5 1.5 0 0 1-1.92 0l-12-10a1.5 1.5 0 1 1 1.92-2.304l11.04 9.2z' />
              </svg>
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