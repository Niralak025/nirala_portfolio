import React from 'react';

const SideMenu = ({ onItemClick }) => {
    const menuData = [
        { id: 1, name: 'Introduction' },
        { id: 2, name: 'Education' },
        { id: 3, name: 'Skills' },
        { id: 4, name: 'Projects and Experience' }
    ];

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Nirala Kumar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                Nirala Kumar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {menuData.map((item) => (
                                    <li
                                        key={item.id}
                                        className="nav-item"
                                        onClick={() => {
                                            onItemClick(item);
                                        }}
                                    >
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="#"
                                            data-bs-dismiss="offcanvas"
                                            data-bs-spy="scroll"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideMenu;
