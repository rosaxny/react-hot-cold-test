import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});