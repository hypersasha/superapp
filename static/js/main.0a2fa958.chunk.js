(window.webpackJsonpsuperapp=window.webpackJsonpsuperapp||[]).push([[0],{213:function(e,t,a){e.exports=a(331)},331:function(e,t,a){"use strict";a.r(t);a(214),a(240),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282);var n=a(0),i=a.n(n),s=a(47),r=a.n(s),o=a(36),c=a.n(o),l=a(111),p=a.n(l),u=a(152),d=a(67),h=a(166),m=a.n(h),f=a(167),b=a.n(f),v=a(115),k=a.n(v),E=(a(291),a(40)),g=a(64),O=a(51),y=a(52),j=a(58),S=a(53),C=a(21),T=a(57),w=a(91),P=a.n(w),_=a(70),A=a.n(_),x=a(66),I=a.n(x),z=a(55),F=a.n(z),D=a(160),M=a.n(D),N=a(161),U=a.n(N),B=a(63),J=a(162),W=a.n(J),L=a(163),V=a.n(L),G=a(114),R=a.n(G),H=a(92),K=a.n(H),q=a(56),X=a.n(q),Y=a(65),Q=a(93),Z=a.n(Q),$=a(85),ee=a.n($),te=a(153),ae=a.n(te),ne=a(112),ie=a.n(ne),se=a(84),re=a(77),oe=a.n(re),ce=a(90),le=a.n(ce),pe=a(33),ue=a.n(pe),de=a(41),he=a.n(de),me=a(7),fe=a(89),be=a.n(fe),ve=a(86),ke=a.n(ve),Ee=a(87),ge=a.n(Ee),Oe=(a(317),a(88)),ye=a.n(Oe),je=a(76),Se=a.n(je),Ce=a(59),Te=a.n(Ce),we=a(156),Pe=a.n(we),_e=a(157),Ae=a.n(_e),xe=Object(me.u)(),Ie=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).state={activeTab:"info",data:null,allTasksFilter:!0,addingTask:!1,taskTitle:"",taskDescription:"",taskTeamSize:1,refresh:0,isJoined:!1},a.ShowAddingTask=a.ShowAddingTask.bind(Object(C.a)(a)),a.HideAddingTask=a.HideAddingTask.bind(Object(C.a)(a)),a.onChange=a.onChange.bind(Object(C.a)(a)),a.AddTask=a.AddTask.bind(Object(C.a)(a)),a.NumberToString=a.NumberToString.bind(Object(C.a)(a)),a.JoinEvent=a.JoinEvent.bind(Object(C.a)(a)),a.ChangeTab=a.ChangeTab.bind(Object(C.a)(a)),a}return Object(T.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.FetchEvent()}},{key:"FetchEvent",value:function(){var e=this;he.a.get("https://hypersasha.club/event",{params:{eventID:this.props.activeProject}}).then((function(t){var a=!1;t.data&&t.data.members.forEach((function(t){a=t.user_id===e.props.userId})),e.setState({data:t.data,isJoined:a})})).catch((function(t){console.log(t),e.setState({data:null})}))}},{key:"ShowAddingTask",value:function(){this.setState({addingTask:!0})}},{key:"HideAddingTask",value:function(){this.setState({addingTask:!1})}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"NumberToString",value:function(e,t){var a=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:a>1&&a<5?t[1]:1===a?t[0]:t[2]}},{key:"AddTask",value:function(){var e=this,t=this.state,a=t.taskTitle,n=t.taskDescription,i=t.taskTeamSize,s=parseInt(i);a.length>4&&s&&s>0&&(console.log("adding task...."),this.props.onShowScreenSpinner(),he.a.post("https://hypersasha.club/task",{event_id:this.props.activeProject,title:a,description:n,team_size:s}).then((function(t){200===t.status?(e.setState({taskTitle:"",taskDescription:"",taskTeamSize:1}),e.props.onTaskAdded(),e.FetchEvent()):e.props.onTaskAdded()})).catch((function(t){console.error(t),e.props.onTaskAdded()})))}},{key:"JoinEvent",value:function(e){var t=this;this.props.activeProject&&(this.props.onShowScreenSpinner(),he.a.post("https://hypersasha.club/join",{event_id:this.props.activeProject,member_id:e}).then((function(e){200===e.status&&(t.props.onTaskAdded("\u0412\u044b \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0438\u0441\u044c \u043a \u0441\u043e\u0431\u044b\u0442\u0438\u044e."),t.setState({isJoined:!0}),t.FetchEvent())})).catch((function(e){console.error(e),t.props.collapsePopout()})))}},{key:"ChangeTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e,t,a=this,n=this.state,s=n.data,r=n.addingTask,o=n.taskTitle,c=n.taskDescription,l=n.taskTeamSize,p=n.isJoined,u=(Object(E.a)(n,["data","addingTask","taskTitle","taskDescription","taskTeamSize","isJoined"]),this.props),d=u.id,h=u.goBack,m=u.userId,f=u.openTask;Object(E.a)(u,["id","goBack","userId","openTask"]);s&&(e=s.tasks.map((function(e){return i.a.createElement(me.c,{key:1009090*Math.random(),onClick:function(){f(e)},description:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f "+e.team_size+" "+a.NumberToString(e.team_size,["\u0447\u0435\u043b\u043e\u0432\u0435\u043a","\u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430","\u0447\u0435\u043b\u043e\u0432\u0435\u043a"]),before:i.a.createElement(ye.a,{fill:e.status?"var(--dynamic_green)":""}),expandable:!0},e.title)})),t=s.members.map((function(e){return i.a.createElement(me.c,{key:e.user_id,before:i.a.createElement(Te.a,{size:48,src:e.photo})},e.first_name+" "+e.last_name)})));return i.a.createElement(I.a,{id:d},i.a.createElement(F.a,{noShadow:!0,left:i.a.createElement(be.a,{onClick:function(){h("feed-list")}},xe===me.j?i.a.createElement(ke.a,null):i.a.createElement(ge.a,null))},"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),i.a.createElement(me.f,{vertical:"top"},i.a.createElement(me.r,{theme:"header",type:"buttons"},i.a.createElement(me.i,null,i.a.createElement(me.s,{selected:"info"===this.state.activeTab,onClick:function(){a.ChangeTab("info")}},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),i.a.createElement(me.s,{selected:"members"===this.state.activeTab,onClick:function(){a.ChangeTab("members")}},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),i.a.createElement(me.s,{selected:"rewards"===this.state.activeTab,onClick:function(){a.ChangeTab("rewards")}},"\u041f\u043e\u043e\u0449\u0435\u0440\u0435\u043d\u0438\u044f")))),!s&&i.a.createElement(X.a,{style:{marginTop:10}},i.a.createElement(Pe.a,null)),s&&"info"===this.state.activeTab&&i.a.createElement(me.h,{style:{marginTop:44}},i.a.createElement(me.l,null,i.a.createElement(me.c,{before:i.a.createElement(Te.a,{src:s.author&&s.author.photo,size:64}),size:"l",multiline:!0,description:s.author&&s.author.first_name+" "+s.author.last_name,bottomContent:i.a.createElement("div",{style:{display:"flex"}},p?i.a.createElement(ue.a,{level:"secondary",size:"m",onClick:function(){}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"):i.a.createElement(ue.a,{size:"m",onClick:function(){a.JoinEvent(m)}},"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"))},s.title))),s&&s.description&&s.description.length>10&&"info"===this.state.activeTab&&i.a.createElement(me.h,null,i.a.createElement(X.a,null,i.a.createElement(me.k,{title:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},s.description))),s&&s.author&&s.author.user_id===m&&"info"===this.state.activeTab&&i.a.createElement(me.h,null,r?i.a.createElement(me.d,{level:"danger",onClick:this.HideAddingTask,before:i.a.createElement(Se.a,null),align:"center"},"\u041e\u0442\u043c\u0435\u043d\u0430"):i.a.createElement(me.d,{onClick:this.ShowAddingTask,before:i.a.createElement(ee.a,null),align:"center"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r&&i.a.createElement(Ae.a,null,i.a.createElement(oe.a,{type:"text",value:o,onChange:this.onChange,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \xab\u041d\u0430\u0434\u0443\u0442\u044c \u0448\u0430\u0440\u0438\u043a\u0438\xbb",top:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",name:"taskTitle"}),i.a.createElement(le.a,{top:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"taskDescription",onChange:this.onChange,value:c,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \xab\u0428\u0430\u0440\u0438\u043a\u043e\u0432 \u043d\u0435 \u0434\u0430\u043b\u0438, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0430\u043b\u0438, \u0432\u043e\u0442 \u0442\u0430\u043a \u0433\u043b\u0430\u0437\u0430 \u0440\u0430\u0441\u043a\u0440\u044b\u043b\u0438..\xbb."}),i.a.createElement(oe.a,{type:"number",value:l,onChange:this.onChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439",name:"taskTeamSize"}),i.a.createElement(ue.a,{size:"xl",onClick:this.AddTask},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),s&&e.length>0&&"info"===this.state.activeTab&&i.a.createElement(me.h,null,i.a.createElement(me.r,{type:"buttons"},i.a.createElement(me.i,null,i.a.createElement(me.s,{selected:this.state.allTasksFilter},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),i.a.createElement(me.s,{selected:!this.state.allTasksFilter},"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"))),i.a.createElement(me.l,null,e)),s&&s.members&&"members"===this.state.activeTab&&i.a.createElement("div",null,i.a.createElement(me.h,{style:{marginTop:46}},i.a.createElement(me.l,null,t)),i.a.createElement(me.g,null,t.length+" "+this.NumberToString(t.length,["\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"]))),s&&"rewards"===this.state.activeTab&&i.a.createElement("div",null,i.a.createElement(me.h,{style:{marginTop:46}},i.a.createElement(me.l,null,i.a.createElement(me.c,{description:"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",asideContent:i.a.createElement(me.e,{type:"secondary"},"12"),before:i.a.createElement(Te.a,{size:72,type:"app",src:"https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"})},"\u0411\u0438\u043b\u0435\u0442\u044b \u043d\u0430 Arctic Monkeys"),i.a.createElement(me.c,{description:"Epic Games",asideContent:i.a.createElement(me.e,{type:"secondary"},"12"),before:i.a.createElement(Te.a,{size:72,type:"app",src:"https://cdn.vox-cdn.com/thumbor/t3tmcYOjzDeqbvHCk8gTcL3XXLI=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63673189/Fortnite_Avengers_Endgame.0.jpg"})},"Fortnite: \u0411\u043e\u0435\u0432\u043e\u0439 \u043f\u0440\u043e\u043f\u0443\u0441\u043a"))),i.a.createElement(me.g,null,"\u0412\u0441\u0435\u0433\u043e 42 \u043f\u043e\u0434\u0430\u0440\u043a\u0430")))}}]),t}(n.Component),ze=a(159),Fe=a.n(ze),De=a(168),Me=a(158),Ne=a.n(Me),Ue=a(113),Be=a.n(Ue);function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Je(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Le=Object(me.u)(),Ve=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).state={isOwner:!1,taskInfo:null},a.NumberToString=a.NumberToString.bind(Object(C.a)(a)),a.JoinTask=a.JoinTask.bind(Object(C.a)(a)),a.FinishTask=a.FinishTask.bind(Object(C.a)(a)),a}return Object(T.a)(t,e),Object(y.a)(t,[{key:"NumberToString",value:function(e,t){var a=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:a>1&&a<5?t[1]:1===a?t[0]:t[2]}},{key:"componentDidMount",value:function(){var e=this;this.setState({taskInfo:this.props.taskInfo}),he.a.get("https://hypersasha.club/event",{params:{eventID:this.props.activeProject}}).then((function(t){if(t&&t.data&&t.data.author){var a=!1;e.props.taskInfo&&e.props.taskInfo&&e.props.taskInfo.team&&e.props.taskInfo.team.map((function(t){t.user_id===e.props.userId&&(a=!0)})),e.setState({isOwner:t.data.author.user_id===e.props.userId,isMember:a})}})).catch((function(e){console.log(e)}))}},{key:"JoinTask",value:function(e){var t=this,a=this.props,n=a.activeProject,i=a.userId;Object(E.a)(a,["activeProject","userId"]);n&&(console.log("joining task...."+e+", "+n,NaN+i),this.props.onShowScreenSpinner(),he.a.post("https://hypersasha.club/task/request/join",{event_id:n,task_id:e,user_id:i||1}).then((function(e){console.log(e),t.setState((function(e){return{isMember:!0,taskInfo:We({},e.taskInfo,{team:[].concat(Object(De.a)(e.taskInfo.team),[{user_id:t.props.fetchedUser.id,first_name:t.props.fetchedUser.first_name,last_name:t.props.fetchedUser.last_name,photo:t.props.fetchedUser.photo_200}])})}})),t.props.onTaskAdded("\u0412\u044b \u043e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438\u0441\u044c \u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0443.")})).catch((function(e){console.error(e),t.props.collapsePopout()})))}},{key:"FinishTask",value:function(e){var t=this,a=this.props,n=a.activeProject,i=a.onShowScreenSpinner,s=a.onTaskAdded;Object(E.a)(a,["activeProject","onShowScreenSpinner","onTaskAdded"]);i(),n&&he.a.post("https://hypersasha.club/task/status",{event_id:n,task_id:e,task_status:!0}).then((function(e){200===e.status&&(s("\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e."),t.setState((function(e){return{taskInfo:We({},e.taskInfo,{status:!0})}})))})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.id,s=a.goBack,r=(Object(E.a)(a,["id","goBack"]),this.state),o=r.taskInfo;Object(E.a)(r,["taskInfo"]);return o&&o.team&&(e=o.team.map((function(e){return i.a.createElement(me.c,{key:e.user_id,asideContent:t.state.isOwner&&i.a.createElement(ue.a,{level:"secondary",onClick:function(){t.props.ShowRewardModal(e.photo)}},i.a.createElement(Ne.a,null)),before:i.a.createElement(me.b,{size:48,src:e.photo})},e.first_name+" "+e.last_name)}))),i.a.createElement(me.o,{id:n},i.a.createElement(me.p,{noShadow:!0,left:i.a.createElement(be.a,{onClick:function(){s("project")}},Le===me.j?i.a.createElement(ke.a,null):i.a.createElement(ge.a,null))},"\u0417\u0430\u0434\u0430\u0447\u0430"),o&&i.a.createElement(me.h,null,i.a.createElement(me.l,null,i.a.createElement(me.c,{key:1009090*Math.random(),multiline:!0,size:"l",bottomContent:i.a.createElement("div",{style:{display:"flex"}},!this.state.isOwner&&!o.status&&!this.state.isMember&&i.a.createElement(ue.a,{size:"m",onClick:function(){t.JoinTask(o.id)}},"\u041e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c\u0441\u044f"),this.state.isOwner&&!o.status&&i.a.createElement(ue.a,{size:"m",onClick:function(){t.FinishTask(o.id)}},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"),!this.state.isOwner&&!o.status&&this.state.isMember&&i.a.createElement(ue.a,{size:"m",level:"secondary",disabled:!0},"\u0412\u044b \u043e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438\u0441\u044c"),o.status&&i.a.createElement(ue.a,{size:"m",level:"secondary",disabled:!0},"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e")),description:o.team_size+" "+this.NumberToString(o.team_size,["\u0447\u0435\u043b\u043e\u0432\u0435\u043a","\u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430","\u0447\u0435\u043b\u043e\u0432\u0435\u043a"]),before:i.a.createElement(ye.a,{fill:o.status?"var(--dynamic_green)":""})},o.title))),o&&o.description&&i.a.createElement(me.h,null,i.a.createElement(X.a,null,i.a.createElement(me.k,{title:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},o.description))),o&&i.a.createElement("div",null,i.a.createElement(me.h,{title:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438",description:e.length<=0?"\u041d\u0430 \u044d\u0442\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0441\u044f.":" "},i.a.createElement(me.l,null,e)),i.a.createElement(me.g,null,e.length+" "+this.NumberToString(e.length,["\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"]))),i.a.createElement(Be.a,{apiId:7150069},i.a.createElement(Ue.Comments,null)),this.props.snackbar)}}]),t}(n.Component),Ge=a(69),Re=a.n(Ge);a(325);function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var qe=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).state={activeView:"feed",activePanel:"feed-list",filterContextOpened:!1,title:"",description:"",fetching:!1,events:[],modal:null,popout:null,activeProject:null,taskInfo:{},activeModal:null,rewardAvatarLink:null,snackbar:null},a.OpenCreateWindow=a.OpenCreateWindow.bind(Object(C.a)(a)),a.CloseCreateWindow=a.CloseCreateWindow.bind(Object(C.a)(a)),a.ApplyFilter=a.ApplyFilter.bind(Object(C.a)(a)),a.ToggleFilterContext=a.ToggleFilterContext.bind(Object(C.a)(a)),a.UpdateEventsList=a.UpdateEventsList.bind(Object(C.a)(a)),a.ComposeEvent=a.ComposeEvent.bind(Object(C.a)(a)),a.onChange=a.onChange.bind(Object(C.a)(a)),a.OpenProject=a.OpenProject.bind(Object(C.a)(a)),a.GoBack=a.GoBack.bind(Object(C.a)(a)),a.ShowScreenSpinner=a.ShowScreenSpinner.bind(Object(C.a)(a)),a.OnTaskAdded=a.OnTaskAdded.bind(Object(C.a)(a)),a.OpenTask=a.OpenTask.bind(Object(C.a)(a)),a.CollapsePopout=a.CollapsePopout.bind(Object(C.a)(a)),a.ShowRewardModal=a.ShowRewardModal.bind(Object(C.a)(a)),a}return Object(T.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.UpdateEventsList()}},{key:"OpenCreateWindow",value:function(){this.props.OnCreateBegins&&this.props.OnCreateBegins(),this.setState({activeView:"create-event"})}},{key:"CloseCreateWindow",value:function(){this.props.OnCreateEnds&&this.props.OnCreateEnds(),this.setState({activeView:"feed"})}},{key:"ApplyFilter",value:function(e){this.ToggleFilterContext(),this.props.OnChangeFilters&&this.props.OnChangeFilters(e)}},{key:"ToggleFilterContext",value:function(){this.setState({filterContextOpened:!this.state.filterContextOpened})}},{key:"UpdateEventsList",value:function(){var e=this;this.setState({fetching:!0},(function(){he.a.get("https://hypersasha.club/allEvents").then((function(t){console.log(t),200===t.status?t.data&&e.setState({events:t.data,fetching:!1}):e.setState({fetching:!1})})).catch((function(t){console.log(t),e.setState({fetching:!1})}))}))}},{key:"ComposeEvent",value:function(e){var t=this;if(this.state.title&&this.state.title.length>4){var a={author_id:e,title:this.state.title||"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0424\u0438\u043d\u0430\u043b",description:this.state.description||"\u0417\u0430\u0449\u0438\u0442\u0430 \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u043d\u0442\u0451\u0440\u0441\u043a\u0438\u0445 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u0438\u0439."};he.a.post("https://hypersasha.club/event",a).then((function(e){t.setState({titleInvalid:!1}),t.CloseCreateWindow(),t.UpdateEventsList(),t.OnTaskAdded("\u041f\u0440\u043e\u0435\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d.")})).catch((function(e){console.log(e)}))}else this.setState({titleInvalid:!0})}},{key:"NumberToString",value:function(e,t){var a=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:a>1&&a<5?t[1]:1===a?t[0]:t[2]}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"OpenProject",value:function(e){this.setState({activePanel:"project",activeProject:e})}},{key:"GoBack",value:function(e){this.setState({activePanel:e})}},{key:"ShowScreenSpinner",value:function(){this.setState({popout:i.a.createElement(Fe.a,null)})}},{key:"OnTaskAdded",value:function(e){var t=this;this.setState({popout:i.a.createElement(me.a,{onClose:function(){t.setState({popout:null})}},i.a.createElement("p",null,e||"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"))}),setTimeout((function(){t.CollapsePopout()}),1750)}},{key:"ShowSnackBar",value:function(e){var t=this;this.setState({snackbar:i.a.createElement(me.q,{onClose:function(){t.setState({snackbar:null})},before:i.a.createElement(Y.a,{size:24,style:{backgroundColor:"var(--dynamic_green)"}},i.a.createElement(Re.a,{fill:"#fff",width:14,height:14})),layout:"vertical"},e)})}},{key:"CollapsePopout",value:function(){this.setState({popout:null})}},{key:"OpenTask",value:function(e){this.setState({activePanel:"task",taskInfo:e})}},{key:"ShowRewardModal",value:function(e){this.setState({activeModal:"reward",rewardAvatarLink:e})}},{key:"OnGiftSent",value:function(){this.setState({activeModal:null}),this.ShowSnackBar("\u041f\u043e\u0434\u0430\u0440\u043e\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d.")}},{key:"render",value:function(){var e=this,t={flexShrink:0,width:80,display:"flex",flexDirection:"column",alignItems:"flex-start",fontSize:12},a=this.state,n=a.title,s=a.description,r=a.titleInvalid,o=a.activePanel,c=a.activeProject,l=a.taskInfo,p=this.props,u=p.id,d=p.onlyUserEvents,h=p.fetchedUser,m=(Object(E.a)(p,["id","onlyUserEvents","fetchedUser"]),h?h.id:1),f=this.state.events;d&&h&&f.length>0&&(f=f.filter((function(e){return e.author.user_id===h.id})));var b=f.filter((function(e){var t=!1;return e.members.forEach((function(e){e.user_id===m&&(t=!0)})),t})),v="";f.length>0&&(v=f.map((function(t){return i.a.createElement(K.a,{before:i.a.createElement(Y.a,{src:t.author&&t.author.photo}),key:t._id,expandable:!0,onClick:function(){e.OpenProject(t._id)},description:t.description},t.title)})));b.length>0&&b.map((function(e){return i.a.createElement("div",{key:e._id,style:Ke({},t,{paddingLeft:4})},i.a.createElement(Y.a,{type:"app",src:e.author&&e.author.photo,size:98,style:{marginBottom:8}}),i.a.createElement("p",null))}));var k=i.a.createElement(me.n,{activeModal:this.state.activeModal},i.a.createElement(me.m,{id:"reward",title:"\u041e\u043d \u044d\u0442\u043e \u0437\u0430\u0441\u043b\u0443\u0436\u0438\u043b!",icon:i.a.createElement(Y.a,{src:this.state.rewardAvatarLink,size:48}),caption:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0438\u0437 \u0432\u0441\u0435\u0445, \u0447\u0442\u043e \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435.",align:"center",actions:[{title:"\u041d\u0430\u0433\u0440\u0430\u0434\u0438\u0442\u044c",type:"primary",action:function(){e.OnGiftSent()}}],onClose:function(){return e.setState({activeModal:null})}},i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(me.t,{count:3,size:"m",photos:["https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg","https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg","https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg","https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"]}))));return i.a.createElement(P.a,{id:u,activeView:this.state.activeView},i.a.createElement(A.a,{id:"feed",activePanel:o,modal:k,popout:this.state.popout},i.a.createElement(I.a,{id:"feed-list"},i.a.createElement(F.a,{left:i.a.createElement(B.a,{onClick:this.OpenCreateWindow},i.a.createElement(ee.a,null))},i.a.createElement(M.a,{onClick:this.ToggleFilterContext,aside:i.a.createElement(ae.a,null)},"\u041f\u0440\u043e\u0435\u043a\u0442\u044b")),i.a.createElement(U.a,{opened:this.state.filterContextOpened,onClose:this.ToggleFilterContext},i.a.createElement(R.a,null,i.a.createElement(K.a,{onClick:function(){e.ApplyFilter(!1)},asideContent:!d&&i.a.createElement(ie.a,{fill:"var(--accent)"})},"\u0412\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"),i.a.createElement(K.a,{onClick:function(){e.ApplyFilter(!0)},asideContent:d&&i.a.createElement(ie.a,{fill:"var(--accent)"})},"\u0422\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0438"))),i.a.createElement(W.a,{onRefresh:this.UpdateEventsList,isFetching:this.state.fetching},i.a.createElement(V.a,{style:{marginTop:0}},v.length<=0&&i.a.createElement(X.a,null,i.a.createElement(Z.a,null,"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f.")),i.a.createElement(R.a,null,v)),i.a.createElement(Z.a,null,v.length," ",this.NumberToString(v.length,["\u0441\u043e\u0431\u044b\u0442\u0438\u0435","\u0441\u043e\u0431\u044b\u0442\u0438\u044f","\u0441\u043e\u0431\u044b\u0442\u0438\u0439"])))),i.a.createElement(Ie,{id:"project",onShowScreenSpinner:this.ShowScreenSpinner,onTaskAdded:this.OnTaskAdded,userId:m,activeProject:c,openTask:this.OpenTask,collapsePopout:this.CollapsePopout,goBack:this.GoBack}),i.a.createElement(Ve,{id:"task",taskInfo:l,userId:m,fetchedUser:h,activeProject:c,collapsePopout:this.CollapsePopout,goBack:this.GoBack,snackbar:this.state.snackbar,ShowRewardModal:this.ShowRewardModal,onTaskAdded:this.OnTaskAdded,onShowScreenSpinner:this.ShowScreenSpinner})),i.a.createElement(A.a,{id:"create-event",activePanel:"base-panel"},i.a.createElement(I.a,{id:"base-panel",theme:"white"},i.a.createElement(F.a,{left:i.a.createElement(B.a,{onClick:this.CloseCreateWindow},"\u041e\u0442\u043c\u0435\u043d\u0430")},"\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"),i.a.createElement(se.a,null,i.a.createElement(oe.a,{onChange:this.onChange,type:"text",value:n,status:r?"error":"default",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0440\u044b\u0432",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",bottom:r&&"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",name:"title"}),i.a.createElement(le.a,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:s,name:"description",onChange:this.onChange,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \xab\u041a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0438\u0439 \u0445\u0430\u043a\u0430\u0442\u043e\u043d \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0432\u043e \u0432\u0441\u0435\u043c \u043c\u0438\u0440\u0435\xbb."}),i.a.createElement(ue.a,{size:"xl",onClick:function(){e.ComposeEvent(m)}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442")),i.a.createElement(Z.a,null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0432 \u043d\u0435\u0433\u043e \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u043e\u0432, \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u0444\u043d\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0435\u043c."))))}}]),t}(n.Component),Xe=a(164),Ye=a.n(Xe),Qe=a(165),Ze=a.n(Qe),$e=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(S.a)(t).call(this,e))).state={activeView:"rewards-list"},a}return Object(T.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){console.log("Rewards!")}},{key:"render",value:function(){var e=this.props,t=e.id;Object(E.a)(e,["id"]);return i.a.createElement(P.a,{id:t,activeView:this.state.activeView},i.a.createElement(A.a,{id:"rewards-list",activePanel:"all-rewards"},i.a.createElement(I.a,{id:"all-rewards"},i.a.createElement(F.a,null,"\u041c\u043e\u0438 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"),i.a.createElement(me.h,{style:{marginTop:0}},i.a.createElement(me.l,null,i.a.createElement(me.c,{description:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c \u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0412\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u043a.",size:"l",multiline:!0,bottomContent:i.a.createElement(ue.a,{onClick:function(){c.a.send("VKWebAppShare",{link:"https://vk.com/app7150069_28455889"})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),before:i.a.createElement(Te.a,{size:72,type:"app",src:"https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"})},"\u0411\u0438\u043b\u0435\u0442\u044b \u043d\u0430 Arctic Monkeys"),i.a.createElement(me.c,{description:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c \u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0412\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u043a.",size:"l",multiline:!0,bottomContent:i.a.createElement(ue.a,{onClick:function(){c.a.send("VKWebAppShare",{link:"https://vk.com/app7150069_28455889"})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),before:i.a.createElement(Te.a,{size:72,type:"app",src:"https://cdn.vox-cdn.com/thumbor/t3tmcYOjzDeqbvHCk8gTcL3XXLI=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63673189/Fortnite_Avengers_Endgame.0.jpg"})},"Fortnite: \u0411\u043e\u0435\u0432\u043e\u0439 \u043f\u0440\u043e\u043f\u0443\u0441\u043a"))),i.a.createElement(me.g,null,"\u0412\u0441\u0435\u0433\u043e 2 \u043f\u043e\u0434\u0430\u0440\u043a\u0430"))))}}]),t}(n.Component),et=function(){var e=Object(n.useState)("events"),t=Object(d.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(!0),o=Object(d.a)(r,2),l=o[0],h=o[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),E=v[0],g=v[1],O=Object(n.useState)("home"),y=(Object(d.a)(O,1)[0],Object(n.useState)("example")),j=Object(d.a)(y,2),S=(j[0],j[1],Object(n.useState)(null)),C=Object(d.a)(S,2),T=C[0],w=C[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var i=document.createAttribute("scheme");i.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(i)}"VKWebAppShareResult"===a&&"story"===n.type&&s("events")})),function(){e.apply(this,arguments)}()}),[]);var P=function(e){s(e.currentTarget.dataset.story)};return i.a.createElement(m.a,{activeStory:a,tabbar:l?i.a.createElement(b.a,null,i.a.createElement(k.a,{"data-story":"events",onClick:P,text:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f",selected:"events"===a},i.a.createElement(Ye.a,null)),i.a.createElement(k.a,{"data-story":"rewards",onClick:P,text:"\u041d\u0430\u0433\u0440\u0430\u0434\u044b",selected:"rewards"===a},i.a.createElement(Ze.a,null))):""},i.a.createElement(qe,{id:"events",fetchedUser:T,OnChangeFilters:function(e){g(e)},onlyUserEvents:E,OnCreateBegins:function(){h(!1)},OnCreateEnds:function(){h(!0)}}),i.a.createElement($e,{id:"rewards",fetchedUser:T}))};c.a.send("VKWebAppInit"),r.a.render(i.a.createElement(et,null),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.0a2fa958.chunk.js.map