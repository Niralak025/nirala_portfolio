import React from 'react'
import './index.css'
import { educationsContent } from '../../utils/globalConstant'

const SideMenuRough = () => {

    return (
        // <div>
        //     {/* <a class="list-group-item list-group-item-action" href="#Educations">Item 1</a>
        //     <a class="list-group-item list-group-item-action" href="#Hello-1">Item 2</a>
        //     <a class="list-group-item list-group-item-action" href="#Hello-2">Item 3</a> */}
        //     <nav class="navbar bg-dark fixed-top" data-bs-theme="dark">
        //         <div class="container-fluid">
        //             <a class="navbar-brand"
        //                 href="#"></a>
        //             <button class="navbar-toggler"
        //                 type="button"
        //                 data-bs-toggle="offcanvas"
        //                 data-bs-target="#offcanvasNavbar"
        //                 aria-controls="offcanvasNavbar"
        //                 aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        //                 <div class="offcanvas-header">
        //                     <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nirala Kumar</h5>
        //                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //                 </div>
        //                 <div class="offcanvas-body list-group" id="list-example">
        //                     {/* <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"> */}
        //                         <li class="nav-item">
        //                             <a class="nav-link active list-group-item list-group-item-action" 
        //                             aria-current="page" 
        //                             href="#Educations"
        //                                 data-bs-dismiss="offcanvas"
        //                             // data-bs-spy="scroll"
        //                             // data-bs-target="#Educations"
        //                             >{'Educations'}</a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a class="nav-link active list-group-item list-group-item-action" 
        //                             aria-current="page" 
        //                             href="#Hello-1"
        //                                 data-bs-dismiss="offcanvas"
        //                             // data-bs-spy="scroll"
        //                             // data-bs-target="#Hello-1"
        //                             >{'Hello-1'}</a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a class="nav-link active list-group-item list-group-item-action" 
        //                             aria-current="page" 
        //                             href="#Hello-2"
        //                                 data-bs-dismiss="offcanvas"
        //                             // data-bs-spy="scroll"
        //                             // data-bs-target="#Hello-2"
        //                             >{'Hello-2'}</a>
        //                         </li>
        //                     {/* </ul> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        //     {/* <div id='Educations'>
        //         <h1>Educations</h1>
        //     </div>
        //     <div id='Hello-1'>
        //         <h1>Hello-1</h1>
        //     </div>
        //     <div id='Hello-2'>
        //         <h1>Hello-2</h1>
        //     </div> */}
        //     <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        //         {/* <h4 id="list-item-1">Item 1</h4>
        //         <p>...</p> */}
        //         <div id='Educations'>
        //             <h1>Educations</h1>
        //         </div>
        //         {/* <h4 id="list-item-2">Item 2</h4>
        //         <p>...</p> */}
        //         <div id='Hello-1'>
        //             <h1>Hello-1</h1>
        //         </div>
        //         {/* <h4 id="list-item-3">Item 3</h4>
        //         <p>...</p> */}
        //         <div id='Hello-2'>
        //             <h1>Hello-2</h1>
        //         </div>
        //         {/* <h4 id="list-item-4">Item 4</h4>
        //         <p>...</p> */}
        //     </div>
        // </div>
        <div className='mainDivClass'>
            <div>
                <h2>{educationsContent.courseName}</h2>
                <h4>{educationsContent.collegeName}</h4>
                <h6>{educationsContent.stream}</h6>
                <img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg'
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default SideMenuRough
