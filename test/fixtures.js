module.exports =
  { Point:
    { valid:
      { location:
        { type: 'Point'
        , coordinates: [ -0.439069, 51.6933176 ]
        }
      }
    , invalid:
      { location:
        { type: 'Point'
        , coordinates: [ -0.439069 ]
        }
      }
    }
  , LineString: {}
  , Polygon: {}
  , MultiPoint: {}
  , MultiLineString: {}
  , MultiPolygon: {}
  , GeometryCollection: {}
  , unknown:
    { location:
      { type: 'something else!'
      , coordinates: []
      }
    }
}

