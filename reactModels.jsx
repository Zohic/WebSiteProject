const react = require("react");
const rce = react.createElement;

function Header(input) {
    const act = [
        input.page == "index.html" ? "active" : '',
        input.page == "service.html" ? "active" : '',
        input.page == "index.html" ? "active" : ''
    ];

    return rce(
        react.Fragment,
        null,
        rce(
            "div",
            {
                className: "top_nav"
            },
            rce(
                "div",
                {
                    className: "container"
                },
                rce(
                    "div",
                    {
                        className: "contact_link-container"
                    },
                    rce(
                        "a",
                        {
                            href: "",
                            className: "contact_link1"
                        },
                        rce("img", {
                            src: "images/location.png",
                            alt: ""
                        }),
                        rce("span", null, input.about.place)
                    ),
                    rce(
                        "a",
                        {
                            href: "",
                            className: "contact_link2"
                        },
                        rce("img", {
                            src: "images/call.png",
                            alt: ""
                        }),
                        rce(
                            "span",
                            null,
                            "Звоните: " + input.about.phone
                        )
                    ),
                    rce(
                        "a",
                        {
                            href: "",
                            className: "contact_link3"
                        },
                        rce("img", {
                            src: "images/mail.png",
                            alt: ""
                        }),
                        rce(
                            "span",
                            null,
                            input.about.email
                        )
                    )
                )
            )
        ),
        rce(
            "header",
            {
                className: "header_section"
            },
            rce(
                "div",
                {
                    className: "container-fluid"
                },
                rce(
                    "nav",
                    {
                        className: "navbar navbar-expand-lg custom_nav-container"
                    },
                    rce(
                        "a",
                        {
                            className: "navbar-brand",
                            href: "index.html"
                        },
                        rce("img", {
                            src: "images/logo.png",
                            alt: ""
                        }),
                        rce(
                            "span",
                            null,
                            "\u0427\u0438\u043D\u0438\u043C"
                        )
                    ),
                    rce(
                        "button",
                        {
                            className: "navbar-toggler",
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        },
                        rce("span", {
                            className: "navbar-toggler-icon"
                        })
                    ),
                    rce(
                        "div",
                        {
                            className: "collapse navbar-collapse ml-auto",
                            id: "navbarSupportedContent"
                        },
                        rce(
                            "ul",
                            {
                                className: "navbar-nav  "
                            },
                            rce(
                                "li",
                                {
                                    className: "nav-item " + act[0]
                                },
                                rce(
                                    "a",
                                    {
                                        className: "nav-link",
                                        href: "index.html"
                                    },
                                    "\u0413\u043B\u0430\u0432\u043D\u0430\u044F "
                                )
                            ),
                            rce(
                                "li",
                                {
                                    className: "nav-item"
                                },
                                rce(
                                    "a",
                                    {
                                        className: "nav-link",
                                        href: "about.html"
                                    },
                                    " ",
                                    "\u041E \u043D\u0430\u0441"
                                    
                                )
                            ),
                            rce(
                                "li",
                                {
                                    className: "nav-item " + act[1]
                                },
                                rce(
                                    "a",
                                    {
                                        className: "nav-link",
                                        href: "service.html"
                                    },
                                    " ",
                                    "\u0423\u0441\u043B\u0443\u0433\u0438"
                                    
                                )
                            ),
                            rce(
                                "li",
                                {
                                    className: "nav-item"
                                },
                                rce(
                                    "a",
                                    {
                                        className: "nav-link",
                                        href: "product.html"
                                    },
                                    " ",
                                    "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"
                                )
                            ),
                            rce(
                                "li",
                                {
                                    className: "nav-item"
                                },
                                rce(
                                    "a",
                                    {
                                        className: "nav-link",
                                        href: "contact.html"
                                    },
                                    "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
function Footer(input) {
    
    return rce( 
    
        react.Fragment,
        null,
    rce(
            "section",
            {
                className: "info_section "
            },
      rce(
                "div",
                {
                    className: "container"
                },
        rce(
                    "div",
                    {
                        className: "row"
                    },
          rce(
                        "div",
                        {
                            className: "col-md-3"
                        },
            rce(
                            "div",
                            {
                                className: "info_logo"
                            },
              rce(
                                "a",
                                {
                                    className: "navbar-brand",
                                    href: "index.html"
                                },
                rce("img", {
                                    src: "images/info-logo.png",
                                    alt: ""
                                }),
                rce(
                                    "span",
                                    null,
                                    "\u0410\u0432\u0442\u043E \u0427\u0438\u043D\u0438\u043C"
                                )
                            ),
              rce(
                                "p",
                                null,
                                "\u0412\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0434\u044B \u043F\u043E\u043C\u043E\u0447\u044C"
                            )
                        )
                    ),
          rce(
                        "div",
                        {
                            className: "col-md-3"
                        },
            rce(
                            "div",
                            {
                                className: "info_info"
                            },
              rce(
                                "h5",
                                null,
                                "\u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C"
                            ),
              rce(
                                "p",
                                null,
                                "\u041C\u044B \u0435\u0441\u0442\u044C \u0432\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435,",
                rce("br", null),
                                "\u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439",
                rce("br", null),
                                "\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B",
                rce("br", null),
                                "\u0432\u044B\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u043E\u0442\u0437\u044B\u0432\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
                rce("br", null)
                            )
                        )
                    ),
          rce(
                        "div",
                        {
                            className: "col-md-3"
                        },
            rce(
                            "div",
                            {
                                className: "info_form "
                            },
              rce(
                                "div",
                                {
                                    className: "social_box"
                                },
                rce(
                                    "a",
                                    {
                                        href: ""
                                    },
                  rce("img", {
                                        src: "images/fb.png",
                                        alt: ""
                                    })
                                ),
                rce(
                                    "a",
                                    {
                                        href: ""
                                    },
                  rce("img", {
                                        src: "images/twitter.png",
                                        alt: ""
                                    })
                                ),
                rce(
                                    "a",
                                    {
                                        href: ""
                                    },
                  rce("img", {
                                        src: "images/linkedin.png",
                                        alt: ""
                                    })
                                ),
                rce(
                                    "a",
                                    {
                                        href: ""
                                    },
                  rce("img", {
                                        src: "images/instagram.png",
                                        alt: ""
                                    })
                                )
                            )
                        )
                    )
                )
            )
        ),
    rce(
            "footer",
            {
                className: "container-fluid footer_section"
            }
        )
    );
    
    /*return (
        <div id="footerImport">
        <section className="info_section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="info_logo">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/info-logo.png" alt="" />
                                <span>Авто Чиним</span>
                            </a>
                            <p>Всегда рады помочь</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_info">
                            <h5>Обращайтесь</h5>
                            <p>
                                Мы есть во множестве,
              <br />
              социальных сетей
              <br />и всегда готовы
              <br />
              выслушать ваши отзывы и предложения
              <br />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_form ">
                            <div className="social_box">
                                <a href="">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/instagram.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="container-fluid footer_section" />
    </div>
    );*/

}

//receives a singe service info
function ServiceContainer(input) {
    var btn = rce(
        "a",
        {
            className: "buyB", 
            onclick: "feel()"  
        },
        input.price + "\u0440\u0443\u0431"
    );
    
    console.log(btn.props);

    return rce(

        "div",
        {
            className: "box"
        },
        rce(
            "div",
            {
                className: "img-box"
            },
            rce("img", {
                src: "images/services/" + input.ascii_name+".jpg",
                alt: ""
            })
        ),
        rce(
            "div",
            {
                className: "detail-box"
            },
            rce("h6", null, input.service_name),
            rce("p", null, input.short_desc),
            btn
        )
    );
}
//receives a list of services
function ServicesPanel(input) {
    
    const servs = input.services.map(function (item, ind) {
        const p = ServiceContainer(item);
        p.key = ind;
        return p;
    });

    return rce("div", { className: "service_container" }, servs);
}

//receives a full info about services
function ServiceSections(input) {

    const sections = [];

   

    for (let i = 0; i < input.ServicesInfo.ServiceSection.length; i++) {
        const panelServs = [];

        for (let j = 0; j < input.ServicesInfo.ServiceType.length; j++) {
            
            if (input.ServicesInfo.ServiceType[j].service_section_id == i) {
                
                panelServs.push(input.ServicesInfo.ServiceType[j]);
            }
        }
       
        sections.push(rce("div", { className: "service_section" }, input.ServicesInfo.ServiceSection[i], ServicesPanel({ services: panelServs })));
        
    }
    return rce("div", { className: "service_sections" }, sections);
}

exports.Header = Header;
exports.Footer = Footer;
exports.ServiceSections = ServiceSections;