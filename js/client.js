var mimirGetTime = function() {
  return '3';
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: '/images/mimir.svg',
      text: 'Estimate Size',
      condition: 'always',
      callback: function (t) {
        return t.card().then(card => alert('hello world!'))
      }
    }];
  },
  'card-badges': function (t, opts) {
    mimirGetTime = mimirGetTime;
    return [{
      text: mimirGetTime,
      color: 'sky'
    }];
  }
});
