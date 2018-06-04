import {map, product, filter, range, zipObject} from './iterator'

export class Dataset {
    constructor(dataset) {
      this.dataset = dataset
    }
    get(indices) {
      function get_datum (ds) {
        for (let i of indices) {
          ds = ds[i]
        }
        return ds
      }
      let result = {}
      Object.entries(this.dataset.data_vars)
        .forEach(([k, v]) => result[k] = get_datum(v.data))
      return result
    }
    get all() {
      let dims = Object.keys(this.dataset.dims)
      let dim_map = Object.values(this.dataset.coords).map(o => o.data)
      let indices_es = product(...Object.values(this.dataset.dims).map(range))
      let result = map(indices_es, i => { return {
        ...zipObject(dims, i.map((v, k) => dim_map[k][v])),
        ...this.get(i),
      }})
      return result
    }
    sel(f) {
      let result = filter(this.all, f)
      return result
    }
  }