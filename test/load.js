import 'babel-polyfill'
import { Dataset } from '../src/index.js'
import ds from './dataset.json'
import assert from 'assert'

describe('Load data', function () {
    let d
    it('can deserialize dataset from Object', function() {
        d = new Dataset(ds)
    })
    it('can select all data', function () {
        assert.equal(Array.from(d.all).length, 138672)
    })
    it('can filter data (1)', function () {
        assert.equal(Array.from(d.sel(v => v.Country === 'MEX')).length, 36*18)
    })
    it('can filter data (2)', function () {
        assert.equal(Array.from(d.sel(v => v.Country === 'SLE')).length, 36*18)
    })
})