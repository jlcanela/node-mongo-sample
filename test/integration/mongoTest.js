const chai = require('chai');
chai.use(require('chai-as-promised'));
const Promise = require('bluebird').Promise;
const should = chai.should();

//process.env.NODE_ENV = 'test';

const mongoClient = require('../../src/lib/mongo.js');

describe('mongo test', function(){
  it('should access to collection', function(){
    mongoClient().collection('test_insert')
    .then(function(collection){
      return collection.insert({a:2});
    }).then(function(docs){
      return collection.count();
    }).should.eventually.be.eql(0);
  });
})
