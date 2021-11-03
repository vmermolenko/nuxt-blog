
////////////////state
export const state = () => ({
  turs: [
    {
      id: '1',
      date: '29.10.21',
      title: 'Новая Голландия изнутри и снаружи',
      group: '1-6 человек',
      amount: 'от 4000/экскурсия',
      description: 'Новая Голландия- это искусственный остров, который образовался в начале XVIII века, когда были прорыты два канала- Крюков и Адмиралтейский. Территория',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%BF%D0%BF%D0%BD%D0%B3-360x240.jpg',
      type: 'spb',
      typeRus: 'Cанкт-Петербург',
      content: [

      ]
    },
       {
      id: '2',
      date: '29.10.21',
      title: 'Амурные тайны Императорской семьи.',
      group: '1-4 человек',
      amount: 'от 6300/экскурсия',
      description: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх.Но,…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%B0%D0%BC%D1%83%D1%804-360x240.jpg',
      type: 'spb',
      typeRus: 'Cанкт-Петербург'
    },
    {
      id: '3',
      date: '29.10.21',
      title: 'Гатчина.',
      group: '1-4 человек',
      amount: 'от 8000/экскурсия',
      description: 'История Гатчинского дворца началась при графе Григории Орлове- фаворите и ближайщем сподвижнике Екатерины Великой, который помог ей взойти на Российский…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/05/oPxNz_PIoak-360x240.jpg',
      type: 'prigorod',
      typeRus: 'Пригород'
    },
    {
      id: '4',
      date: '29.10.21',
      title: '100 лет Кронштадтскому восстанию!',
      group: '1-4 человек',
      amount: 'от 8000/экскурсия',
      description: 'Новая юбилейная экскурсия! Кронштадт- город- крепость, город- остров, город военных моряков, главный морской форпост Северной столицы.На протяжении всего своего существования…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2021/02/0bYCKlTn5eQ-360x240.jpg',
      type: 'prigorod',
      typeRus: 'Пригород'
    },
    {
      id: '5',
      date: '29.10.21',
      title: 'Между Балтийским морем и Ладожским озером. 2 дня.',
      group: '1-10 человек',
      amount: 'от 12500/ 1 человек',
      description: '1 день: Старт из Санкт-Петербурга в 7.00Проехав всего сто пятьдесят километров на север от Санкт-Петербурга, Вы можете оказаться в уникальном…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2020/12/WsA6SuZGBno-360x240.jpg',
      type: 'karelia',
      typeRus: 'Карелия'
    },
    {
      id: '6',
      date: '29.10.21',
      title: 'Активный отдых в Карелии. 2 дня.',
      group: '1-10 человек',
      amount: 'от 14500/ 1 человек',
      description: 'Трекинг и моторафтинг 1 день. Старт из Санкт-Петербурга Переезд в Приозерск с короткой остановкой в посёлке Лосево у самых крупных…',
      img: 'https://life-is-travel.ru/wp-content/uploads/2020/09/q610x7tSefM-1-360x240.jpg',
      type: 'karelia',
      typeRus: 'Карелия'
    }
    // {
    //   id: 7,
    //   date: '29.10.21',
    //   title: '',
    //   description: '',
    //   img: '',
    //   type: 'vip',
    // },
    // {
    //   id: 8,
    //   date: '29.10.21',
    //   title: '',
    //   description: '',
    //   img: '',
    //   type: 'vip',
    // },
  ],
  SelectedCategory: ['all'],
  dialog: false,
  selectedTur: ''
});
////////////////getters
export const getters = {
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
  getSelectedTur(state) {
    return state.selectedTur
  }
};
////////////////mutation
export const mutations = {
  setFilterByCategory(state, newArray){
    state.SelectedCategory = newArray
  },
  setDialog(state) {
    state.dialog = !state.dialog
  },
  setSelectedTur(state, title) {
   state.selectedTur = title
  }

};


