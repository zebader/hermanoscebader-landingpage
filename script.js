'use strict'

const main = () => {
  const selectors = new function() {
    this.page = document.querySelector('body');
    this.serviciosList = this.page.querySelectorAll('.hc-servicios-container-menu li');
    this.galleryList = this.page.querySelectorAll('.hc-servicios-container-gallery');
    this.relojesGallery = this.page.querySelector('.hc-servicios-relojes-gallery');
    this.restauracionesGallery = this.page.querySelector('.hc-servicios-restauraciones-gallery');
  }
  const events = new function() {
    this.toggleSelectedClass = (listItem) => {
      this.classReset(selectors.serviciosList);
      const galleryName = listItem.getAttribute('class');
      listItem.classList.add('selected');
      this.toggleGalleryOnSelected(galleryName);
    }
    this.toggleGalleryOnSelected = (galleryName) => {
      this.classReset(selectors.galleryList);
      switch (galleryName) {
        case "hc-servicios-relojes":
          selectors.relojesGallery.classList.toggle('selected');
          break;
      case "hc-servicios-restauraciones":
          selectors.restauracionesGallery.classList.toggle('selected');
          break;
        default:
          selectors.relojesGallery.classList.toggle('selected');
          break;
      }
    }
    this.classReset = (selectorsList) => {
      [...selectorsList].forEach((item) => {
        item.classList.remove('selected')
      });
    }
  }
  selectors.serviciosList.forEach((listItem) => {
    listItem.addEventListener('click', function() {
      events.toggleSelectedClass(listItem);
  })})
};


window.addEventListener('load',main);
