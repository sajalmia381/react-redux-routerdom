import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import {userAction} from '../services/actions/userAction'

const UserList = ({userAction, users, error, loading}) => {

    useEffect(() => {
        userAction()
    }, [])

    return <div className="container-fluid mt-5">
            <div className="row">
                {loading ? <h2 className="text-center">Loading ...</h2> : error ? <h3>{error}</h3>: 
                        users.map((user) => {
                            return <div kye={user.id} className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                    <div className="card">
                                        <img src={user.picture} className="card-img-top" alt={user.firstName} />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.title} {user.firstName} {user.lastName}</h5>
                                        <h6>{user.email}</h6>
                                        <h6>{user.dateOfBirth}</h6>
                                        <h6>{user.phone}</h6>
                                        <h6>{user.location}</h6>
                                        <a href={`${user.id}`} className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    })
                }
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    users: state.userReducer.users,
    error: state.userReducer.error,
    loading: state.userReducer.loading
})

export default connect(mapStateToProps, {userAction})(UserList)