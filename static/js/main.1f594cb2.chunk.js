(this["webpackJsonprazr-consulting"]=this["webpackJsonprazr-consulting"]||[]).push([[0],{27:function(e,t,i){},28:function(e,t,i){},38:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(8),c=i.n(n),r=(i(27),i(28),i(20)),o=i(2),l=function(){var e=Object(s.useState)(window.innerWidth),t=Object(o.a)(e,2),i=t[0],a=t[1],n=Object(s.useState)(!1),c=Object(o.a)(n,2),r=c[0],l=c[1],d=Object(s.useState)(!1),m=Object(o.a)(d,2),u=m[0],h=m[1],j=Object(s.useState)(!1),p=Object(o.a)(j,2),b=p[0],f=p[1],x=992,g=1300;return Object(s.useEffect)((function(){a(window.innerWidth),i<x?l(!0):i>=g?f(!0):h(!0)}),[]),{isMobile:r,isDesktop:u,isLargeDesktop:b}},d=i.p+"static/media/RAZRLogo.74b41600.jpg",m=(i(38),i(0)),u=function(){var e=l().isLargeDesktop,t=[{to:"about",offset:e?-60:-80,class:"nav-bar--buttons-about",label:e?"About Us":"About",href:"#about"},{to:"clients",offset:e?-40:-80,class:"nav-bar--buttons-clients",label:"Clients",href:"#clients"},{to:"contact",offset:e?-40:-60,class:"nav-bar--buttons-contact",label:e?"Get In Touch":"Contact",href:"#contact"}];return Object(m.jsxs)("nav",{className:"nav-bar",children:[Object(m.jsx)("div",{className:"nav-bar--logo",children:Object(m.jsx)("img",{src:d,alt:"logo"})}),Object(m.jsx)("div",{className:"nav-bar--buttons",children:t.map((function(e){return Object(m.jsx)(r.Link,{to:e.to,href:e.href,spy:!0,offset:e.offset,children:Object(m.jsx)("button",{className:e.class,children:e.label})},e.label)}))})]})},h=i.p+"static/media/banner.cf0f20bd.jpg",j=(i(40),function(){return Object(m.jsx)("div",{className:"header-wrapper",style:{backgroundImage:"url(".concat(h,")")},children:Object(m.jsx)("div",{className:"header",children:Object(m.jsxs)("div",{className:"header__banner",children:[Object(m.jsx)("div",{className:"header__title",children:"RAZR CONSULTING "}),Object(m.jsx)("div",{className:"header__info",children:"RAZR brings together the global communications, branding and patient advocacy expertise of two award-winning industry leaders with more than 50 years of combined experience."})]})})})}),p=(i(41),i(15)),b=i(21),f=i.n(b),x=i(3),g=i.n(x),O=(i(57),function(e){var t=e.title,i=e.description,a=l().isMobile,n=Object(s.useState)(!1),c=Object(o.a)(n,2),r=c[0],d=c[1],u=g()("area-of-expertise-tile-mobile",{"area-of-expertise-tile-mobile__expanded":r});return Object(m.jsx)("div",{className:"grid-x cell medium-4",children:Object(m.jsx)("div",{className:a?u:"area-of-expertise-tile-wrapper",children:a?Object(m.jsxs)("div",{className:"areas-of-expertise-tile__mobile",onClick:function(){d(!r)},children:[Object(m.jsx)("div",{className:"area-of-expertise-tile__title",children:t}),r&&Object(m.jsx)("div",{className:"area-of-expertise-tile__description",children:i})]}):Object(m.jsxs)("div",{className:"area-of-expertise-tile",children:[Object(m.jsx)("div",{className:"area-of-expertise-tile__title test",children:t}),Object(m.jsx)("div",{className:"area-of-expertise-tile__description",children:i})]})})})}),v=(i(58),function(){var e=l(),t=e.isMobile,i=e.isLargeDesktop,s=[{title:"Corporate Branding, Reputation Management",description:"Positioning and messaging, branding companies and departments (R&D, Patient Advocacy)",image:""},{title:"Creative Serives",description:"Identity development, illustration and MOA graphics, infographics/data visualization, print/digital collateral, annual reports, presentation design, booth design",image:""},{title:"Crisis / Issues Management",description:"Issues identification and mitigation, real-time issues management (product recalls, litigation, reputation)",image:""},{title:"Product / Disease Awareness",description:"Product PR, scientific and medical publicity, disease awareness campaigns",image:""},{title:"Executive Communications",description:"Thought-leadership positioning and communications for C-Suite executives including media training, media outreach, speeches and presentations",image:""},{title:"Employee Engagement",description:"Engagement initiatives to educate, excite and unite employees",image:""},{title:"Patient Advocacy and Access",description:"Enrich development and commercialization support, clarify corporate identity and serve as a rallying point for employees",image:""}],a={dots:!1,infinite:!0,speed:500,slidesToShow:i?3:2,slidesToScroll:i?3:2,arrows:!0};return Object(m.jsx)("div",{className:"areas-of-expertise-wrapper",children:Object(m.jsx)("div",{className:"grid-x areas-of-expertise",children:t?Object(m.jsx)("div",{className:"areas-of-expertise__mobile",children:s.map((function(e){return Object(m.jsx)(O,{title:e.title,description:e.description,image:e.image},e.title)}))}):Object(m.jsx)(f.a,Object(p.a)(Object(p.a)({className:"areas-of-expertise__slider"},a),{},{children:s.map((function(e){return Object(m.jsx)(O,{title:e.title,description:e.description,image:e.image},e.title)}))}))})})}),_=(i(59),function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],n=Object(s.useState)(!1),c=Object(o.a)(n,2),r=c[0],l=c[1],d=function(){a(!i)},u=function(){l(!r)};return Object(m.jsxs)("div",{className:"profiles",children:[Object(m.jsx)("div",{className:"profiles__header",children:"RAZR Consulting has more than 50 years of combined experience in the technology and life sciences industries with proven success developing and leading communications to advance business goals for companies across corporate, healthcare and public sectors."}),Object(m.jsxs)("div",{className:"profiles__bios-wrapper",children:[Object(m.jsx)("div",{className:"profiles__profile-wrapper",children:Object(m.jsxs)("div",{className:"profiles__profile",children:[Object(m.jsx)("div",{className:"profiles__description-title",children:"Lisa Adler"}),Object(m.jsx)("div",{className:"profiles__image"}),Object(m.jsx)("div",{className:"profiles__description-wrapper",children:i?Object(m.jsxs)("div",{className:"profiles__description-expanded",children:["Lisa Adler has held several executive leadership roles in the life sciences community; most recently at Shire Pharmaceuticals, Ironwood Pharmaceuticals, Millennium Pharmaceuticals (now Takeda Oncology) and Johnson & Johnson. Earlier in her career, she held a position as Managing Director at Feinstein Kean Healthcare, and went on to subsequent leadership roles at various global communications firms. Lisa is a Board member of MassBio and the National Institute for Psychobiology in Israel. She is known throughout the industry for her sense of humor and love of storytelling.",Object(m.jsx)("button",{className:"profiles__description-button",onClick:d,children:"Hide description"})]}):Object(m.jsxs)("div",{className:"profiles__description",children:[Object(m.jsx)("div",{className:"profiles__description-text",children:"Lisa Adler has held several executive leadership roles in the life sciences community; most recently at Shire Pharmaceuticals, Ironwood Pharmaceuticals, Millennium Pharmaceuticals (now Takeda Oncology) and Johnson & Johnson. "}),Object(m.jsx)("button",{className:"profiles__description-button",onClick:d,children:"Click to learn more about Lisa"})]})})]})}),Object(m.jsx)("div",{className:"profiles__profile-wrapper",children:Object(m.jsxs)("div",{className:"profiles__profile",children:[Object(m.jsx)("div",{className:"profiles__description-title",children:"Shawn Goodman"}),Object(m.jsx)("div",{className:"profiles__image"}),Object(m.jsx)("div",{className:"profiles__description-wrapper",children:r?Object(m.jsxs)("div",{className:"profiles__description-expanded",children:["Shawn Goodman has held leadership roles in the commercial groups at COR Therapeutics and Millennium Pharmaceuticals with a primary focus on corporate and product branding and creative services. Most recently as VP, Global Oncology Communications for Takeda, he has spent the last decade creating and producing award-winning communications. Shawn has built and led multiple graphic design teams and holds two patents for innovative pharmaceutical packaging design. He spends his spare time redesigning the world around him and raising his Jack Russell puppies.",Object(m.jsx)("button",{className:"profiles__description-button",onClick:u,children:"Hide description"})]}):Object(m.jsxs)("div",{className:"profiles__description",children:[Object(m.jsx)("div",{className:"profiles__description-text",children:"Shawn Goodman has held leadership roles in the commercial groups at COR Therapeutics and Millennium Pharmaceuticals with a primary focus on corporate and product branding and creative services. "}),Object(m.jsx)("button",{className:"profiles__description-button",onClick:u,children:"Click to learn more about Shawn"})]})})]})})]})]})}),N=function(){return Object(m.jsxs)("div",{className:"about-us",id:"about",children:[Object(m.jsxs)("div",{className:"about-us__header-wrapper",children:[Object(m.jsx)("div",{className:"about-us__header",children:" Who We Are"}),Object(m.jsx)("div",{className:"about-us__description",children:"We have been at the forefront of corporate, executive and product communications, both in-house and at PR/advertising agencies. While much of our work has been global, we are also highly entrenched in the Boston metro biotech ecosystem."})]}),Object(m.jsx)(v,{}),Object(m.jsx)(_,{})]})},w=(i(60),function(){var e=l().isMobile;return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("div",{className:"footer__contact",children:[Object(m.jsx)("div",{className:"footer__contact-phone",children:"617-413-1296"}),Object(m.jsx)("div",{className:"footer__contact-email",children:"info@razrconsult.com"})]}),!e&&Object(m.jsx)("div",{className:"footer__icon",children:Object(m.jsx)("img",{src:d,alt:"logo"})})]})}),y=i.p+"static/media/allena-pharma.6cc1e328.jpg",S=i.p+"static/media/seagen.5708df21.jpeg",k=i.p+"static/media/notable.0520e574.jpg",C=(i(61),function(){var e=[y,S,k];return Object(m.jsxs)("div",{className:"clients",children:[Object(m.jsx)("div",{className:"clients__title",children:"Clients"}),Object(m.jsx)("ul",{className:"clients__logos",children:e.map((function(t,i){return Object(m.jsx)("li",{className:e.length>=4?"clients__logo-extended":"clients__logo",children:Object(m.jsx)("img",{src:t,alt:"client-logo"})},i)}))})]})}),P=i(22),I=(i(62),function(){var e=Object(s.useState)("Send Inquiry"),t=Object(o.a)(e,2),i=t[0],a=t[1];return Object(m.jsx)("div",{className:"container contact-form-wrapper",id:"contact",children:Object(m.jsxs)("div",{className:"contact-form",children:[Object(m.jsx)("div",{className:"contact-form__title",children:"Get In Touch"}),Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"row contact-form__form",id:"form",onSubmit:function(e){e.preventDefault(),P.a.sendForm("service_n2eq9jh","template_b6ze716",e.target,"user_hv1Io7BwHTvuk2FdRG9on").then((function(){document.getElementById("form").reset(),a("Message Sent"),setTimeout((function(){a("Send Inquiry")}),3e3)})).catch((function(e){return console.log(e)}))},children:[Object(m.jsx)("label",{children:"Name: "}),Object(m.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name..."}),Object(m.jsx)("label",{children:"Email: "}),Object(m.jsx)("input",{type:"text",name:"user_email",className:"form-control",placeholder:"Email..."}),Object(m.jsx)("label",{children:"Message: "}),Object(m.jsx)("textarea",{name:"message",rows:"4",className:"form-control contact-form__form-message",placeholder:"Say hello..."}),Object(m.jsx)("button",{type:"submit",className:"form-control contact-form__submit",children:i})]})})]})})});var M=function(){return Object(m.jsxs)("div",{className:"razr-consulting",children:[Object(m.jsx)(u,{}),Object(m.jsx)(j,{}),Object(m.jsx)(N,{}),Object(m.jsx)(C,{}),Object(m.jsx)(I,{}),Object(m.jsx)(w,{})]})},R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,64)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),R()}},[[63,1,2]]]);
//# sourceMappingURL=main.1f594cb2.chunk.js.map