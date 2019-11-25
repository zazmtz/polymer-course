  
    class CharacterList extends Polymer.Element {
      static get is() { return 'character-list'; }
      static get properties() {
        return {
          character: {
            type: Array,
            value: [
              {
                id: 1,
                image: 'https://cdn.dribbble.com/users/135932/screenshots/2629997/bmodribbble.png',
                name: 'BMO',
                gender: 'Genderless',
                age: 1000,
                species: 'MO Series Mk. II',
                occupation: 'Video Game Console System/Computer/VCR '
              },
              {
                id: 3,
                image: 'https://cdn.dribbble.com/users/135932/screenshots/2677211/ladyrainicorndribbble.png',
                name: 'Lady Rainicorn',
                gender: 'Female',
                age: 'Unknown',
                species: 'Rainicorn',
                occupation: "Bubblegum's Royal Pet"
              }
            ]
          }
        };
      }
    }

    window.customElements.define(CharacterList.is, CharacterList);
