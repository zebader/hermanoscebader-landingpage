'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var main = function main() {
  var selectors = new function () {
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
  }();
  var view = new function () {
    var _this = this;

    this.toggleGalleryOnSelected = function (galleryName) {
      _this.classReset(selectors.galleryList);

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
    };

    this.classReset = function (selectorsList) {
      _toConsumableArray(selectorsList).forEach(function (item) {
        item.classList.remove('selected');
        item.classList.remove('animation-start-app');
      });
    };
  }();
  var events = new function () {
    this.toggleSelectedClass = function (listItem) {
      view.classReset(selectors.serviciosList);
      var galleryName = listItem.getAttribute('class');
      listItem.classList.add('selected');
      view.toggleGalleryOnSelected(galleryName);
    };

    this.goTo = function (e) {
      e.preventDefault();
      var move = window.pageYOffset;
      var container = {
        'trabajos': selectors.trabajosContainer,
        'historia': selectors.historiaContainer,
        'contacto': selectors.contactoContainer
      };
      history.pushState(null, '', "#".concat(e.target.name));
      var interval = setInterval(function () {
        if (move < container[e.target.name].offsetTop - 80) {
          move >= container[e.target.name].offsetTop - 100 && clearInterval(interval);
          move += 15;
          window.scrollTo(0, move);
        }

        if (move > container[e.target.name].offsetTop - 80) {
          move <= container[e.target.name].offsetTop - 100 && clearInterval(interval);
          move -= 15;
          window.scrollTo(0, move);
        }
      }, 5);
    };
  }();
  selectors.headerButton.addEventListener('click', events.goTo);
  selectors.navTrabajos.addEventListener('click', events.goTo);
  selectors.navHistoria.addEventListener('click', events.goTo);
  selectors.navContacto.addEventListener('click', events.goTo);
  selectors.serviciosList.forEach(function (listItem) {
    listItem.addEventListener('click', function () {
      events.toggleSelectedClass(listItem);
    });
  });
};

window.addEventListener('load', main);