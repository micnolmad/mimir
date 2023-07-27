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
  }
  ,'card-badges': function (t, opts) {
    return t.card("all").then(function (card) {
      console.log(card('start'));
    });
  }
});
