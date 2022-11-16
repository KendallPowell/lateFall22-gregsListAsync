

export class House {
  constructor(data) {
    // this.createdAt = new Date()
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.description = data.description
  }

  get HomeTemplate() {
    return `
    <div class="col-4 p-4">
     <div class="card">
       <img
         src="${this.imgUrl}"
         alt="big house">
       <div class="card-body">
         <h5 class="card-title d-flex justify-content-between mb-2">
           <span>${this.price}</span>
           <span>${this.levels}</span>
           <span>${this.year}</span>
         </h5>
         <h5 class="card-title d-flex justify-content-between mb-2">
           <span>${this.bedrooms}</span>
           <span>${this.bathrooms}</span>
         </h5>
         <button class="btn btn-primary">
           See Details
          </button>
          <button  class="btn btn-info"  onclick="app.housesController.setActive('${this.id}')">
          <i class="mdi mdi-pencil"></i>
          </button>
          <button onclick="app.housesController.removeHouse('${this.id}')" title="Delete car!" class="btn btn-danger">
            <i class="mdi mdi-delete"></i>
          </button>
       </div>
     </div>
   </div>
    `
  }

  static GetHouseFormTemplate(house) {
    if (!house) {
      house = new House({}) // this car will be empty and not fill out the form
    }
    return `
          <form onsubmit="app.housesController.createHome${this.id ? `editHouse('${this.id}')` : 'createHouse()'}">
            <div class="form-floating mb-3">
              <input required type="url" class="form-control" id="home-img" placeholder="Home Image" name="imgUrl" value="${this.imgUrl}">
              <label for="home-image">Image(s)</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="home-price" placeholder="Home Price" name="price" value="${this.price}">
              <label for="home-price">Price</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="home-levels" placeholder="Levels" name="levels" value="${this.levels}">
              <label for="home-levels">Levels</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="home-year" placeholder="Built in" name="year" value="${this.year}">
              <label for="home-year">Built In</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="home-rooms" placeholder="Home Rooms"
                name="bedrooms" value="${this.bedrooms}">
              <label for="home-rooms">Bedrooms</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="home-bathrooms" placeholder="Home Bathrooms"
                name="bathrooms" value="${this.bathrooms}">
              <label for="home-bathrooms">Bathrooms</label>
            </div>
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a description here" id="car-description"
              name="description">${car.description}</textarea>
              <label for="car-description">Description</label>
            </div>
            <button type="submit" class="btn btn-success mt-3">Submit</button>
            <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
          </form>
        </div>
      </section>
    `
  }
}