import { Dataset } from './dataset'
import msgpack from 'msgpack-js-browser'

export async function from_url(url) {
    let response = await fetch(url)
    let dataset_raw = await response.arrayBuffer()
    let dataset = msgpack.decode(dataset_raw)
    return new Dataset(dataset)
}
