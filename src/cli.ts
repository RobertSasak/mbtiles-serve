#!/usr/bin/env node

import meow from 'meow'
import server from './server.js'

const cli = meow(
    `
  Usage
    $ mbtiles-serve <input.mbtiles>

  Options
    --port, -p       port number of the HTTP server, default 8080
    --minZoom, -min  minimal zoom level, default 0
    --maxZoom, -max  maximal zoom level, default 21
    --zoomOffset     zoom offset, default, 0
    --silent, -s     skip logging requested tiles

    Examples
    $ mbtiles-serve norway.mbtiles
    $ mbtiles-serve norway.mbtiles \\
      --port 3000 \\
      --minZoom 5 \\
      --maxZoom 18 \\
      --silent
`,
    {
        importMeta: import.meta,
        flags: {
            port: {
                type: 'number',
                alias: 'p',
            },
            minZoom: {
                type: 'number',
                alias: 'min',
            },
            maxZoom: {
                type: 'number',
                alias: 'max',
            },
            zoomOffset: {
                type: 'number',
            },
            verbose: {
                type: 'boolean',
                alias: 'v',
            },
        },
    },
)
if (cli.input.length === 0) {
    cli.showHelp()
} else if (cli.input.length > 2) {
    console.error('You can provide only one mbtiles file')
} else {
    server(cli.input[0], cli.flags)
}
