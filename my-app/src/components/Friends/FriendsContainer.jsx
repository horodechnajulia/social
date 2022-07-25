
import Friends from './Friends'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

const FriendsContainer = connect(mapStateToProps, 
    {}
    )(Friends)
export default FriendsContainer