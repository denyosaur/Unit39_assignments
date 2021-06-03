class Helpers {
    static choice(items) {
        let random = Math.floor(Math.random() * items.length);
        return items[random]
    }

    static remove(items, item) {
        if (items.indexOf(item) !== -1) {
            let index = items.indexOf(item);
            items.splice(index, 1)
            return items
        } else {
            return undefined
        }
    }
}



export { Helpers }
