# mbtiles-serve

Fast HTTP server serving map tiles directly from a mbtiles file. It is built on the mapbox [node-mbtiles](https://github.com/mapbox/node-mbtiles) library without any other dependencies (apart cli meow).

## Installation

```sh
yarn add mbtiles-serve
# or
npm install mbtiles-serve
```

## Usage

```sh
mbtiles-serve norway.mbtiles
```

Once is server running you can request tiles from
`http://localhost:8080?x=0&y=0&z=0`
For your convinience there is a simple Leaflet map server at the root so you can easily preview map tiles. It can be found at `http://localhost:8080`

## Development

PRs are more than welcome. Start by cloning your fork and installing all the dependencies with

```sh
yarn
```

You can run it directly from the repo by

```sh
yarn start input.mbtiles --port 3000
```

Once you are happy with you changes you can try it globaly with

```sh
npm global install .
```

## Publishing

```sh
npx np
```
