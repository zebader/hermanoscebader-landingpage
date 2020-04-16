'use strict'

const main = () => {
  const selectors = new function() {
    this.page = document.querySelector('body');
    this.serviciosList = this.page.querySelectorAll('.hc-servicios-container-menu li');
    this.galleryList = this.page.querySelectorAll('.hc-servicios-container-gallery');
    this.relojesGallery = this.page.querySelector('.hc-servicios-relojes-gallery');
    this.reproduccinesGallery = this.page.querySelector('.hc-servicios-reproducciones-gallery');
    this.restauracionesGallery = this.page.querySelector('.hc-servicios-restauraciones-gallery');
    this.recuperacionesGallery = this.page.querySelector('.hc-servicios-recuperaciones-gallery');
    this.boulleGallery = this.page.querySelector('.hc-servicios-boulle-gallery');
    this.headerButton = this.page.querySelector('.hc-header-container-text a');
    this.navTrabajos = this.page.querySelector('.hc-nav-trabajos');
    this.navHistoria = this.page.querySelector('.hc-nav-historia');
    this.navContacto = this.page.querySelector('.hc-nav-contacto');
    this.trabajosContainer = this.page.querySelector('#trabajos');
    this.historiaContainer = this.page.querySelector('#historia');
    this.contactoContainer = this.page.querySelector('#contacto');
  }
  const view = new function () {
    this.toggleGalleryOnSelected = (galleryName) => {
      this.classReset(selectors.galleryList);
      switch (galleryName) {
        case "hc-servicios-relojes":
          selectors.relojesGallery.classList.toggle('selected');
          selectors.relojesGallery.classList.toggle('animation-start-app');
          break;
        case "hc-servicios-restauraciones":
          selectors.restauracionesGallery.classList.toggle('selected');
          selectors.restauracionesGallery.classList.toggle('animation-start-app');
          break;
        case "hc-servicios-reproducciones":
          selectors.reproduccinesGallery.classList.toggle('selected');
          selectors.reproduccinesGallery.classList.toggle('animation-start-app');
          break;
        case "hc-servicios-recuperaciones":
          selectors.recuperacionesGallery.classList.toggle('selected');
          selectors.recuperacionesGallery.classList.toggle('animation-start-app');
          break;
        case "hc-servicios-boulle":
          selectors.boulleGallery.classList.toggle('selected');
          selectors.boulleGallery.classList.toggle('animation-start-app');
          break;
        default:
          selectors.relojesGallery.classList.toggle('selected');
          selectors.relojesGallery.classList.toggle('animation-start-app');
          break;
      }
    }
    this.classReset = (selectorsList) => {
      [...selectorsList].forEach((item) => {
        item.classList.remove('selected')
        item.classList.remove('animation-start-app')
      });
    }
  }
  const events = new function() {
    this.toggleSelectedClass = (listItem) => {
      view.classReset(selectors.serviciosList);
      const galleryName = listItem.getAttribute('class');
      listItem.classList.add('selected');
      view.toggleGalleryOnSelected(galleryName);
    }
    this.goTo = (e) => {
      e.preventDefault();
      let move = window.pageYOffset;
      const container = {
        'trabajos': selectors.trabajosContainer,
        'historia': selectors.historiaContainer,
        'contacto': selectors.contactoContainer, 
      }
      history.pushState(null, '', `#${e.target.name}`);  
      const interval = setInterval(() => {
        if (move < container[e.target.name].offsetTop - 80) {
          move >= (container[e.target.name].offsetTop - 100) && clearInterval(interval);
          move += 15
          window.scrollTo(0, move);
        } 
        if (move > container[e.target.name].offsetTop - 80 ) {
          move <= (container[e.target.name].offsetTop - 100 ) && clearInterval(interval);
          move -= 15
          window.scrollTo(0, move);
        }  
      },5);
    }
  }
  selectors.headerButton.addEventListener('click', events.goTo);
  selectors.navTrabajos.addEventListener('click', events.goTo);
  selectors.navHistoria.addEventListener('click', events.goTo);
  selectors.navContacto.addEventListener('click', events.goTo);
  selectors.serviciosList.forEach((listItem) => {
    listItem.addEventListener('click', function() {
      events.toggleSelectedClass(listItem);
  })})
};


window.addEventListener('load',main);
