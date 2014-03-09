Resource
========

Resource provides Sounds, Sprites, SpriteSheet support, and uploading and
reading resource packs.

Example
-------

This looks like a terrible example...

>     Resource = require("resource")
>     data = require "./resources"
>     {Sprite, Sound} = Resource(data)

    Resource = (data) ->
      # TODO: Wrap with load by name resource resolvers
      Sprite: require "sprite"
      Sound: require "sound"

    module.exports = Resource
