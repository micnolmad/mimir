var mimirGetTime = function(thing,t) {
  console.log(t);
  return thing;
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: '/images/mimir.svg'
      ,text: 'Estimate Size'
      ,condition: 'always'
      ,callback: function (t) {
        return t.card().then(card => alert('hello world!'))
      }
    }];
  },
  'card-badges': function (t, opts) {
    return t
    .card('name')
    .get('name')
    .then(function (cardName) {
      console.log('TEST'+cardName);
      return [{
            text: mimirGetTime(1,t)
            ,color: 'sky'
            ,condition: 'always'
          }];

    }
  )
  }
});
