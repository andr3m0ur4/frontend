app.filter('priceFilter', () => {
    return (items, condition) => {
        if (!condition) return items

        condition = condition.split('-')

        const filtered = []

        angular.forEach(items, item => {
            if (item.price >= condition[0] && item.price <= condition[1]) {
                filtered.push(item)
            }
        })

        return filtered
    }
})