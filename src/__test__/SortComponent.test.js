import React from 'react';
import Index from '../pages/Index.js';
import SortComponent from '../components/SortComponent.js';
import { mount, shallow } from 'enzyme';

const demoData = [
                     {
                        "id":120292,
                        "url":"https://app.zonky.cz/loan/120292",
                        "name":"Splačení půjček",
                        "story":"Mám dvě půjčky na podnikání a rád bych je sjednotil do jedné s lepším úrokem, což mi banka nechce umožnit. Proto jsem se rozhodl požádat Zonky o půjčku, která mi toto umožní, abych ušetřil.\n\nDřív jsem půjčky již měl a vše jsem v pořádku splatil. Momentálně tyto dvě půjčky splácím již necelé dva roky a kromě lepšího úroku, budu platit méně a kratší dobu. \nBez problému jsem schopný splácet tyto půjčky ze zisku z podnikání a navíc jsem zaměstnaný, takže mám dva zdroje příjmů. Proto se splácením není žádný problém.\n",
                        "purpose":"6",
                        "photos":[
                           {
                              "name":"refi-default.a7877905.png",
                              "url":"/loans/120292/photos/13409"
                           }
                        ],
                        "userId":151380,
                        "nickName":"zonky151380",
                        "termInMonths":84,
                        "interestRate":0.059900,
                        "rating":"BB",
                        "topped":null,
                        "amount":500000.00,
                        "remainingInvestment":478600.00,
                        "investmentRate":0.0428,
                        "covered":false,
                        "datePublished":"2017-08-20T16:22:51.104+02:00",
                        "published":true,
                        "deadline":"2017-08-22T16:11:19.969+02:00",
                        "investmentsCount":45,
                        "questionsCount":2,
                        "region":"7",
                        "mainIncomeType":"EMPLOYMENT"
                     },
                     {
                        "id":119735,
                        "url":"https://app.zonky.cz/loan/119735",
                        "name":"Splacení Nová bezbariérová koupelna pro Maminku",
                        "story":"Dobrý den milí investoři, \nvyužít službu Zonky mi doporučil syn, který zde aktivně investuje.\n\nPůjčené peníze hodlám využít na rekonstrukci koupelny pro svou Maminku, tak aby byla plně bezbariérová.\nDélku splácení jsem nastavila s velkou rezervou a počítám s mimořádnými splátkami a tedy i s dřívějším splacením celé půjčky.\n\nZa vaši případnou investici děkuji a přeji pěkný den\n\nLiduna ",
                        "purpose":"7",
                        "photos":[
                           {
                              "name":"shutterstock_290447321.63929138.jpg",
                              "url":"/loans/119735/photos/13410"
                           }
                        ],
                        "userId":150725,
                        "nickName":"zonky150725",
                        "termInMonths":72,
                        "interestRate":0.059900,
                        "rating":"AA",
                        "topped":null,
                        "amount":200000.00,
                        "remainingInvestment":115200.00,
                        "investmentRate":0.424,
                        "covered":false,
                        "datePublished":"2017-08-20T17:35:11.029+02:00",
                        "published":true,
                        "deadline":"2017-08-22T17:19:53.698+02:00",
                        "investmentsCount":165,
                        "questionsCount":0,
                        "region":"12",
                        "mainIncomeType":"EMPLOYMENT"
                     }];

describe("Test SortComponent", ()=> {
	it('Test sort by rating ', ()=>{

		const componentIndex = mount(<Index />);
		componentIndex.setState({ posts: demoData})
		const button = componentIndex.find('.rating');
		button.simulate('click')
		
		expect(componentIndex.state().posts[0].rating).toBe('AA');
	});
})
