export const strict = false
////////////////state
export const state = () => ({
  turs: [
    {
      id: '1',
      created: '',
      date: '29.10.21',
      title: 'Новая Голландия изнутри и снаружи',
      group: '1-6 человек',
      amount: 'от 4000/экскурсия',
      description: 'Новая Голландия- это искусственный остров, который образовался в начале XVIII века, когда были прорыты два канала- Крюков и Адмиралтейский. Территория',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%BF%D0%BF%D0%BD%D0%B3-360x240.jpg',
      type: 'Санкт-Петербург',
      content: []
    },
    {
      id: '2',
      created: '',
      date: '29.10.21',
      title: 'Амурные тайны Императорской семьи.',
      group: '1-4 человек',
      amount: 'от 6300/экскурсия',
      description: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх.Но,…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%B0%D0%BC%D1%83%D1%804-360x240.jpg',
      type: 'Санкт-Петербург',
      content: []
    },
    {
      id: '3',
      created: '',
      date: '29.10.21',
      title: 'Гатчина.',
      group: '1-4 человек',
      amount: 'от 8000/экскурсия',
      description: 'История Гатчинского дворца началась при графе Григории Орлове- фаворите и ближайщем сподвижнике Екатерины Великой, который помог ей взойти на Российский…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/oPxNz_PIoak-360x240.jpg',
      type: 'Пригород',
      content: []
    },
    {
      id: '4',
      created: '',
      date: '29.10.21',
      title: '100 лет Кронштадтскому восстанию!',
      group: '1-4 человек',
      amount: 'от 8000/экскурсия',
      description: 'Новая юбилейная экскурсия! Кронштадт- город- крепость, город- остров, город военных моряков, главный морской форпост Северной столицы.На протяжении всего своего существования…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/02/0bYCKlTn5eQ-360x240.jpg',
      type: 'Пригород',
      content: []
    },
    {
      id: '5',
      created: '',
      date: '29.10.21',
      title: 'Между Балтийским морем и Ладожским озером. 2 дня.',
      group: '1-10 человек',
      amount: 'от 12500/ 1 человек',
      description: '1 день: Старт из Санкт-Петербурга в 7.00Проехав всего сто пятьдесят километров на север от Санкт-Петербурга, Вы можете оказаться в уникальном…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2020/12/WsA6SuZGBno-360x240.jpg',
      type: 'Карелия',
      content: []
    },
    {
      id: '6',
      created: '',
      date: '29.10.21',
      title: 'Активный отдых в Карелии. 2 дня.',
      group: '1-10 человек',
      amount: 'от 14500/ 1 человек',
      description: 'Трекинг и моторафтинг 1 день. Старт из Санкт-Петербурга Переезд в Приозерск с короткой остановкой в посёлке Лосево у самых крупных…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2020/09/q610x7tSefM-1-360x240.jpg',
      type: 'Карелия',
      content: []
    }

  ],
  SelectedCategory: ['all'],
  dialog: false,
  turForZakaz: '',
  filteredTurs: [],
  filteredTursRandom: []
});
////////////////getters
export const getters = {
  getTurs(state) {
    return state.turs
  },
//   getTurById(state, id){
// console.log('getTurById', id);
//   },
  isAuthenticated(state) {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
  },
  getUserInfo(state) {
    return state.auth.user;
  },
  SelectedCategory(state) {
    return state.SelectedCategory
  },
  getDialog(state) {
    return state.dialog
  },
  getTurForZakaz(state) {
    return state.turForZakaz
  },
  getFilteredTurs(state){
    return state.filteredTurs
  },
  getFilteredTursRandom(state){
    return state.filteredTursRandom
  }
};
////////////////mutation
export const mutations =
{
  setEditTour(state, editedTur){
    const id = editedTur.id
    //console.log('editedTur.id-',id);
    // state.turs.splice(id, 1)
    // state.turs.push(editedTur)

    for (var i = 0; i < state.turs.length; i++) {
      var cur = state.turs[i];
      if (cur.id === id) {
          state.turs.splice(i, 1);
          break;
      }
    }
    //
    state.turs.push(editedTur)
  },
  setTurs(state, newTur){
    state.turs.push(newTur)
  },
  deleteTur(state, id){
    state.turs.splice(id, 1)
  },

  setFilteredTursRandom(state){
    const arr = Array.of(...this.getters.getTurs) || []
    const randomItems = []

      for(let i = 0; i < 4 ; i++){
        const item = arr[Math.floor(Math.random() * arr.length)]
        randomItems.push(item || {})
        arr.splice(arr.indexOf(item), 1)
      }
    state.filteredTursRandom = randomItems

  },
  setTurForZakaz(state, title){
    state.turForZakaz = title
  },
  setFilterByCategory(state, newArray){
    state.SelectedCategory = newArray
  },
  setDialog(state) {
    state.dialog = !state.dialog
  }
};



