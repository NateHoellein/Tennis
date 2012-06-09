var Match = function() {
  var _scoreTable = {
    0: 15,
    15: 30,
    30: 40
  };

  var _score = {
    A: 0,
    B: 0,
    Duece: function() {
      return (this.A >= 40 && this.B >= 40) && (this.A === this.B);
    },

    Advantage: function() {
      console.log('A: ' + this.A + ' B: ' + this.B);
      if((this.A >= 40 && this.B >= 40) && (this.A > this.B)) {
        return 'A';  
      } else {
        return 'B';
      }
    }
  };

  var _point = function(player, callback) {
    if(player === 'A') {
      _score.A = (!_scoreTable[_score.A]) ? 
      _score.A += 10 : 
      _scoreTable[_score.A]; 
    } else {
      _score.B = (!_scoreTable[_score.B]) ?
      _score.B += 10 :
      _scoreTable[_score.B];
    }
    callback(_score);
  };

  return {
    point: _point
  };
};

exports = module.exports = Match;
