const chai = require('chai');
chai.use(require('chai-as-promised'));
const Promise = require('bluebird').Promise;
const should = chai.should();
const co = require('co');

process.env.NODE_ENV = 'test';

const mongoClient = require('../../src/lib/mongo.js');

describe('mongo test', function(){
  it('should access to collection', function(){
    return co(function *(){
      const millis = (new Date()).getTime();
      const coll = yield mongoClient().collection(`test_insert_${millis}`);
      const r = yield coll.insert({a:2});
      const cn = yield coll.count();
      yield coll.drop();
      return cn;
    }).should.eventually.be.eql(1);
  });
})
