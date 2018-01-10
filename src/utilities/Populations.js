import axios from "axios"
import range from "lodash.range"

class Population {
    constructor() {
        this.apiUrl = "http://api.population.io:80/1.0/population"
    }

    loadYearlyTotalPopulation(
        startYear = null,
        endYear = null,
        country = "United States"
    ) {
        return new Promise((resolve, reject) => {
            if (startYear === null || endYear === null)
                reject("Missing parameters.")

            country = encodeURI(country)

            const apiCalls = range(startYear, endYear)
                .map(year => {
                    return `${year}-01-01`
                })
                .map(targetDate => {
                    return `${this.apiUrl}/${country}/${targetDate}`
                })

            Promise.all(apiCalls.map(this._callApi))
                .then(response => {
                    // the API returns this particular call with a `total_population`
                    const unpacked = response.map(data => data.total_population)
                    resolve(unpacked)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    _callApi(url) {
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(response => {
                    resolve(response.data)
                })
                .catch(reject)
        })
    }
}

export default new Population()
