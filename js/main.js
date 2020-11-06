const stateCovid = document.getElementById("state-covid")
const loadingState = document.getElementById("loading")
const containerInfo = document.getElementById("containerInfo")
const refreshBtn = document.getElementById("refresh_btn")
const error = document.getElementById("error")
const TotalSampleTestedCovid = document.getElementById("total_sample_tested")
const totalConfirmedCovid = document.getElementById("total_confirmed_cases")
const totalActiveCovid = document.getElementById("total_active_cases")
const dischargedCases = document.getElementById("discharged")
const deathCases = document.getElementById("death")
const totalDisplayedStates = document.getElementById("totalStates")

let url = "https://covidnigeria.herokuapp.com/api"

let info = ""
let data = []
fetch(url)
    .then(response => response.json())
    .then(i => data.push(i.data))
    .then(i => displayInfo())
    .then(d => showTitle())
    .catch(t => showError())


const displayInfo = () => {

    data[0].states.map((i, index) => (
        info += `
        <tr>
        <th scope="row">${i.state}</th>
        <td>${i.confirmedCases}</td>
        <td>${i.casesOnAdmission}</td>
        <td>${i.discharged}</td>
        <td>${i.death}</td>
        </tr>
        `
    ))
    stateCovid.innerHTML = info;
    loadingState.style.display = "none"
    containerInfo.style.display = "block"
}

const showTitle = () => {
    TotalSampleTestedCovid.textContent = data[0].totalSamplesTested
    totalConfirmedCovid.textContent = data[0].totalConfirmedCases
    totalActiveCovid.textContent = data[0].totalActiveCases
    dischargedCases.textContent = data[0].discharged
    deathCases.textContent = data[0].death
    console.log(data[0].states.length - 1)
    totalDisplayedStates.textContent = data[0].states.length

}

const showError = () => {
    loadingState.style.display = "none"
    error.style.display = "flex"

}

const refresh = () => {
    location.reload()
}
refreshBtn.addEventListener("click", refresh)






