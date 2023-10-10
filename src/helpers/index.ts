// Sets an item with a Key to local storage
const saveStorage = function(key: string, data: object) {
	localStorage.setItem(key, JSON.stringify(data))
}

// Looks for a local storage item and returns if present
const getStorage = function(key: string, item: string) {
	if(localStorage.getItem(key) && item) {
		const data = JSON.parse(localStorage.getItem(key) || '')
		return data[item]
	}
	else if(localStorage.getItem(key)) {
		return localStorage.getItem(key)
	}
}

// Clear a single item or the whole local storage
const clearStorage = function(key: string) {
	if(key) {
		localStorage.removeItem(key)
	} else {
		localStorage.clear()
	}
}

export { getStorage, saveStorage, clearStorage }