(this.webpackJsonprushblock=this.webpackJsonprushblock||[]).push([[0],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),o=a.n(l),c=a(6),s=a.n(c),i=a(10),d=a(53),m=a(54),u=a(11),E=a(57),b=a(56),h=(a(64),a(65),{tronWeb:!1,contract:!1,setTronWeb:function(e,t){var a=this;return Object(i.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("contractAddress",t),a.tronWeb=e,n.next=4,e.contract().at(t);case 4:a.contract=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}),p=a(55),g=a.n(p),f=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={tronwebaddress:"Laoding ........",balance:"Laoding ........",Interest:"Laoding ........",Deposit:"Laoding ........",TotalInterest:"Laoding ........",conBalance:"Laoding ........",value:"",timeIn:"Laoding ........",Nowtime:0,tronWeb:{installed:!1,loggedIn:!1}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,new Promise((function(e){var t={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(t.installed)return a.setState({tronWeb:t}),e();var n=0,r=setInterval((function(){if(n>=10){return window.tronWeb=new g.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),a.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(t.installed=!!window.tronWeb,t.loggedIn=window.tronWeb&&window.tronWeb.ready,!t.installed)return n++;a.setState({tronWeb:t}),e()}),100)}));case 3:return this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChanged",(function(){a.state.tronWeb.loggedIn||a.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),e.next=6,h.setTronWeb(window.tronWeb,"TJSPx5fyCtCk5Rp76EUAQYpTtE4abL7ss3");case 6:return t=h.tronWeb.defaultAddress.base58,e.next=9,this.setState({tronwebaddress:t});case 9:console.log("tmp_tronwebaddress",t),this.updateStat(),this.UpdateFirst();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateStat",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval((function(){var e=h.tronWeb.defaultAddress.base58;t.state.tronwebaddress!=e&&window.location.reload(),h.contract.contractBalance().call().then((function(e){t.setState({conBalance:(e.toNumber()/1e6).toFixed(3)})})),h.contract.timeIn(t.state.tronwebaddress).call().then((function(e){t.setState({timeIn:e.toNumber()})})),h.contract.getInterest().call().then((function(e){t.setState({Interest:e.toNumber()/1e6})})),h.contract.Wallet(t.state.tronwebaddress).call().then((function(e){console.log("Deposit",e.toNumber()),t.setState({Deposit:e.toNumber()/1e6}),e.toNumber()<=1e8?document.getElementById("perc").textContent="4":e.toNumber()<=5e8?document.getElementById("perc").textContent="6":e.toNumber()<=1e9?document.getElementById("perc").textContent="8":document.getElementById("perc").textContent="10"})),h.contract.getTotalInterest().call().then((function(e){t.setState({TotalInterest:(e.toNumber()/1e6).toFixed(3)})}))}),5e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"UpdateFirst",value:function(){var e=this;setInterval((function(){var t=1e6*e.state.Deposit;if(t>=1e6){var a=(t<5e8?4*t/100:t>=5e8&&t<=1e9?6*t/100:t>=1e9&&t<=2e9?8*t/100:10*t/100)/86400*(Date.now()/1e3-e.state.timeIn);e.setState({Nowtime:(a/1e6).toFixed(5)}),document.title=0==a?"Rushline - Interest Protocal":"BAL "+(a/1e6).toFixed(5)+" TRX"}}),1e3)}},{key:"withdraw",value:function(e){h.contract.Withdraw(e).send().then((function(e){}))}},{key:"reinvest",value:function(){h.contract.reinvest().send().then((function(e){}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=1e6*this.state.value;h.contract.potFund().send({callValue:t}).then((function(e){})),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mainCover"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("label",{className:"redColor coverHd"},"RUSH ")),r.a.createElement("div",{className:"pdhd"},r.a.createElement("label",{className:"whiteColor ",style:{color:"white",fontSize:100}},"BLOCK"))),r.a.createElement("div",{className:"col-7 "},r.a.createElement("label",{style:{fontSize:40}},"Best Way To Earn Stake Your Tron and Earn Daily interest"," ",r.a.createElement("span",{className:"redColor"},"Rush")," Line"),r.a.createElement("label",{style:{color:"lightgrey"}},"Staking rate :"," ",r.a.createElement("span",{style:{color:"grey"}}," 4 - 10 % Daily"),r.a.createElement("span",{style:{color:"grey",fontSize:14}}," ","( 4% 0 - 500 TRX, 6% > 500 TRX, 8% > 1000 TRX & 10% > 2000 TRX )")),r.a.createElement("div",{className:"desc"},r.a.createElement("span",null,"Provably transparent"," ",r.a.createElement("i",{className:"fas ch fa-chevron-right"}))," ","\xa0 \xa0",r.a.createElement("span",null,"Open-source smart contract"," ",r.a.createElement("i",{className:"fas ch fa-chevron-right"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"Start Earning immediately"),r.a.createElement("label",{className:"inputCover"},r.a.createElement("span",null,"\xa0\xa0\xa0\xa0MAX\xa0\xa0\xa0\xa0"),r.a.createElement("input",{placeholder:"0.0000",className:"playInp",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{className:"btn play",onClick:this.handleSubmit},"PLAY WITH TRON")),r.a.createElement("br",null)))),r.a.createElement("div",null,r.a.createElement("div",{className:"dashboard"},r.a.createElement("label",null,this.state.tronWeb.installed?r.a.createElement("span",{style:{color:"grey"}}," Tronlink : ",r.a.createElement("span",{style:{color:"#00ff00"}},"Connected")," "):r.a.createElement("span",{style:{color:"grey"}}," Tronlink : ",r.a.createElement("span",{style:{color:"brown"}},"Not Connected")," ")),r.a.createElement("div",{className:""},r.a.createElement("div",{style:{width:"70%",background:"#171310",padding:10,margin:"auto"}},r.a.createElement("label",null," ",r.a.createElement("span",{className:"redColor"},"Rush "),"Bank :"," ",r.a.createElement("span",{style:{color:"lightgrey"}},this.state.conBalance)," ","TRX"))," ",r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:"",style:{color:"green"}},"Your Deposit"),r.a.createElement("h4",null," ",r.a.createElement("span",{style:{color:"grey"}},this.state.Deposit," TRX"))),r.a.createElement("h5",null,"CURRENT INTEREST"," ",r.a.createElement("span",{style:{color:"grey",fontSize:14}},"(~ ",r.a.createElement("span",{id:"perc"},"?"),"%)")),r.a.createElement("span",{className:"amt"},this.state.Nowtime)," TRX"),r.a.createElement("div",{style:{color:"grey"}},"Total Interest :",r.a.createElement("span",{style:{color:"#d0c3db",fontWeight:"bold"}}," ",this.state.TotalInterest)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",style:{background:"#6f4d54",height:60},onClick:function(t){t.preventDefault(),e.withdraw(1)}},"WITHDRAW INTEREST",r.a.createElement("br",null)," ( > 0.1 TRX)"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn",onClick:function(t){t.preventDefault(),e.withdraw(2)}},"WITHDRAW ALL FUND"),r.a.createElement("button",{className:"btn",onClick:function(t){t.preventDefault(),e.reinvest()},style:{background:"green"}},"REINVEST")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"grey",fontSize:12}},"ENS : ",r.a.createElement("a",{href:"https://tronscan.org/#/contract/TJSPx5fyCtCk5Rp76EUAQYpTtE4abL7ss3/code",style:{color:"lightblue"}},"RUSHLINE")))),r.a.createElement("div",{className:"row mainCover"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"mid"},r.a.createElement("h6",null,"STAKE YOUR TRON"),r.a.createElement("p",{style:{fontSize:17,color:"#708090"}},"Start earning with us by staking your tron token and start earning immediately."))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"mid"},r.a.createElement("h6",null,"EARN INTEREST"),r.a.createElement("p",{style:{fontSize:17,color:"#708090"}},"Start recieving daily interest on your staked amount."," ",r.a.createElement("br",null),"(4% for tron and 10% for saving with us)."))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"mid"},r.a.createElement("h6",null,"WITHDRAW EARNINGS"),r.a.createElement("p",{style:{fontSize:17,color:"#708090"}},"Transfer your earning to your wallet anytime. No limit .")))),r.a.createElement("div",{className:"footer",align:"center"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://discord.gg/5YkVtFa",target:"blank"},r.a.createElement("i",{className:"fab fa-discord"})," \xa0"," "),r.a.createElement("i",{className:"fab fa-telegram"})),"\xa9 2020 Rushline")))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(196)},65:function(e,t,a){},91:function(e,t){},92:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.28b24d8c.chunk.js.map
