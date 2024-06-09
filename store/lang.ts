import { defineStore } from 'pinia';

type TLang = {
  en: any,
  gr: any,
}

export const useLangStore = defineStore('lang-store', () => {
  const lang: TLang = {
    en: {
      sidebar: {
        profile: "Profile",
        vechicles: "Vechicles",
        setting: "Setting",
      },

      pages: {
        // home=========
        home: {
          title: "Vechicles",
          search: "Search VIN",
          prePage: "Select vehicles per page:",
          addAuto: "Add Vechicle",
        },
        // ./home=========
        
      },
      components: {
        pagination: {
          text: (page: number, amount: number) => `Showing ${page} out of ${amount}`,
        },
      },
    },

    gr: {
      sidebar: {
        profile: "Profil",
        vechicles: "Fahrzeuge",
        setting: "Einstellung",
      },

      pages: {
        // home=========
        home: {
          title: "Fahrzeuge",
          search: "suchen VIN",
          prePage: "Fahrzeuge pro Seite auswählen:",
          addAuto: "Fahrzeug hinzufügen",
        },
        // ./home=========
        
      },
      components: {
        pagination: {
          text: (page: number, amount: number) => `Angezeigt werden ${page} von ${amount}`,
        },
      },
    },
  };

  let listeners: Function[] = [];

  let activeLang: Ref<keyof TLang> = ref("en");
  const langObj = computed(() => lang[activeLang.value]);

  function addListener(foo: Function) {
    listeners.push(foo);
  }

  function triggerListeneer() {
    listeners.forEach((foo) => {
      foo(langObj);
    })
  }

  function setLang(newLang: keyof TLang) {
    activeLang.value = newLang;
    triggerListeneer();
  }
  
  // class useLang {
  //   private listeners: Function[] = [];

  //   constructor() {

  //   }

  //   addListener(foo: Function) {
  //     this.listeners.push(foo);
  //   }

  //   triggerListeneer() {
  //     this.listeners.for
  //   }
  // }

  return {
    langArr: Object.keys(lang),
    langObj,

    setLang,
    addListener,
  };
})