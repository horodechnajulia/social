import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import friendsReducer from "./friends-reducer"


let store = {
    _callSubscriber() {
        console.log('state changed');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi!', likesCount: 13 },
                { id: 2, message: "It's my first post.", likesCount: 7 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Dima', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw968wL7v20Jb-uguDDGpTDE-pq_hj-To__g&usqp=CAU' },
                { id: '2', name: 'Alex', img: 'https://i.pinimg.com/474x/60/f9/18/60f9181e51ef5f4e6ebe3b62e2247a1c.jpg' },
                { id: '3', name: 'Ruta', img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1571606092' },
                { id: '4', name: 'Taras', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmbnZWn2Zu9YoWUnDFHMJuY5gBcdKyZD01A&usqp=CAU' },
                { id: '5', name: 'Nina', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCYVp1xaYV5uwUhz-QBY_7TBNS85C-hGpuj1w6OpeW2aee42V0li9z6perZ558YxjmHo&usqp=CAU' },
                { id: '6', name: 'Ira', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgrBftDglFWXTtROdebLmOV202mg7hBVG8eYrttbMVGc_erQnH6Ty5QvXSfma-ozp0JQ&usqp=CAU' },
            ],
            messages: [
                { id: '1', user: 1, img: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg', message: 'Hi!' },
                { id: '2', user: 1, img: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg', message: 'Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the Boolean object. Any Длинный абзац с несколькими предложениями. <img alt="Заяц" src="http://2.bp.blogspot.com/-RWS2ZhrFw80/U_7VcA6huTI/AAAAAAAAEtc/4d_LRNPGfQU/s100/zayats.jpg" height="100" width="86"> Он содержит текст, характеризующий помече' },
                { id: '3', user: 0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw968wL7v20Jb-uguDDGpTDE-pq_hj-To__g&usqp=CAU', message: 'I was at the cinema tonight.lorem Содержит название CSS-свойств, к которым будет применен эффект перехода. Значение свойства может содержать как одно свойство, так и список свойств через запятую. Свойство не наследуется. Содержит название CSS-свойств, к которым будет применен эффект перехода. Значение свойства может содержать как одно свойство, так и список свойств через запятую. Свойство не наследуется. ' },
                { id: '4', user: 0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw968wL7v20Jb-uguDDGpTDE-pq_hj-To__g&usqp=CAU', message: 'See you next time.' },
                { id: '5', user: 1, img: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg', message: 'To execute multiple statements within a clause, use a block statem' },
                { id: '6', user: 0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw968wL7v20Jb-uguDDGpTDE-pq_hj-To__g&usqp=CAU', message: 'How are you? Определяет блочный flex-контейнер. Преобразовывает все свои прямые, дочерние элементы во flex-элементы. Определяет блочный flex-контейнер. Преобразовывает все свои прямые, дочерние элементы во flex-элементы.' },
            ],
            newMessageBody: ''
        },
        friendsPage: {
            friends: [
                { id: '1', name: 'Kate', img: 'https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg' },
                { id: '2', name: 'Nick', img: 'https://i.shgcdn.com/e1b5913b-0b86-415b-b970-c7869878690f/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
                { id: '3', name: 'Anna', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' },
                { id: '4', name: 'Alex', img: 'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg' },
                { id: '5', name: 'Maria', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI7iYwCFABeh1BSJnBcBmqYDZOeC7X7xY-w&usqp=CAU' },
            ],
        },
        
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    }
}





export default store




