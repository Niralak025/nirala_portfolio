import React from 'react'

const SideMenu = ({ onItemClick }) => {

    const menuData = [
        { id: 1, name: 'Introduction' },
        { id: 2, name: 'Educations' },
        { id: 3, name: 'Skills' },
        { id: 4, name: 'Projects and Experiance' }
    ]

    return (
        <div>
            <nav class="navbar bg-dark fixed-top" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand"
                        href="#"></a>
                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nirala Kumar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {
                                    menuData.map((item) => {
                                        return (
                                            <li class="nav-item"
                                                onClick={() => {onItemClick(item) }}>
                                                <a class="nav-link active" aria-current="page" href="#"
                                                    data-bs-dismiss="offcanvas"
                                                    data-bs-spy="scroll"
                                                >{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideMenu
