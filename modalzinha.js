/*
* Modalzinha.js
*
* by Fernando Soares (@frrrnd)
* github.com/frrrnd/modalzinha-js
*
*/

var Modal = (function() {

  var modalOpen = document.querySelector('[data-modal="open"]'),
      modalClose = document.querySelector('[data-modal="close"]'),
      modalWrapper = document.querySelector('[data-modal="wrapper"]');

      return {
        init: function() {
          this.abrir();
          this.fechar();
        },

        abrir: function() {
          modalOpen.onclick = function(e) {
            e.preventDefault;
              modalWrapper.classList.add("modal-opened");
          }
        },

        fechar: function() {
            modalClose.onclick = function(e) {
              e.preventDefault;
              modalWrapper.classList.remove("modal-opened");
            }
        }
      }
}());

Modal.init();
