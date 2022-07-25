
import { addMessageBody, updateNewMessageBody } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
/*
let MapDispatchToProps= (dispatch) => {
    return {
        addMessageBodyCreator: () => {
            dispatch(addMessageBodyCreator())
        },
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
*/
const DialogsContainer = connect(mapStateToProps,
    {
        addMessageBody, updateNewMessageBody
    }
    )(Dialogs)

export default DialogsContainer