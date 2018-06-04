export function* range(n) {
    let i = 0
    while (i < n) {
        yield i
        ++i
    }
}

function* product_helper(first, ...rest) {
    if (first === undefined) { return }
    if (rest.length === 0) {
        for (let item of first) {
            yield [item]
        }
    } else {
        for (let first_item of first) {
            for (let rest_items of product_helper(...rest)) {
                yield [first_item, ...rest_items]
            }
        }
    }
}

export function product(...args) {
    return product_helper(...args.map(d => Array.from(d)))
}

export function* map(iterable, f) {
    for (let v of iterable) {
        yield f(v)
    }
}

export function* filter(iterable, f) {
    for (let v of iterable) {
        if (f(v)) {
            yield v
        }
    }
}

export function zipObject(ks, vs) {
    let result = {}
    ks.forEach((k, i) => {
        result[k] = vs[i]
    })
    return result
}