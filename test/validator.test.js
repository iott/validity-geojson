var assert = require('assert')
  , validator = require('../validator')
  , fixtures = require('./fixtures')

describe('GeoJSON validator', function () {
  console.log(fixtures)
  it('should error with unknown types', function (done) {
    validator('location', 'Location', fixtures.unknown, function (err, errors) {
      assert.equal(errors, 'Type \'' + fixtures.unknown.location.type + '\' not supported.')
      done()
    })
  })

  describe('pointValidator', function () {
    it('should validate valid Points', function (done) {
      validator('location', 'Location', fixtures.Point.valid, function (err, errors) {
        assert.equal(errors, null)
        done()
      })
    })

    it('should error on invalid Points', function (done) {
      validator('location', 'Location', fixtures.Point.invalid, function (err, errors) {
        assert.equal(errors, 'Location must be a valid Point')
        done()
      })
    })
  })

  describe('Validator', function () {
    it('should validate valid ', function (done) {})

    it('should error on invalid', function (done) {})
  })


  it('should', function () {})

  it('should', function () {})

  it('should', function () {})
})
