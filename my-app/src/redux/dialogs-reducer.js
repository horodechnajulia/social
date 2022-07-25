const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                user: 1,
                img: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
                message: state.newMessageBody
            }

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {

            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state;
    }
}
export const addMessageBody = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageBody = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;
