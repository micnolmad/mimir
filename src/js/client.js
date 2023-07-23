TrelloPowerUp.initialize({
  'card-buttons': function (t, opts){
    return [{
      icon: 'https://mimir-po-trello.netlify.app/src/images/mimir.svg',
      text: 'Estimate Size',
      condition: 'always',
      callback: function (t) {
        return t.card().then(card => alert('hello world'))
      }
    }];
  },
});
