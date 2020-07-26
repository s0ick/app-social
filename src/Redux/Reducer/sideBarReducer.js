const initialState = {
  item: [
    {url:'/profile', link: 'Profile'},
    {url:'/messages', link: 'Messages'},
    {url:'/news', link: 'News'},
    {url:'/music', link: 'Music'},
    {url:'/users', link: 'Find friends'},
    {url:'/settings', link: 'Settings'}
  ],
  fullName: [
    {firstName: 'Андрей', secondName: 'Кисляк'},
    {firstName: 'Константин', secondName: 'Грива'},
    {firstName: 'Никита', secondName: 'Монашкик'},
    {firstName: 'Влад', secondName: 'Бесмертный'},
    {firstName: 'Илья', secondName: 'Гондрабура'},
    {firstName: 'Евегения', secondName: 'Онегина'},
  ]
}
const sideBarReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state; 
  }
};

export default sideBarReducer;