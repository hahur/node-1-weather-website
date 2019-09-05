
const weatherForm = document.querySelector(".myForm")
const search = document.querySelector(".myInput")
const messageOne = document.querySelector(".messageOne")
const messageTwo = document.querySelector(".messageTwo")
const messageThree = document.querySelector(".messageThree")

weatherForm.addEventListener("submit", (e) => {

	e.preventDefault()

	const location = search.value


	if (location) {

		const getWeatherData = () => {
			return fetch(`/weather?address=${location}`)
		}
		getWeatherData().then(res => res.json()).then(json => {
			if (json.error) {

				messageThree.textContent = json.error

			} else {
				messageOne.textContent = json.location
				messageTwo.textContent = json.forecast
				messageThree.textContent = `The address you entered : "${json.address}"`

			}
		}).catch(err => console.log(err))


	} else {
		messageThree.textContent = "No data provided"
	}

})
