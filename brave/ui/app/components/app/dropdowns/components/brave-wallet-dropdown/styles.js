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
    minWidth: '200px',
    position: 'absolute',
    top: '5px',
    borderRadius: '5px',
    boxShadow: '2px 2px 2px 2px gray'
  },

  dropdownItem: {
    borderBottom: '1px solid gray'
  }
}