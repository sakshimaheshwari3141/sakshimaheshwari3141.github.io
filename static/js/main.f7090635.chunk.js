(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{103:function(e,t,s){},105:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(13),i=s.n(n),o=(s(51),s.p,s(52),s(15)),r=(s(53),s(106)),l=s(107),d=s(108),h=s(119),j=s(109),b=s(110),x=s(14),p=s(1),m=function(e){var t=Object(a.useState)(!1),s=Object(o.a)(t,2),c=s[0],n=s[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(r.a,{className:"px-3  py-0 shadow p-2 position-relative fixed-top position-sticky",style:{background:"#ededed"},light:!0,expand:"md",children:[Object(p.jsx)(l.a,{className:"pl-2 text-dark",href:"/",children:"Hope"}),Object(p.jsx)(d.a,{onClick:function(){return n(!c)}}),Object(p.jsx)(h.a,{isOpen:c,navbar:!0,children:Object(p.jsxs)(j.a,{className:"mr-auto",navbar:!0,children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(x.b,{className:"text-dark nav-link",to:"/Home",activeClassName:"selected",children:"Home"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.b,{className:"text-dark nav-link",to:"/Feature",children:"Features/About"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)("span",{className:"text-dark nav-link",style:{cursor:"pointer"},onClick:function(){return function(e){var t=window.open(e,"_self","noopener,noreferrer");t&&(t.opener=null)}("https://forms.gle/XHmPDuTFyBg9qYto9")},children:"FeedBack"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.b,{className:"text-dark nav-link",to:"/Contact",children:"Contact Us"})})]})})]})})},u=(s(67),s.p+"static/media/C2.ef2d9e78.jpg"),g=s(111),O=s(112),y=s(113),f=s(114),w=(s(68),s(69),s(19)),v=s.n(w),k=s(45),N=s.n(k),H=(s(98),s(46)),S=function(e){var t=Object(w.useSpeechRecognition)(),s=(t.transcript,t.interimTranscript,t.finalTranscript),c=t.resetTranscript,n=(t.listening,t.browserSupportsSpeechRecognition,Object(a.useState)("")),i=Object(o.a)(n,2),r=i[0],l=i[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),j=h[0],b=h[1],x=Object(H.useSpeechSynthesis)().speak;Object(a.useEffect)((function(){s&&(console.log("Got final result:",s),l(s))}),[s]),Object(a.useEffect)((function(){m(r)}),[r]),Object(a.useEffect)((function(){x({text:j}),c()}),[j]);var m=function(){N.a.get("https://testassistant.herokuapp.com/"+r).then((function(e){console.log(e),e.data.url&&window.open(e.data.url),b(e.data.data)})).catch((function(e){console.log(e)}))};return console.log(j),console.log("voiceString======",r),console.log("speechString======",j),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g.a,{fluid:!0,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(O.a,{className:"pt-5 pl-5 pr-5",children:[Object(p.jsxs)("div",{className:"col ",children:[Object(p.jsx)("h1",{children:"Hello My name is Hope and Nice to meet you."}),Object(p.jsxs)("h5",{children:["Your sweet and cute voice assistant. If you need any help I am always here to help you\ud83d\ude00.",Object(p.jsx)("br",{}),"Just press the button below.",Object(p.jsx)(y.a,{className:"rounded-circle bg-dark border-primary my-5 mr-2",style:{marginLeft:"4rem"},onClick:function(){v.a.abortListening(),v.a.startListening({continuous:!0})},children:Object(p.jsx)("img",{src:"https://bit.ly/3k4XyHe",style:{width:"100px",height:"100px"}})})," ",r&&Object(p.jsxs)("div",{className:"d-block speech-bubble  ",style:{width:"fit-content",height:"50px",padding:"5px"},children:["\xa0",r,"\xa0"]})]})]}),Object(p.jsx)("div",{className:"col",children:Object(p.jsx)("img",{src:"https://bit.ly/3qIOVVd",style:{width:"60vw",height:"60vh"}})})]}),Object(p.jsx)("hr",{style:{border:"5px solid #1967d2",width:"100%",margin:"0px"}}),Object(p.jsxs)(O.a,{className:"pt-5 pl-5 pr-5",children:[Object(p.jsx)(f.a,{children:Object(p.jsx)("img",{src:u,style:{width:"60vw",height:"60vh"}})}),Object(p.jsxs)(f.a,{className:"p-5",children:[Object(p.jsx)("h1",{children:"Description-"}),Object(p.jsx)("h5",{children:"Hope is your virtual assistant which can do some of your tasks at your voice command. It can do a lot of tasks like doing calculations ,answering questions, giving news , acts like Dictionary , general talking and a lot more. You can find more details at our feature section."})]})]}),Object(p.jsx)("hr",{style:{border:"5px solid #1967d2",width:"100%",margin:"0px"}}),Object(p.jsxs)(O.a,{className:"pt-5 pl-5 pr-5",children:[Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h1",{children:"Why Hope?"}),Object(p.jsx)("h5",{children:"We have google ok, siri or alexa on mobile devices,but none of them is available on desktop and also we have to download app for them. But Hope is also available in desktop form too. It is not as smart as them . But I have try to make it more smart as possible."})]}),Object(p.jsx)(f.a,{children:Object(p.jsx)("img",{src:"https://bit.ly/3qS5fDn",style:{width:"60vw",height:"60vh"}})})]})]})}),Object(p.jsx)("footer",{className:"bg-secondary text-center text-lg-start",children:Object(p.jsx)("div",{className:"text-center p-3 text-white",children:"Created and Designed by Sakshi Maheshwari"})})]})},_=(s(103),function(e){return console.log(e),Object(p.jsx)("div",{style:{backgroundImage:"url(https://bit.ly/2O5qjYu)"},children:Object(p.jsxs)(g.a,{className:"text-dark",style:{background:"#f8f9fa"},children:[Object(p.jsx)("h1",{className:"text-lg-center  pt-4  mt-0",children:"Explore our features"}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)(f.a,{className:"text-center bg-light text-dark m-3 p-3 col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Your Music Player",Object(p.jsx)("img",{src:"https://bit.ly/3b1eBah",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can play songs for you. Just say ",Object(p.jsx)("b",{children:'"Play Music Song_Name"'})," or ",Object(p.jsx)("b",{children:'"Play Song Song_Name"'})," and it will open your song on youtube."]}),Object(p.jsxs)(f.a,{className:"text-center bg-light text-dark m-3 p-3 col-md shadow-sm feature_card ",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Your calculator",Object(p.jsx)("img",{src:"https://bit.ly/3r2TcDa",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can answer you any mathematical expression in BODMAS form. So just say",Object(p.jsx)("b",{children:'"Calculate your_expression" '}),"for example: Calculate 5+3-2%7"]}),Object(p.jsxs)(f.a,{className:"text-center bg-light text-dark m-3 p-3 col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Encyclopedia",Object(p.jsx)("img",{src:"https://bit.ly/3b2BhH7",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can answer you some simple questions like who is who and what is what and some General questions Hope can also make some mistakes but please don't mind that , it is still learning."]})]}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["News",Object(p.jsx)("img",{src:"https://w7.pngwing.com/pngs/748/607/png-transparent-news-media-newspaper-advertising-information-news-icon-text-orange-logo.png",style:{width:"100px",height:"50px",padding:"3px"}})]}),"Hope can give you some news. Just say ",Object(p.jsx)("b",{children:'"Give me some news"'})," and it will give you the news.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Open any Website",Object(p.jsx)("img",{src:"https://bit.ly/3sDvA8j",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can open any website for you. Just say ",Object(p.jsx)("b",{children:'"Open Website Name"'})]}),Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["General Talking",Object(p.jsx)("img",{src:"https://bit.ly/3dTlo7R",style:{width:"50px",height:"50px",padding:"3px"}})]}),"If you are bored , You can talk with Hope and it can talk you in friendly way."]})]}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Dictionary",Object(p.jsx)("img",{src:"https://bit.ly/3sz7UC3",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can tell you antonyms , synonyms and meanings of a word , Just say",Object(p.jsx)("b",{children:'"Antonym of your_word"'})," or ",Object(p.jsx)("b",{children:'"Opposite of your_word"'})," or",Object(p.jsx)("b",{children:'"meaning of your_word"'})]}),Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["Weather Report",Object(p.jsx)("img",{src:"https://bit.ly/3sz7OdF",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can give you information about Weather of a particular city . Just Say",Object(p.jsx)("b",{children:'"weather of city_name"'})]}),Object(p.jsxs)("div",{className:"text-center bg-light text-dark m-3 p-3  col-md shadow-sm feature_card",children:[Object(p.jsxs)("div",{className:"font-weight-bold",children:["A lot more",Object(p.jsx)("img",{src:"https://bit.ly/2O6g85Z",style:{width:"50px",height:"50px",padding:"3px"}})]}),"Hope can give you current time , covid data of india , top 10 news and a lot more. Feel free to explore Hope and give feedback to us."]})]})]})})}),C=s(115),F=s(116),I=s(117),q=s(118),T=function(e){return Object(p.jsx)("div",{style:{backgroundImage:"url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",height:"100vh"},children:Object(p.jsxs)("div",{className:"ml-5 mr-5 p-5 pt-0 mt-0 bg-light text-dark ",children:[Object(p.jsx)("h1",{children:"Contact Us"}),Object(p.jsx)("h5",{children:"Please fill out the form below we will contact you soon"}),Object(p.jsxs)(C.a,{children:[Object(p.jsxs)(F.a,{children:[Object(p.jsx)(I.a,{for:"exampleEmail",children:"Email"}),Object(p.jsx)(q.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"your email",required:!0})]}),Object(p.jsxs)(F.a,{children:[Object(p.jsx)(I.a,{for:"exampleName",children:"Name"}),Object(p.jsx)(q.a,{type:"text",name:"name",id:"exampleName",placeholder:"your name",required:!0})]}),Object(p.jsxs)(F.a,{children:[Object(p.jsx)(I.a,{for:"exampleText",children:"Message"}),Object(p.jsx)(q.a,{type:"textarea",name:"text",id:"exampleText",required:!0})]}),Object(p.jsx)(F.a,{check:!0,children:Object(p.jsxs)(I.a,{check:!0,children:[Object(p.jsx)(q.a,{type:"checkbox",required:!0})," ","I agree to all the terms and conditions applies."]})}),Object(p.jsx)(y.a,{className:"mt-3",children:"Submit"})]})]})})},D=s(7),B=function(e){return Object(p.jsx)(x.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(D.c,{children:[Object(p.jsx)(D.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(D.a,{exact:!0,path:"/Home",component:S}),Object(p.jsx)(D.a,{exact:!0,path:"/Feature",component:_}),Object(p.jsx)(D.a,{exact:!0,path:"/Contact",component:T})]})]})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,120)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};s(104);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),E()},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},67:function(e,t,s){}},[[105,1,2]]]);
//# sourceMappingURL=main.f7090635.chunk.js.map