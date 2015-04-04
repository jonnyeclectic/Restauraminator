# Restauraminator

> A restaurant focused commerce platform.

## About

Restauraminator is a Meteor based commerce platform for restaurants.

The currently deployed version can be found at [http://restauraminator.meteor.com]().

## File Structure

```bash
client/                 # client side content
clinet/controllers/     # logic for views
client/helpers/         # helper functionality for views
client/views/           # view templates

common/                 # common code for client and server
common/collections/     # code for database collections
common/router/          # router code

i18n/                   # strings

lib/                    # definitions

private/                # private assets inaccessible to the client

public/                 # assets for the webpage
public/vendor/          # vedor assets

server/                 # server side code
```

## Bower

Bower is the prefered method to manage vedor assets. The settings for Bower can be found in the file `.bowerrcc`. Bower should be run from the project's root directory. Adding Foundation was done in this fashion: `bower add foundation`.
