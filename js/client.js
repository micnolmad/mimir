var mimirGetTime = function(thing) {
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
    return [{
      text: mimirGetTime(4,t)
      ,color: 'sky'
      ,condition: 'always'
    }];
  }
});
