import './sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = () => {
    let dyanmicStyle = {
        backgroundColor: "red",
        width: "100%",
        textAlign: "center"
    }
    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="text-center sidebar-brand-wrapper d-flex align-items-center">
                {/* <a class="sidebar-brand brand-logo" href="index.html"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" /></a> */}
                {/* <a class="sidebar-brand brand-logo-mini pl-4 pt-3" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a> */}
                <Link style={dyanmicStyle} to='/' className='sidebar-brand brand-logo'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" /></Link>
                {/* <Link to="/">Dashboard</Link> */}

            </div>
            <ul class="nav">
                <li class="nav-item nav-profile">
                    <a href="#" class="nav-link">
                        <div class="nav-profile-image">
                            <img src={process.env.PUBLIC_URL + '/images/faces/face1.jpg'} alt="profile" />
                            <span class="login-status online"></span>
                            {/* <!--change to offline or busy as needed--> */}
                        </div>
                        <div class="nav-profile-text d-flex flex-column pr-3">
                            <span class="font-weight-medium mb-2">Henry Klein</span>
                            <span class="font-weight-normal">$8,753.00</span>
                        </div>
                        <span class="badge badge-danger text-white ml-3 rounded">3</span>
                    </a>
                </li>
                <li class="nav-item">
                    <Link to="/" className='nav-link'>
                        <i class="mdi mdi-home menu-icon"></i>
                        <span class="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/uielement" className='nav-link'>
                        <i class="mdi mdi-crosshairs-gps menu-icon"></i>
                        <span class="menu-title">Basic UI Elements</span>
                        <i class="menu-arrow"></i>
                    </Link>
                    <div class="" id="ui-basic">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item">
                                <Link to="/buttons" className='nav-link'>Buttons</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dropdown" className='nav-link'>Dropdowns</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/typography" className='nav-link'>Typography</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <Link to="/icons" className='nav-link'>
                        <i class="mdi mdi-contacts menu-icon"></i>
                        <span class="menu-title">Icons</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/forms/basic_elements.html">
                        <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                        <span class="menu-title">Forms</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-chart-bar menu-icon"></i>
                        <span class="menu-title">Charts</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/tables/basic-table.html">
                        <i class="mdi mdi-table-large menu-icon"></i>
                        <span class="menu-title">Tables</span>
                    </a>
                </li>
                <li class="nav-item">
                    <span class="nav-link" href="#">
                        <span class="menu-title">Docs</span>
                    </span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.bootstrapdash.com/demo/breeze-free/documentation/documentation.html">
                        <i class="mdi mdi-file-document-box menu-icon"></i>
                        <span class="menu-title">Documentation</span>
                    </a>
                </li>
                <li class="nav-item sidebar-actions">
                    <div class="nav-link">
                        <div class="mt-4">
                            <div class="border-none">
                                <p class="text-black">Notification</p>
                            </div>
                            <ul class="mt-4 pl-0">
                                <li>Sign Out</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;