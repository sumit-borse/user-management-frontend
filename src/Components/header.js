function Header(){
    return(
        <div className="col-xl bg-primary">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark font-weight-bolder ">
                <a className="navbar-brand" href="/">User Management</a>
                
                <ul className="navbar-nav text-xl">
                    <li className="nav-item">
                        <a className="nav-link" href="/displayUser">All User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/addNewUser">Add User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/editUser">Edit User</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;