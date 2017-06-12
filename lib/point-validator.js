var coordValidator = require('./coord-validator')

module.exports = function (value) {
  var coords = value.coordinates
    , length = coords.length
    , lng = coords[0]
    , lat = coords[1]

  if (!coords || !length || length !== 2 || !lat || !lng) {
    return false
  } else if (!coordValidator(lat, lng)) {
    return false
  }
  return true
}
