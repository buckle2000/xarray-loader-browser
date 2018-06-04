# xarray dataset Loader

Only work in browsers which support ES6+

## Usage

```js
import { Dataset } from 'xarray-loader'
import raw_ds from './dataset.json'

let ds = new Dataset(raw_ds)

Array.from(ds.all) // load all data

Array.from(ds.sel(v => v.Value === 'Some Value')) // filter data
```

Every datum is in form of

```js
{
    key0: 'value0',
    key1: 'value1',
    key2: 'value2',
    ...
}
```

## Example

https://beta.observablehq.com/@buckle2000/world-governance-index

## License

MIT

## TODO

Need optimization