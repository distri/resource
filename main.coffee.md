Resource
========

Resource provides `Sound`, `Music`, and `Sprite` support.

TODO: Include Preloader

TODO: Spritesheets, Animations

TODO: Uploading to S3

Example
-------

>     Resource = require("resource")
>
>     data = require "./resources"
>     Resource.add(data)
>
>     {Music, Sprite, Sound} = Resource

    resources =
      images: {}
      sounds: {}
      music: {}

    Sprite = require "sprite"
    Sprite.loadByName = (name) ->
      url = resources.images[name]

      Sprite.fromURL(url)

    {Control, Music, Sound} = require "audio"

    Sound.play = (name) ->
      Sound.playFromURL(resources.sounds[name])

    Music.play = (name) ->
      Music.playFromURL(resources.music[name])

    self = 
      add: (additionalResources) ->
        Object.keys(additionalResources).forEach (type) ->
          extend resources[type], additionalResources[type]
        
        return self

      Control: Control
      Music: Music
      Sprite: Sprite
      Sound: Sound

    module.exports = self

Helpers
-------

    extend = (target, sources...) ->
      for source in sources
        for name of source
          target[name] = source[name]

      return target
