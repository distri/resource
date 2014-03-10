Resource
========

Resource provides Sounds, Sprites, SpriteSheet support, and uploading and
reading resource packs.

TODO: The main conflict is that to serialize and deserialize data requires
game object data to "know" about global state such as resources.

Maybe each GameObject knows it's own resource provider?

Maybe just use a shared resource namespace...

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
