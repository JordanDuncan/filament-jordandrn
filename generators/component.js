exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/components/' + arg)) {
    Filament.exit('Component ' + arg + ' already exists.');
  }

  Filament.askList('Connect the component to Redux?', ['Yes', 'No'], (res) => {
    let isRedux = 'redux';
    if (res === 'No') {
      isRedux = 'noredux';
    }

    Filament.createDir('app/components/' + arg);
    Filament.createFile('app/components/' + arg + '/index.js', 'screenAndComponent/index.' + isRedux + '.js', {
      name: arg,
      path: 'components'
    });
    Filament.createFile('app/components/' + arg + '/styles.js', 'screenAndComponent/styles.js', {
      name: arg,
      path: 'components'
    });
  });
};