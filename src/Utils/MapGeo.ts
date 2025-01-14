const defaultCenter = {
	lat: 53.906761,
	lng: 27.561822,
}

export const getBrowserLocation = () => {
	return new Promise((resolve, reject) => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				pos => {
					const { latitude: lat, longitude: lng } = pos.coords
					resolve({ lat, lng })
				},
				() => {
					reject(defaultCenter)
				}
			)
		} else {
			reject(defaultCenter)
		}
	})
}
