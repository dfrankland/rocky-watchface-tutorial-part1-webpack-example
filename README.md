# rocky-watchface-tutorial-part1-webpack-example

This is an example of how to use [`webpack`][1] with the [Pebble smartwatch][2].
The purpose of this is to allow using ES2016+ or other niceties of a build
process that you can't get with vanilla [JerryScript][3] (that's the JavaScript
runtime embedded in the Pebble smartwatches).

The code in `src/index.js` is the ES2016+ version of the [Tic Toc example][4] in
the [Pebble Examples' repos][5].

## How to use

1.  Run `npm run build` to compile the `src/index.js` to `build/index.js`

2.  Copy the contents of `build/index.js` to [Cloud Pebble][6] Rocky project.

[1]: https://webpack.github.io/
[2]: https://www.pebble.com/
[3]: https://github.com/pebble/jerryscript
[4]: https://github.com/pebble-examples/rocky-watchface-tutorial-part1
[5]: https://github.com/pebble-examples/
[6]: https://cloudpebble.net
