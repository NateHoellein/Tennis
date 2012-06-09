var should = require('should');
var Match = require('./../src/match');

describe('A Match', function() {
  it('should show score for player A', function(done) {
    var match = new Match();
    match.point('A', function(score) {
      score.A.should.equal(15);
      done();
    });
  });

  it('should show score for two "points"', function(done) {
    var match = new Match();
    match.point('A', function(score) { });
    match.point('A', function(score) {
      score.A.should.equal(30);
      done();
    });
  });

  it('should show score for three "points"', function(done) {
    var match = new Match();
    match.point('A', function(score) { });
    match.point('A', function(score) { });
    match.point('A', function(score) {
      score.A.should.equal(40);
      done();
    });
  });

  it('should show score for players', function(done) {
    var match = new Match();
    match.point('A', function(score) {
      score.A.should.equal(15);
      score.B.should.equal(0);
    });
    match.point('B', function(score) {
      score.A.should.equal(15);
      score.B.should.equal(15);
    });
    done();
  });
  
  it('should show duece for tie after 40 points', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('B', function(score) {
      score.A.should.equal(40);
      score.B.should.equal(40);
      score.Duece().should.be.true;
    });
    done();
  });

  it('should show advantage after a duece', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('A', function(score) {
      score.A.should.equal(50);
      score.B.should.equal(40);
      score.Duece().should.be.false;
      score.Advantage().should.equal('A');
    });
    done();
  });
  it('should show advantage after a duece, player B', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('B', function(score) {
      score.B.should.equal(50);
      score.A.should.equal(40);
      score.Duece().should.be.false;
      score.Advantage().should.equal('B');
    });
    done();
  });

  it('should show winner "A"', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('A', function(score) {
      score.A.should.equal(50);
      score.B.should.equal(30);
      score.Winner().should.equal('A'); 
    });
    done();
  });

  it('should show winner "B"', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('B', function(score) {
      score.B.should.equal(50);
      score.A.should.equal(30);
      score.Winner().should.equal('B'); 
    });
    done();
  });

  it('should show winner "A" after advantage "A"', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('A', function() {});
    match.point('A', function(score) {
      score.A.should.equal(60);
      score.B.should.equal(40);
      score.Winner().should.equal('A'); 
    });
    done();
  });

  it('should show winner "B" after advantage "B"', function(done) {
    var match = new Match();
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function() {});
    match.point('A', function() {});
    match.point('B', function() {});
    match.point('B', function(score) {
      score.B.should.equal(60);
      score.A.should.equal(40);
      score.Winner().should.equal('B'); 
    });
    done();
  });
});
