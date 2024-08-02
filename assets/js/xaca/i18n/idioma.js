import Polyglot from "node-polyglot";
// import your language objects
import english from "./locale/en/en.js";
import espanol from "./locale/es/es.js";

//https://codesandbox.io/s/q8jj39jmp4?file=/src/index.js:1754-1779

let polyglot;

window.onload = function() {
  control_idioma();
}

function control_idioma(){
    polyglot = new Polyglot();
    polyglot.extend(getLocale());
    cargarTextos();
}

function cambiarIdioma(locale){
    if(locale == "en")
    {
        polyglot.locale("en");
        polyglot.extend(english);
    }  
    if(locale == "es")
    {
        polyglot.locale("es");
        polyglot.extend(espanol);
    }  
    cargarTextos();
}

function isSpanish(){
    // Define the users location with the object the browser provides for you
    const userLanguage = navigator.language;
    // Stores the other language you support
    const spanish = "es";

    return userLanguage.includes(spanish);
}

// Locale function - gets the users language preferences
function getLocale() {
    
    // Define the language object you'll be returning
    let languageObj;

    if (isSpanish()) {
      languageObj = espanol;
    } else {
      languageObj = english;
    }

    return languageObj;
  }

  function cargarTextos(){
    
    document.getElementById("tp_menu_1").innerHTML = polyglot.t("tp_menu_1");
    document.getElementById("tp_menu_2").innerHTML = polyglot.t("tp_menu_2");
    document.getElementById("tp_menu_3").innerHTML = polyglot.t("tp_menu_3");
    document.getElementById("tp_menu_4").innerHTML = polyglot.t("tp_menu_4");
    document.getElementById("tp-bn-h4-1").innerHTML = polyglot.t("tp-bn-h4-1");
    document.getElementById("tp-bn-h4-2").innerHTML = polyglot.t("tp-bn-h4-2");
    document.getElementById("tp-bn-h4-3").innerHTML = polyglot.t("tp-bn-h4-3");
    document.getElementById("tp-bn-p-1").innerHTML = polyglot.t("tp-bn-p-2");
    document.getElementById("tp-bn-p-3").innerHTML = polyglot.t("tp-bn-p-3");
    document.getElementById("tp-btn-1").innerHTML = polyglot.t("tp-btn-1");
    document.getElementById("tp-btn-2").innerHTML = polyglot.t("tp-btn-2");
    document.getElementById("tp-btn-3").innerHTML = polyglot.t("tp-btn-3");
    document.getElementById("tp-form-1").innerHTML = polyglot.t("tp-form-1");
    document.getElementById("tp-txt-form").innerHTML = polyglot.t("tp-txt-form");
    document.getElementById("tp-services-hd-title").innerHTML = polyglot.t("tp-services-hd-title");
    document.getElementById("tp-services-hd-span").innerHTML = polyglot.t("tp-services-hd-span");
    document.getElementById("tp-services-hd-title-1").innerHTML = polyglot.t("tp-services-hd-title-1");
    document.getElementById("tp-services-hd-title-2").innerHTML = polyglot.t("tp-services-hd-title-2");
    document.getElementById("tp-services-hd-title-3").innerHTML = polyglot.t("tp-services-hd-title-3");
    document.getElementById("tp-hd-more-info-title").innerHTML = polyglot.t("tp-hd-more-info-title");
    document.getElementById("tp-hd-more-info-p").innerHTML = polyglot.t("tp-hd-more-info-p");
    document.getElementById("tp-conf-title").innerHTML = polyglot.t("tp-conf-title");
    document.getElementById("tp-callback-title").innerHTML = polyglot.t("tp-callback-title");
    document.getElementById("tp-callback-p").innerHTML = polyglot.t("tp-callback-p");
    document.getElementById("tp-more-info-title").innerHTML = polyglot.t("tp-more-info-title");
    document.getElementById("tp-form-name").innerHTML = polyglot.t("tp-form-name");
    document.getElementById("tp-form-email").innerHTML = polyglot.t("tp-form-email");
    document.getElementById("tp-form-message").innerHTML = polyglot.t("tp-form-message");
    document.getElementById("tp-form-subject").innerHTML = polyglot.t("tp-form-subject");
    document.getElementById("tp-team-section-heading-title").innerHTML = polyglot.t("tp-team-section-heading-title");
    document.getElementById("tp-team-section-heading-span").innerHTML = polyglot.t("tp-team-section-heading-span");
    document.getElementById("tp-team-item-h4-1").innerHTML = polyglot.t("tp-team-item-h4-1");
    document.getElementById("tp-team-item-span-1").innerHTML = polyglot.t("tp-team-item-span-1");
    document.getElementById("tp-team-item-p-1").innerHTML = polyglot.t("tp-team-item-p-1");
    document.getElementById("tp-team-item-h4-2").innerHTML = polyglot.t("tp-team-item-h4-2");
    document.getElementById("tp-team-item-span-2").innerHTML = polyglot.t("tp-team-item-span-2");
    document.getElementById("tp-team-item-p-2").innerHTML = polyglot.t("tp-team-item-p-2");
    document.getElementById("tp-team-item-h4-3").innerHTML = polyglot.t("tp-team-item-h4-3");
    document.getElementById("tp-team-item-span-3").innerHTML = polyglot.t("tp-team-item-span-3");
    document.getElementById("tp-teak-item-p-3").innerHTML = polyglot.t("tp-teak-item-p-3");
    document.getElementById("tp-single-services-title-h1").innerHTML = polyglot.t("tp-single-services-title-h1");
    document.getElementById("tp-single-services-title-1").innerHTML = polyglot.t("tp-single-services-title-1");
    document.getElementById("tp-single-services-title-2").innerHTML = polyglot.t("tp-single-services-title-2");
    document.getElementById("tp-single-services-title-3").innerHTML = polyglot.t("tp-single-services-title-3");
    document.getElementById("tp-single-services-tab-1-li-1").innerHTML = polyglot.t("tp-single-services-tab-1-li-1");
    document.getElementById("tp-single-services-tab-1-li-2").innerHTML = polyglot.t("tp-single-services-tab-1-li-2");
    document.getElementById("tp-single-services-tab-1-li-3").innerHTML = polyglot.t("tp-single-services-tab-1-li-3");
    document.getElementById("tp-single-services-tab-1-li-4").innerHTML = polyglot.t("tp-single-services-tab-1-li-4");
    document.getElementById("tp-single-services-tab-1-li-5").innerHTML = polyglot.t("tp-single-services-tab-1-li-5");
    document.getElementById("tp-single-services-tab-1-li-6").innerHTML = polyglot.t("tp-single-services-tab-1-li-6");
    document.getElementById("tp-single-services-tab-1-li-7").innerHTML = polyglot.t("tp-single-services-tab-1-li-7");
    document.getElementById("tp-single-services-tab-2-li-1").innerHTML = polyglot.t("tp-single-services-tab-2-li-1");
    document.getElementById("tp-single-services-tab-2-li-2").innerHTML = polyglot.t("tp-single-services-tab-2-li-2");
    document.getElementById("tp-single-services-tab-2-li-3").innerHTML = polyglot.t("tp-single-services-tab-2-li-3");
    document.getElementById("tp-single-services-tab-2-li-4").innerHTML = polyglot.t("tp-single-services-tab-2-li-4");
    document.getElementById("tp-single-services-tab-2-li-5").innerHTML = polyglot.t("tp-single-services-tab-2-li-5");
    document.getElementById("tp-single-services-tab-3-li-1").innerHTML = polyglot.t("tp-single-services-tab-3-li-1");
    document.getElementById("tp-single-services-tab-3-li-2").innerHTML = polyglot.t("tp-single-services-tab-3-li-2");
    document.getElementById("tp-single-services-tab-3-li-3").innerHTML = polyglot.t("tp-single-services-tab-3-li-3");
    document.getElementById("tp-single-services-callback-title").innerHTML = polyglot.t("tp-single-services-callback-title");
    document.getElementById("tp-contact-title").innerHTML = polyglot.t("tp-contact-title");
    document.getElementById("tp-contact-span").innerHTML = polyglot.t("tp-contact-span");
    document.getElementById("tp-contact-item-p").innerHTML = polyglot.t("tp-contact-item-p");
    document.getElementById("tp-contact-item-h4").innerHTML = polyglot.t("tp-contact-item-h4");
    document.getElementById("tp-footer-contact-title").innerHTML = polyglot.t("tp-footer-contact-title");
    document.getElementById("tp-footer-contact-p").innerHTML = polyglot.t("tp-footer-contact-p");

    
  }

  export {control_idioma,cambiarIdioma,isSpanish};