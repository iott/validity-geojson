var pointValidator = require('./lib/point-validator')

module.exports = function (propertyName, errorName, object, callback) {
  var value = object[propertyName]
    , type = value.type
    , valid

  switch (type) {
    case 'Point':
      valid = pointValidator(value)
      break
    case 'LineString':
      break
    case 'Polygon':
      break
    case 'MultiPoint':
      break
    case 'MultiLineString':
      break
    case 'MultiPolygon':
      break
    case 'GeometryCollection':
      break
    default:
      return callback(null, 'Type \'' + type + '\' not supported.')
      break
  }
  check = valid ? null : errorName + ' must be a valid ' + type
  callback(null, check)
}
