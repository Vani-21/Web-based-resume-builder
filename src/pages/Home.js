import React from "react";


const Home = () => {
    return (
        <div class="text-center">
       {/*} <nav class="navbar navbar-light navbar-expand-md py-3" style={{"background-color": "lightgrey"}}>
            <div class="container"><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button><a class="navbar-brand d-flex align-items-center" href="#"><span class="bs-icon-sm bs-icon-rounded bs-icon-primary text-dark d-flex justify-content-center align-items-center me-2 bs-icon" style={{"color": "var(--bs-navbar-brand-color)","background": "rgb(0,0,0)"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-mortarboard" style={{"color": "#ffffff"}}>
                            <path fill-rule="evenodd" d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Zm-3.824.57a.5.5 0 0 0-.656.328l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.874.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path>
                        </svg></span><span>ResPro</span></a>
                <div class="collapse navbar-collapse" id="navcol-2" style={{"margin-left": "86px"}}>
                    <ul class="navbar-nav ms-auto" >
                        <li class="nav-item"><a class="nav-link active" href="/home" style={{"margin-bottom": "-1px"}}>HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="/templatepage">RESUME</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">ABOUT US</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" style={{"padding-left":" 0px"}}>CONTACT</a></li>
                    </ul><a class="btn btn-primary ms-md-2"  role="button" target="_blank" rel="noopener noreferrer"  style={{"background-color":" black"}} href="http://localhost/mini_project/login.php">LOG IN</a>
                </div>
            </div>
        </nav>*/}
        <section>
            <div style={{"padding-top": "28px","padding-bottom": "28px"}}>
                <div class="container fs-5">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <h1 class="fs-1 fw-bold text-center"><em>Online Resume Builder</em></h1>
                            <p class="fs-5 text-center" style={{"padding-left": "54px","padding-right": "54px"}}>Amazing, creative resume templates for your recruitment process. Create your resume with free builder and professional templates.</p><br/><a href='/templatepage'><button class="btn btn-primary text-center" type="button" style={{"margin-left": "16px","padding-left": "18px","background-color":" black"}}>Create your resume</button></a>
                        </div>
                        <div class="col-md-6"><img class="img-fluid d-lg-flex justify-content-lg-start align-items-lg-center" src="assets/frist.jpg" width="434" height="228" alt="Loading....." style={{"padding-left": "0px","padding-right": "0px"}}/></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-3">
            <div class="container p-3 my-3 bg-dark text-white">
                <div class="row">
                    <div class="col-md-4 text-start"><a href="/template8"><img data-bss-hover-animate="pulse" src="assets/8.jpg"  alt="Loading....." width="300" style={{"padding-left": "8px","padding-right": "5px","padding-bottom": "1px","padding-top":"11px"}} height="347" class="me-4 px-2"/></a></div>
                    <div class="col-md-4"><a href="/template2"><img data-bss-hover-animate="pulse" src="assets/3.jpg" width="300"  alt="Loading....." style={{"padding-left": "10px","padding-right": "10px","margin-top":" 14px","margin-bottom": "14px","padding-top": "1px","padding-bottom": "8px"}} height="336"/></a></div>
                    <div class="col-md-4"><a href="/template9"><img data-bss-hover-animate="pulse" src="assets/9.jpg" width="290"  alt="Loading....." style={{"padding-left": "8px","padding-right": "7px","padding-top":"18px","padding-bottom":"9px"}} height="346"/></a></div>
                </div>
            </div>
        </section>
        <section class="text-center">
            <h1 >Create Your Resume</h1>
            <p>Select template to create resume</p>
        </section>
        <section>
            <div style={{"padding-top":"28px","padding-bottom":"28px"}}>
                <div class="container fs-5">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <h1 class="fs-1 fw-bold text-center"><em>Your resume in three easy steps</em></h1>
                            <p style={{"font-size": "17px"}}>Resumes have an important role in getting a job. A company will first go through the resume of the candidate. So we need to build it with care. It will be helpful if there is an online&nbsp;resume&nbsp;maker. Follow the steps mentioned below:</p>
                            <p class="fs-5 text-center" style={{"padding-left": "54px","padding-right": "54px","text-align":"left","font-size":"25px"}}>1.Select a template from our collection.<br/>2.Build you resume using our easy to use resume builder.<br/>3.Download&nbsp;your&nbsp;resume.</p>
                            <br/><a href='/templatepage'><button class="btn btn-primary text-center" type="button" style={{"margin-left":"16px","padding-left":"18px","background-color":" black"}}>Select Template</button></a>
                        </div>
                        <div class="col-md-6"><img class="img-fluid d-lg-flex justify-content-lg-start align-items-lg-center" src="assets/first.jpg" width="444"  alt="Loading....." height="233" style={{"padding-left":"0px","padding-right":"0px","height":"419.688px","width":" 387px"}}/></div>
                    </div>
                </div>
                <p style={{"padding-top":"4px","margin-top":"19px","margin-bottom":"-14px","font-size":"30px"}}><strong>Frequent Questions:&nbsp;</strong></p>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6"><img src="assets/que.jpg"  alt="Loading....." style={{"height": "226px","width": "332.012px","margin-top":"-19px","margin-right":"-1px"}} width="332" height="226"/></div>
                    <div class="col-md-6" style={{"padding-top":"3px","margin-top":"2px","margin-left":"-51px","padding-left":"46px"}}>
                        <p style={{"font-size": "19px","text-align": "left"}}><strong>Why should I use a resume builder?</strong></p>
                        <p style={{"text-align":"left"}}>The most obvious and important reason to use a resume builder is time. For job seekers with no experience in writing an application, a resume builder can greatly save time. It removes the need to learn how to use a certain program for composing text and makes sure to help you craft a winning&nbsp;application.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p style={{"font-size":"19px","text-align":"left"}}><strong>What is a Resume?</strong></p>
                        <p style={{"text-align":"left"}}>A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history. It is most necessary document for recruitment process.<br/>It usually includes information about the following:<br/>Your work history<br/>Educational background<br/>Achievements<br/>Contact information<br/>Resume summary or resume&nbsp;objective</p>
                    </div>
                    <div class="col-md-6" style={{"padding-top":"3px","margin-top":"2px","margin-left":"-51px","padding-left":"46px"}}><img src="assets/que2.jpg"  alt="Loading....." style={{"height": "255px","width": "391.012px","margin-top": "-19px","margin-right": "-1px","padding-top": "33px","padding-bottom":" 0px","margin-bottom": "25px"}} width="358" height="240"/></div>
                </div>
                <div class="row">
                    <div class="col-md-6"><img src="assets/que3.jpg"  alt="Loading....." style={{"height": "226px","width": "332.012px","margin-right": "-1px","margin-top": "5px","padding-top": "32px"}} width="332" height="226"/></div>
                    <div class="col-md-6" style={{"margin-top": "2px","margin-left": "-51px","padding-left": "46px","padding-top": "22px"}}>
                        <p style={{"font-size": "19px","text-align": "left"}}><strong>How can I create my resume?</strong></p>
                        <p style={{"text-align": "left"}}>It is very easy to make a resume from Respro.<br/>Just pick one of our resume templates.<br/>Then, you'll be forwarded to our resume builder, where all you have to do is fill in your&nbsp;resume&nbsp;content! It can also helps you to download your resume free.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" style={{"padding-top":"2px","margin-top":"24px","margin-bottom": "18px"}}>
                        <p style={{"font-size": "19px","text-align": "left"}}><strong>What should a resume include?</strong></p>
                        <p style={{"text-align": "left"}}>The must-have contents in your resume include the following sections:<br/>Work Experience<br/>Educational Background<br/>Contact Information<br/>Resume summary or Resume Objective&nbsp;<br/>Technical skills&nbsp;&nbsp;<br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br/>The optional ones are:<br/>Hobbies &amp; Interests<br/>Other Skills<br/>Volunteering&nbsp;Experience</p>
                    </div>
                    <div class="col-md-6" style={{"padding-top": "3px","margin-top": "2px","margin-left": "-51px","padding-left": "46px"}}><img src="assets/que4.jpg"  alt="Loading....." style={{"height": "255px","width": "391.012px","margin-right": "-1px","padding-top": "57px","margin-top": "2px","margin-bottom": "93px","padding-bottom": "0px"}} width="356" height="300"/></div>
                </div>
            </div>
        </section>
        <footer class="text-white bg-dark">
            <div class="container py-4 py-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
                        <div class="fw-bold d-flex align-items-center mb-2"><span class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2" style={{"background": "rgb(0,0,0)"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-mortarboard fs-5" style={{"font-size": "21px","background": "#070000","color": "rgb(253,253,253)"}}>
                                    <path fill-rule="evenodd" d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Zm-3.824.57a.5.5 0 0 0-.656.328l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.874.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path>
                                </svg></span><span>ResPro</span></div>
                        <p class="text-muted">The First Step of Recruitment</p>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col"><a href="/templatepage" style={{"--bs-primary": "#f9fafc","--bs-primary-rgb":"249,250,252","border-color": "rgb(234,236,239)","color": "rgb(238,241,245)"}}>Resume Templates</a></div>
                        </div><a href="#" style={{"--bs-primary": "#f9fafc","--bs-primary-rgb": "249,250,252","border-color": "rgb(234,236,239)","color": "rgb(238,241,245)"}}>Resume Examples</a>
                    </div>
                    <div class="col"><a href="/about" style={{"--bs-primary": "#f9fafc","--bs-primary-rgb": "249,250,252","border-color": "rgb(234,236,239)","color": "rgb(238,241,245)"}}>About US</a>
                        <div class="row">
                            <div class="col"><a href="/contact" style={{"--bs-primary": "#f9fafc","--bs-primary-rgb": "249,250,252","border-color":" rgb(234,236,239)","color": "rgb(238,241,245)"}}>Contact US</a></div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="d-flex justify-content-between align-items-center pt-3">
                    <p class="mb-0">Copyright © 2023 ResPro</p>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-facebook">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                            </svg></li>
                        <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-twitter">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                            </svg></li>
                        <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-instagram">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                            </svg></li>
                    </ul>
                </div>
            </div>
        </footer>
        
    
        </div>
    )
};

export default Home;