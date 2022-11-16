import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { Pop } from "../Utils/Pop.js"


class HousesService {

  async editHouse(houseData, id) {
    const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/houses' + id, houseData)
    let index = appState.houses.findIndex(h => h.id == id)
    appState.houses.splice(index, 1, new House(res.data))
    appState.emit('houses')
  }
  setActive(id) {
    let house = appState.houses.find(h => h.id == id)
    appState.activeHouse = house
    console.log('setting active', appState.activeHouse)
  }
  async getHouses() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
    console.log('GOT HOUSES', res.data)
    appState.houses = res.data.map(h => new House(h))
  }

  async createHouse(houseData) {
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/houses' + id)
    appState.houses = [...appState.houses, new House(res.data)]
  }

  async removeHouse(id) {
    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses' + id)
    Pop.toast(res.data, 'success')
    appState.houses = appState.houses.filter(c => c.id != id)
  }
}

export const housesService = new HousesService()