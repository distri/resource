(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "resource\n========\n\nAudio visual resource handling for the webs\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Resource\n========\n\nResource provides Sounds, Sprites, SpriteSheet support, and uploading and\nreading resource packs.\n\nExample\n-------\n\nThis looks like a terrible example...\n\n>     Resource = require(\"resource\")\n>     data = require \"./resources\"\n>     {Sprite, Sound} = Resource(data)\n\n    Resource = (data) ->\n      # TODO: Wrap with load by name resource resolvers\n      Sprite: require \"sprite\"\n      Sound: require \"sound\"\n\n    module.exports = Resource\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var Resource;\n\n  Resource = function(data) {\n    return {\n      Sprite: require(\"sprite\"),\n      Sound: require(\"sound\")\n    };\n  };\n\n  module.exports = Resource;\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "id": 17570235,
    "name": "resource",
    "full_name": "distri/resource",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://gravatar.com/avatar/192f3f168409e79c42107f081139d9f3?d=https%3A%2F%2Fidenticons.github.com%2Ff90c81ffc1498e260c820082f2e7ca5f.png&r=x",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/resource",
    "description": "Audio visual resource handling for the webs",
    "fork": false,
    "url": "https://api.github.com/repos/distri/resource",
    "forks_url": "https://api.github.com/repos/distri/resource/forks",
    "keys_url": "https://api.github.com/repos/distri/resource/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/resource/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/resource/teams",
    "hooks_url": "https://api.github.com/repos/distri/resource/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/resource/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/resource/events",
    "assignees_url": "https://api.github.com/repos/distri/resource/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/resource/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/resource/tags",
    "blobs_url": "https://api.github.com/repos/distri/resource/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/resource/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/resource/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/resource/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/resource/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/resource/languages",
    "stargazers_url": "https://api.github.com/repos/distri/resource/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/resource/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/resource/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/resource/subscription",
    "commits_url": "https://api.github.com/repos/distri/resource/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/resource/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/resource/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/resource/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/resource/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/resource/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/resource/merges",
    "archive_url": "https://api.github.com/repos/distri/resource/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/resource/downloads",
    "issues_url": "https://api.github.com/repos/distri/resource/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/resource/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/resource/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/resource/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/resource/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/resource/releases{/id}",
    "created_at": "2014-03-09T18:10:51Z",
    "updated_at": "2014-03-09T18:10:51Z",
    "pushed_at": "2014-03-09T18:10:51Z",
    "git_url": "git://github.com/distri/resource.git",
    "ssh_url": "git@github.com:distri/resource.git",
    "clone_url": "https://github.com/distri/resource.git",
    "svn_url": "https://github.com/distri/resource",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://gravatar.com/avatar/192f3f168409e79c42107f081139d9f3?d=https%3A%2F%2Fidenticons.github.com%2Ff90c81ffc1498e260c820082f2e7ca5f.png&r=x",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "master",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});