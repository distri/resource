Preloader
=========

Preload resources.

TODO: Better error handling, duh!

    Sprite = require "sprite"

    preloadAudio = (url, success, error) ->
      element = new Audio
      element.onloadeddata = ->
        success()
      element.onerror = (e) ->
        error(e)

      softloadAudio(element, url)

    softloadAudio = (element, url) ->
      element.src = url
      element.load()
      element.volume = 0
      element.play()

      return element

    module.exports =
      preload: ({resources, complete, progress}) ->
        loading = 0
        loaded = 0

        failedResource = (url) ->
          # TODO: Something other than just logging and ignoring
          console.error "Failed to load:", url
          increment()

        increment = ->
          loaded += 1

          progress?(loaded/loading)

          if loaded is loading
            complete()

        loadedResource = (url) ->
          console.log "loaded:", url
          increment()

        softLoaded = (url) ->
          console.log "soft loaded:", url
          increment()

        Object.keys(resources).forEach (type) ->
          Object.keys(resources[type]).forEach (name) ->
            url = resource[name]

            loading += 1

            success = (resourceUrl) ->
              # TODO: Grosso McNasty
              resources.images[name] = resourceUrl if type is "images"
              loadedResource(resourceUrl)

            error = ->
              failedResource(url)

            if url.match /\.(png|jpg|gif)$/
              imagePreload(url, success, error)
            else if url.match /\.(mp3|wav|ogg)/
              # TODO: Figure out how to reliable preload audio
              softloadAudio(new Audio, url)
              setTimeout ->
                softLoaded(url)
              , 0
            else
              console.warn "unknown file type", url
              setTimeout loadedResource, 0

    imagePreload = (url, success, error) ->
      # TODO: There may be a better way to detect if we are running within
      # a Chrome App
      if chrome?.app?.window
        console.log "loading", url
        ajaxSuccess = (resourceUrl) ->
          console.log resourceUrl
          Sprite.load resourceUrl, ->
            success(resourceUrl)

        chromeAppImagePreload(url, ajaxSuccess, error)
      else
        regularImagePreload(url, success, error)

    regularImagePreload = (url, success, error) ->
      # TODO: Error handling for sprites
      # NOTE: Using Sprite constructor because otherwise we get flickering

      Sprite.load url, success

Chrome Apps can't display arbitrary image src urls, so we have this
workaround.

    chromeAppImagePreload = (url, success, error) ->
      xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.responseType = 'blob'
      xhr.onload = (e) ->
        success window.URL.createObjectURL(@response)
      xhr.onerror = error

      xhr.send()
