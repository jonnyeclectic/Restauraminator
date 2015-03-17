# Restauraminator

> A restaurant focused commerce platform.

## About

Restauraminator is a Meteor based commerce platform for restaurants.

## File Structure

```bash
client/                 # client side content
clinet/controllers/     # logic for views
client/helpers/         # helper functionality for views
client/views/           # view templates

i18n/                   # strings

lib/                    # common code for client and server
lib/collections/        # code for database collections
lib/router/             # router code

private/                # private assets inaccessible to the client

public/                 # assets for the webpage
public/vendor/          # vedor assets

server/                 # server side code
```

## Bower

Bower is the prefered method to manage vedor assets. The settings for Bower can be found in the file `.bowerrcc`. Bower should be run from the project's root directory. Adding Foundation was done in this fashion: `bower add foundation`.
