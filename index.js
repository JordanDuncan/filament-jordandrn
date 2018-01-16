const component = require('./generators/component');
const screen = require('./generators/screen');
const network = require('./generators/network');

exports.cli = {
  _func: {
    desc: 'Test CLI',
    run: () => {
      console.log('👋  Hello!');
    }
  },

  new: {
    screen: {
      _func: {
        desc: 'Generate a screen',
        run: screen.gen,
        arg: {
          required : true,
          desc : 'screen_name'
        }
      }
    },
    component: {
      _func: {
        desc: 'Generate a component',
        run: component.gen,
        arg: {
          required : true,
          desc : 'component_name'
        }
      }
    },
    network: {
      _func: {
        desc: 'Generate a network controller',
        run: network.gen,
        arg: {
          required : true,
          desc : 'network_name'
        }
      }
    }
  }
}