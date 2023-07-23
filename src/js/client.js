window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts){
    return [{
      icon: '/src/images/mimir.svg',
      text: 'Estimate Size',
      condition: 'always',
      callback: function (t) {
        return t.card().then(card => alert('hello world'))
      }
    }];
  },
});
