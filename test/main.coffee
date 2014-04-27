Resource = require "../main"

describe "Resource", ->
  it "should expose Control", ->
    assert Resource.Control

  it "should expose Music", ->
    assert Resource.Music

  it "should expose Sprite", ->
    assert Resource.Sprite

  it "should expose Sound", ->
    assert Resource.Sound

  it "should allow adding of resources", ->
    assert Resource.add
      images:
        duder: "http://example.com/rad.png"

    assert Resource.add
      images:
        test2: "http://example.com/aeuheuerorcuheue"

  it "should do some preloading", ->
    assert Resource.preload
      progress: (p) ->
        console.log p
      complete: ->
        console.log "badical"

  