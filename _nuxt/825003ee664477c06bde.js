(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{148:function(t,e,l){"use strict";var o={name:"HeaderTwo",mounted:function(){var t=$(window),e=$("#sticker");t.on("scroll",(function(){t.scrollTop()<300?e.removeClass("stick"):e.addClass("stick")})),$("nav#dropdown").meanmenu(),new WOW({offset:100,mobile:!0}).init(),$.scrollUp({scrollText:'<i class="ti-arrow-up"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"});var l=$(".panel-heading a");l.on("click",(function(){l.removeClass("active"),$(this).addClass("active")}))}},n=l(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header-two"},[t._m(0),t._v(" "),l("div",{staticClass:"header-area header-area-2 hidden-xs",attrs:{id:"sticker"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-3 col-sm-3"},[l("div",{staticClass:"logo"},[l("nuxt-link",{staticClass:"navbar-brand white-logo",attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo.png",alt:""}})]),t._v(" "),l("nuxt-link",{staticClass:"navbar-brand black-logo",attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo2.png",alt:""}})])],1)]),t._v(" "),l("div",{staticClass:"col-md-9 col-sm-9"},[l("div",{staticClass:"header-right-link"},[l("nuxt-link",{staticClass:"s-menu",attrs:{to:"login"}},[t._v("Get in Estimate")])],1),t._v(" "),l("nav",{staticClass:"navbar navbar-default"},[l("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-example"}},[l("div",{staticClass:"main-menu"},[l("ul",{staticClass:"nav navbar-nav navbar-right"},[l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 02")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home 03")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team"}},[t._v("team")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/review"}},[t._v("Review")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing"}},[t._v("Pricing")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("All services")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service-details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Works")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/project"}},[t._v("Projects 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/project-2"}},[t._v("Projects 02")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/project-details"}},[t._v("Project details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog grid")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-sidebar"}},[t._v("Blog Sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("contacts")])],1)])])])])])])])]),t._v(" "),l("div",{staticClass:"mobile-menu-area hidden-lg hidden-md hidden-sm"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("div",{staticClass:"mobile-menu"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/logo2.png",alt:""}})])],1),t._v(" "),l("nav",{attrs:{id:"dropdown"}},[l("ul",[l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 02")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home 03")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team"}},[t._v("team")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/review"}},[t._v("Review")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing"}},[t._v("Pricing")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("All services")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service-details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Works")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/project"}},[t._v("Projects 01")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/project-2"}},[t._v("Projects 02")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/project-details"}},[t._v("Project details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"pagess",attrs:{to:"#"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog grid")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-sidebar"}},[t._v("Blog Sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("contacts")])],1)])])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"topbar-area fix hidden-xs"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:" col-md-9 col-sm-9"},[l("div",{staticClass:"topbar-left"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-envelope"}),t._v(" info@lopard3.com")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-phone-square"}),t._v(" +3234-7665545")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-clock-o"}),t._v(" Mon - Fri: 10:00 - 18:00")])])])])]),t._v(" "),l("div",{staticClass:"col-md-3 col-sm-3"},[l("div",{staticClass:"top-social"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-skype"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-google"})])])])])])])])])}],!1,null,"a11223e6",null);e.a=component.exports},149:function(t,e,l){"use strict";var o={name:"Footer"},n=l(19),component=Object(n.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer1"},[l("div",{staticClass:"footer-area"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-5 col-sm-5 col-xs-12"},[l("div",{staticClass:"footer-content logo-footer"},[l("div",{staticClass:"footer-head"},[l("div",{staticClass:"footer-logo"},[l("a",{staticClass:"footer-black-logo",attrs:{href:"#"}},[l("img",{attrs:{src:"/img/logo/logo2.png",alt:""}})])]),t._v(" "),l("p",[t._v("\n                Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.\n              ")]),t._v(" "),l("div",{staticClass:"subs-feilds"},[l("div",{staticClass:"suscribe-input"},[l("input",{staticClass:"email form-control width-80",attrs:{type:"email",id:"sus_email",placeholder:"Type Email"}}),t._v(" "),l("button",{staticClass:"add-btn",attrs:{type:"submit",id:"sus_submit"}},[t._v("Subscribe")])])])])])]),t._v(" "),l("div",{staticClass:"col-md-4 col-sm-3 col-xs-12"},[l("div",{staticClass:"footer-content"},[l("div",{staticClass:"footer-head"},[l("h4",[t._v("Services Link")]),t._v(" "),l("ul",{staticClass:"footer-list"},[l("li",[l("a",{attrs:{href:"#"}},[t._v("Business")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Agency ")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Social media")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Branding")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Design ")])])]),t._v(" "),l("ul",{staticClass:"footer-list hidden-sm"},[l("li",[l("a",{attrs:{href:"#"}},[t._v("Search engine")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Online support")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Development")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Pay per click")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Event activation")])])])])])]),t._v(" "),l("div",{staticClass:"col-md-3 col-sm-4 col-xs-12"},[l("div",{staticClass:"footer-content last-content"},[l("div",{staticClass:"footer-head"},[l("h4",[t._v("Information")]),t._v(" "),l("div",{staticClass:"footer-contacts"},[l("p",[l("span",[t._v("Tel :")]),t._v(" +0890-564-5644")]),t._v(" "),l("p",[l("span",[t._v("Email :")]),t._v(" info@lopard3.com")]),t._v(" "),l("p",[l("span",[t._v("Location :")]),t._v(" House- 65/4, London")])]),t._v(" "),l("div",{staticClass:"footer-icons"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-google"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-instagram"})])])])])])])])])])]),t._v(" "),l("div",{staticClass:"footer-area-bottom"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[l("div",{staticClass:"copyright"},[l("p",[t._v("\n              Copyright © 2020\n              "),l("a",{attrs:{href:"#"}},[t._v("Lopard")]),t._v(" All Rights Reserved\n            ")])])])])])])])}],!1,null,"69fdaee0",null);e.a=component.exports},150:function(t,e,l){"use strict";var o={name:"PageBanner",props:{pageTitle:{type:String}}},n=l(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-area"},[l("div",{staticClass:"breadcumb-overlay"}),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[l("div",{staticClass:"breadcrumb text-center"},[l("div",{staticClass:"section-headline white-headline text-center"},[l("h3",[t._v(t._s(t.pageTitle))])]),t._v(" "),l("ul",[l("li",{staticClass:"home-bread"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[t._v(t._s(t.pageTitle))])])])])])])])}),[],!1,null,"0f0b4f6c",null);e.a=component.exports},165:function(t,e,l){"use strict";l.r(e);var o=l(148),n=l(150),r={name:"ProjectDetails",mounted:function(){$(".project-carousel-2").owlCarousel({loop:!0,nav:!0,autoplay:!0,dots:!1,margin:30,navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],responsive:{0:{items:1},700:{items:2},1e3:{items:3}}})}},c=l(19),v=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"project-single area-padding"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[l("div",{staticClass:"project-inner project-carousel-2"},[l("div",{staticClass:"project-image"},[l("img",{attrs:{src:"/img/project/1.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"project-image"},[l("img",{attrs:{src:"/img/project/2.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"project-image"},[l("img",{attrs:{src:"/img/project/3.jpg",alt:""}})])])]),t._v(" "),l("div",{staticClass:"col-md-4 col-sm-6 col-xs-12"},[l("div",{staticClass:"project-history"},[l("div",{staticClass:"project-name"},[l("ul",[l("li",[l("span",[t._v("Project")]),t._v(": Lopard")]),t._v(" "),l("li",[l("span",[t._v("Categories")]),t._v(" : Business")]),t._v(" "),l("li",[l("span",[t._v("Status")]),t._v(" : Good")]),t._v(" "),l("li",[l("span",[t._v("Client")]),t._v(" : Honesy Adam")])])])]),t._v(" "),l("div",{staticClass:"new-project"},[l("div",{staticClass:"project-new"},[l("h4",[t._v("Are you Ready new project?")]),t._v(" "),l("a",{staticClass:"hire-btn",attrs:{href:"#"}},[t._v("Contact us")])])])]),t._v(" "),l("div",{staticClass:"col-md-8 col-sm-6 col-xs-12"},[l("div",{staticClass:"project-details"},[l("h3",[t._v("Industry automotion system development")]),t._v(" "),l("p",[t._v("The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.")]),t._v(" "),l("h4",[t._v("Successful Complete project ")]),t._v(" "),l("p",[t._v("When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines.The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.")]),t._v(" "),l("ul",{staticClass:"marker-list"},[l("li",[t._v("Words is roughly being maintained")]),t._v(" "),l("li",[t._v("Letters or begins with a capital letter")]),t._v(" "),l("li",[t._v("Previous casing is maintained")]),t._v(" "),l("li",[t._v("Maintains the amount of lines")])])])])])])])}],!1,null,"1fd4811d",null).exports,_={name:"project-details",components:{Footer:l(149).a,ProjectDetails:v,PageBanner:n.a,HeaderTwo:o.a},head:function(){return{title:"Lopard | Project Details"}}},d=Object(c.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("HeaderTwo"),this._v(" "),e("PageBanner",{attrs:{pageTitle:"Project Details"}}),this._v(" "),e("ProjectDetails"),this._v(" "),e("Footer")],1)}),[],!1,null,"1f34c6c0",null);e.default=d.exports}}]);