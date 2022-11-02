# watermark-cli
> Watermark cli.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

![snapshot](https://tva1.sinaimg.cn/large/0081Kckwgy1gk87ynhkbaj30u60asasp.jpg)

## installation
```shell
# public
npm i -g @jswork/watermark-cli

# private
git clone https://github.com/afeiship/watermark-cli.git
cd watermark-cli
npm i && npm link
```

## usage
~~~
Usage: wc [options]

Options:
  -V, --version           output the version number
  -g, --gravity <string>  Position(north,northeast,center,centre). (default:
                          "southeast")
  -c, --cover <string>    Cover url.
  -d, --dst <string>      Destination URL.
  -s, --src <string>      Source url (default: "./src")
  -h, --help              display help for command
~~~

## license
Code released under [the MIT license](https://github.com/afeiship/watermark-cli/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/watermark-cli
[version-url]: https://npmjs.org/package/@jswork/watermark-cli

[license-image]: https://img.shields.io/npm/l/@jswork/watermark-cli
[license-url]: https://github.com/afeiship/watermark-cli/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/watermark-cli
[size-url]: https://github.com/afeiship/watermark-cli/blob/master/dist/watermark-cli.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/watermark-cli
[download-url]: https://www.npmjs.com/package/@jswork/watermark-cli
