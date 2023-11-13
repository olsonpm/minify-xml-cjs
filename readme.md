## What is this

A simple cjs wrapper to the [minify-xml](https://github.com/kristian/minify-xml) module

## Why make a wrapper ?

Since version 4 of minify-xml, the module [only supports esm import](https://github.com/kristian/minify-xml/commit/f410a25749a568d9856da38e0474b48bedb0388b).
In order to continue using this module conveniently I decided to wrap it in [fix-esm](https://www.npmjs.com/package/fix-esm).

## Why declare minify-xml as a peer dependency ?

Doing this allows you to decide the version of minify-xml in your project.
