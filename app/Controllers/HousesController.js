import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HomeTemplate)
  setHTML('listings', template)
}

function _drawHouseForm() {
  let house = appState.activeHouse
  setHTML('listing-form', House.GetHouseFormTemplate(house))
}


export class HousesController {
  constructor() {
    appState.on('houses', _drawHouses)
    appState.on('activeHouse', _drawHouseForm)
    this.getHouses()
  }
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let houseData = getFormData(form)
      Pop.toast('Created!', 'success')
      form.reset()
      await housesService.createdHouse(houseData)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  setActive(id) {
    housesService.setActive(id)
  }

  async editHouse(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const houseData = getFormData(form)
      await housesService.editHouse(houseData, id)
      Pop.toast('edited!', 'info')
      form.reset()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async removeHouse(id) {
    try {
      console.log('deleting', id);
      if (await Pop.confirm('Are you sure?', 'Someone spent a lot of time browsing the internet for that perfect picture', 'yeah toss it', 'warning')) {
        await housesService.removeHouse(id)
      }
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  showHomes() {
    _drawHouseForm()
    _drawHouses()
  }

}