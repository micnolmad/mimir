window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: '/images/mimir.svg',
      text: 'Estimate Size',
      condition: 'always',
      callback: function (t) {
        return t.card().then(card => alert('hello world'))
      }
    }];
  },
  'card-badges': function (t, opts) {
  return t.get('card')
  .then(function (data) {
    console.log(JSON.stringify(data, null, 2))
  })
});
