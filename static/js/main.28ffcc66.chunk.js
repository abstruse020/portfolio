(this.webpackJsonpportfolio3=this.webpackJsonpportfolio3||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"navbarData":{"link1":"About","link2":"Skills","link3":"projects"},"LandingData":{"FirstName":"Harsh","LastName":"Pandey","about":"About data whill be displayed here. Fulfilling the thirst of knowledge Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo","twitterLink":"https://twitter.com/HARSHPA93472384","facebookLink":"https://www.facebook.com/harsh.pandey.9026","githubLink":"https://github.com/abstruse020"},"Skills":[{"name":"C++","about":"Primary language for Competitive coding, Codechef https://www.codechef.com/users/abstruse,","link":"../Assets/CppLogo.png"},{"name":"Python","about":"Used in implementing Deep Learning projects","link":"pythonlogo"},{"name":"Android","about":"Done online and offline courses and made projects","link":"../Assets/CppLogo.png"},{"name":"PHP","about":"Made Departmental site of college","link":"../Assets/CppLogo.png"},{"name":"Working on React and Flask","about":"Learning them for personal projects","link":"../Assets/CppLogo.png"}],"Projects":[{"name":"KNIT Departmental Site","about":"Created college Departmental site with 2 of my collegues"},{"name":"Songs Recommendation System","about":"Developed Deep Learning application using Boltzman Machine for 3rd year project"},{"name":"BSecure","about":"Android app to encrypt a text file and convert it into an image"}]}')},function(e,a,t){e.exports=t.p+"static/media/CppLogo.8f42e018.png"},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/profile.494f673f.jpg"},function(e,a,t){e.exports=t.p+"static/media/PythonLogo.b9bbb1d7.png"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),c=(t(15),t(1)),i=t(2),o=t(4),m=t(3),p=t(5),u=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).navData=e.navbarData,t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"my_nav fixed-top navbar-expand-md navbar-dark"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#my_nav_collapse","aria-controls":"#my_nav_collapse","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"my_nav_collapse"},l.a.createElement("ul",{className:"navbar-nav mx-auto"},l.a.createElement("li",{className:"navbar_links nav-item"},l.a.createElement("a",{className:"nav-link",href:"#about"},this.navData.link1,l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement("li",{className:"navbar_links nav-item"},l.a.createElement("a",{className:"nav-link",href:"#skills"},this.navData.link2)))))}}]),a}(n.Component),d=t(6),b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).LanData=e.landingData,t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"about",className:"land_cover"},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"col-md-4 image_section"},l.a.createElement("img",{id:"my_photo",className:"",src:t(16),alt:"profile pic",onClick:"../Assets/profile.jpg"}),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:this.LanData.twitterLink,target:"_blank",rel:"noopener noreferrer",class:"fa fa-twitter"}),l.a.createElement("a",{href:this.LanData.githubLink,target:"_blank",rel:"noopener noreferrer",class:"fa fa-github"}),l.a.createElement("a",{href:this.LanData.facebookLink,target:"_blank",rel:"noopener noreferrer",class:"fa fa-facebook"}))),l.a.createElement("li",{className:"col-md-8"},l.a.createElement("p",{className:"name_section"},this.LanData.FirstName," ",this.LanData.LastName),l.a.createElement("div",{className:"other_section"},this.LanData.about))))}}]),a}(n.Component),g=t(7),h=t.n(g),f=(t(17),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skillsData=e.SkillsData,t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"skills",className:"skills_cover"},l.a.createElement("heading",{className:"skills_heading"},"S",l.a.createElement("br",null),"k",l.a.createElement("br",null),"i",l.a.createElement("br",null),"l",l.a.createElement("br",null),"l",l.a.createElement("br",null),"s"),l.a.createElement("div",{className:"card-columns"},this.skillsData.map((function(e,a){return l.a.createElement("dvi",{className:""},l.a.createElement("div",{key:a,className:"card skills_card align-items-center"},l.a.createElement("img",{className:"card-img-top skills_img mx-auto d-block",src:h.a,alt:"no img"}),l.a.createElement("p",{className:"card-body text-center"},l.a.createElement("span",{className:"card-title"},e.name))))}))))}}]),a}(n.Component)),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).projectData=e.ProjectData,t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"project_cover"},l.a.createElement("div",null,this.projectData.map((function(e,a){return l.a.createElement("dvi",{className:""},l.a.createElement("div",{key:a,className:"card skills_card align-items-center"},l.a.createElement("img",{className:"card-img-top skills_img mx-auto d-block",src:h.a,alt:"no img"}),l.a.createElement("p",{className:"card-body text-center"},l.a.createElement("span",{className:"card-title"},e.name))))}))))}}]),a}(n.Component),v=(t(18),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={navData:d.navbarData,landingData:d.LandingData,skillsData:d.Skills,projectData:d.Projects},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bgimage"},l.a.createElement(u,{navbarData:this.state.navData}),l.a.createElement(b,{landingData:this.state.landingData}),l.a.createElement(f,{SkillsData:this.state.skillsData}),l.a.createElement(k,{ProjectData:this.state.projectData}),l.a.createElement("div",{className:""}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.28ffcc66.chunk.js.map