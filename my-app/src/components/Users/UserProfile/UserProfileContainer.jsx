import React from 'react';
import { connect } from 'react-redux'
import UserProfile from './UserProfile';
import * as axios from 'axios';
import { setUserProfile, toggleIsFetching } from '../../../redux/users-reducer'
import { withRouter } from 'react-router';


class UserProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials:true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            })
    }
    render() {
        return (
            <UserProfile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.usersPage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(UserProfileAPIContainer);
const UserProfileContainer = connect(mapStateToProps,
    {
        setUserProfile,
        toggleIsFetching
    }
)(WithUrlDataContainerComponent)
export default UserProfileContainer