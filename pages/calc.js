import React, { Component } from 'react';
import MainBgImg from '../components/MainBgImg';
import picture from '../public/main-img2.webp'

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outside: '',        // D
      inner: '',          // d
      step: '',           // P
      height: '',         // S
      screwLength: '',    // L
      amount: '',         // Количество витков
      route: 'left',      // Направление
      material: '600',    // Материал
      total: '',          // ИТОГО
    };

    this.params = {};
  }
  
  handleOutside = (event) => {
    this.setState({outside: event.target.value});
  }

  handleInner = (event) => {
    this.setState({inner: event.target.value});
  }

  handleStep = (event) => {
    this.setState({step: event.target.value});
  }

  handleHeight = (event) => {
    this.setState({height: event.target.value});
  }

  handleScrewLength = (event) => {
    this.setState({
      screwLength: event.target.value,
    });
  }

  handleRoute = (event) => {
    this.setState({route: event.target.value});
  }

  handleMaterial = (event) => {
    this.setState({material: event.target.value});
  }

  calculate = () => {
    let { D, d, P, S, L, N, M } = this.params;
    console.log(this.params);
    let d2 = ( (D - d) * Math.sqrt( Math.pow( P, 2 ) + Math.pow(  Math.PI * d, 2 ) ) ) / ( Math.sqrt( Math.pow( P, 2 ) +  Math.pow( Math.PI * D, 2 ) ) - Math.sqrt( Math.pow( P, 2 ) +  Math.pow( Math.PI * d, 2 ) ) );
    let beta = ( Math.PI * d2 - Math.sqrt( Math.pow( P, 2 ) + Math.pow(  Math.PI * d, 2 ) ) ) * 360 / ( Math.PI * d2 );
    let D2 = d2 + ( D - d );
    let alpha = 360 - beta;
    let m1 = Number( ( Math.pow( D2, 2 ) - Math.pow( d2, 2 ) ) * alpha * Math.PI / ( 4 * 360 ) * 0.00785 * S ).toFixed(1);
    let amount = L / P;

    this.params.amount = amount;
    console.log(this.params);
    let m = m1 * amount; //масса шнека
    let price = m / 1000 * 500;
    this.setState({total: price})
    console.log(`D2 = ${D2},\n d2 = ${d2}, \n beta = ${beta},\n alpha = ${alpha},\n m1 = ${m1}, \n m = ${m},\n total = ${price}`);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.params = {
      D: Number(this.state.outside),
      d: Number(this.state.inner),
      P: Number(this.state.step),
      S: Number(this.state.height),
      L: Number(this.state.screwLength),
      M: Number(this.state.material),
    };

    this.calculate();
  }

  render() {
    return (
      <div className='w-3/4'>
        <MainBgImg src={picture} />
        <h3 className='text-center text-white text-6xl m-10'>Калькулятор</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='flex flex-col gap-5 px-4 py-10 bg-white space-y-6 sm:p-6 shadow sm:rounded-md sm:overflow-hidden'>
            <div className='flex border-b pb-5 items-center'>
              <label 
                htmlFor="outside"
                className="block text-gray-700 w-2/4"
                >Наружный диаметр шнека, D (мм)
              </label>
              <input 
                className="py-2 border rounded border-gray-300 active:border-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 block shadow-sm sm:text-sm w-1/4 indent-2"
                id='outside'
                type="number"
                name="outside"
                min={90}
                max={1000}
                value={this.state.outside}
                onChange={this.handleOutside}
                placeholder='min 90 - max 1000'
              />
            </div>

            <div className='flex border-b pb-5 items-center'>
              <label 
                htmlFor="inner"
                className="block text-gray-700 w-2/4"
                >Внутренний диаметр шнека, d (мм)
              </label>
              <input
                className="py-2 border rounded border-gray-300 active:border-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 block shadow-sm sm:text-sm w-1/4 indent-2"
                id='inner'
                type="number"
                name="inner"
                min={20}
                max={500}
                value={this.state.inner}
                onChange={this.handleInner}
                placeholder='min 20 - max 500'
              />
            </div>

            <div className='flex border-b pb-5 items-center'>
              <label htmlFor="step" className="block text-gray-700 w-2/4">Шаг витка, P (мм)</label>
              <input 
                className="py-2 border rounded border-gray-300 active:border-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 block shadow-sm sm:text-sm w-1/4 indent-2"
                id='step' 
                type="number" 
                name="step" 
                min={90} 
                max={1000} 
                value={this.state.step} 
                onChange={this.handleStep} 
                placeholder='min 90 - max 1000'
              />
            </div>

            <div className='flex border-b pb-5 items-center'>
              <label htmlFor="height" className="block text-gray-700 w-2/4">Толщина листа заготовки витка шнека, S (мм)</label>
              <input
                className="py-2 border rounded border-gray-300 active:border-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 block shadow-sm sm:text-sm w-1/4 indent-2"
                id='height'
                type="number"
                name="height"
                min={3}
                max={10}
                value={this.state.height}
                onChange={this.handleHeight}
                placeholder='min 3 - max 10'
              />
            </div>

            <div className='flex border-b pb-5 items-center'>
              <label htmlFor="screwLength" className="block text-gray-700 w-2/4">Длина шнека, L (мм)</label>
              <input
                className="py-2 border rounded border-gray-300 active:border-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 block shadow-sm sm:text-sm w-1/4 indent-2"
                id='screwLength'
                type="number"
                name="screwLength"
                min={90}
                max={1000}
                value={this.state.screwLength}
                onChange={this.handleScrewLength}
                placeholder='min 90 - max 1000'
              />
            </div>

            <div className='flex border-b pb-5 items-center'>
              <label htmlFor="route" className="block text-gray-700 w-2/4">Направление витков</label>
              <select 
                className="block w-1/4 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm indent-2"
                id='route'
                name="route"
                value={this.state.route}
                onChange={this.handleRoute}
              >
                <option value="left">Левое</option>
                <option value="right">Правое</option>
              </select>
            </div>

            <div className='flex border-b pb-5 items-center'>
              <h3 className="block text-gray-700 w-2/4">Результат:</h3>
              {/* <p>{this.state.total}</p> */}
              {this.state.total ? `${this.state.total} ₽` : ''}
            </div>

            <input 
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 self-center"
              type="submit" 
              placeholder='Отправить' 
            />

          </div>
        </form>
      </div>
    )
  }
}

export default Calc;
