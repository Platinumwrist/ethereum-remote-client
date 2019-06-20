module.exports = {
  container: {
    general: {
      marginRight: '5px',
      padding: '5px 7px',
      borderRadius: '10px'
    },
    active: {
      background: 'gray'
    },
    inactive: {
      background: 'inherit'
    }
  },

  title: {
    general: {
      fontWeight: '500',
      letterSpacing: '0.5px'
    },
    active: {
      color: 'white'
    },
    inactive: {}
  },

  dropdownContainer: {
    background: '#fff',
    minWidth: '275px',
    position: 'absolute',
    top: '5px',
    borderRadius: '5px',
    boxShadow: 'grey 0px 0px 2px 1px',
    zIndex: '9999'
  },

  dropdownItem: {
    borderBottom: '1px solid #dedede'
  }
}