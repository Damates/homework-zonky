import { mount, shallow } from 'enzyme';
import Util from '../components/Util.js'

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

describe("Test Util function for cuting text", ()=> {
	it('Test cuting text by words', ()=>{

		const util = new Util();

		expect(util.cutText(text).split(" ").length).toEqual(20);
	});

	it('Test cuting text by length', ()=>{

		const util = new Util();
		const textWithoutSpace = text.replace(/ /g,"_");
		expect(util.cutText(textWithoutSpace).length).toEqual(200);
	});
})

