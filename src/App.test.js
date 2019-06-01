import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import Championship from './components/Championship';
import NewChampionship from './components/NewChampionship';

configure({ adapter: new Adapter() })

it('app levanta ok', () => {
  shallow(<App />)
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Boton Crear Torneo redirecciona bien', () => {
  const wrapper = shallow(<Championship/>)
  const btnNuevoTorneo = wrapper.find('#NewChampionship')
  btnNuevoTorneo.simulate('click')
  wrapper.instance(<NewChampionship/>)
})
