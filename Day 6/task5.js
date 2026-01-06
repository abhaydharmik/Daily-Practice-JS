// Pagination Logic (Very Important)

// Split array into pages.

// items = [1,2,3,4,5,6,7,8,9]
// page = 2
// pageSize = 3


function paginate(items, page, pageSize) {
    let results = []
    let start = (page - 1) * pageSize
    let end = start + pageSize

    for (let i = start; i < end && items.length; i++) {
        results.push(items[i])
    }

    return results
}

console.log(paginate([1,2,3,4,5,6,7,8,9], 2, 3))