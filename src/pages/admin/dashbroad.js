import React from 'react'
import LayoutAdmin from '../../layouts/admin';
import { isAuthenticated } from "../../auth"

const UserDashboard = () => {
    const {user} = isAuthenticated();
    return (
        <div>
            <LayoutAdmin title="Dashbroard" description="User Dashbroard">
           <div className="row">
                <div className="card">
                    <div className="card-header">Thông tin user</div>
                    <ul className="list-group">
                        <li className="list-group-item">Name: {user.name}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item"> {user.role == 1 ? 'Admin' : 'Regesiter User' }</li>
                    </ul>
                </div>
           </div>
            </LayoutAdmin>
        </div>
    )
}

export default UserDashboard
