class MainNav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="index.html">CDS Kenya</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#our-work">Our Work</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#our-team">Our Team</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            `;
    }
}

customElements.define('main-nav', MainNav);