import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import ControlButtons from '../../components/ui/ControlButtons';
import './Calculator.css'
import First from '../../components/parts/First';
import Second from '../../components/parts/Second';
import Third from '../../components/parts/Third';
import Forth from '../../components/parts/Forth';
import Fifth from '../../components/parts/Fifth';
import Six from '../../components/parts/Six';
import Seven from '../../components/parts/Seven';
import Eight from '../../components/parts/Eight';
import Nine from '../../components/parts/Nine';
import Ten from '../../components/parts/Ten';
import { useFilters } from '../../context/FiltersContext';


function CalculatorPage() {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [animationDirection, setAnimationDirection] = useState('');

  const { filters } = useFilters();

  console.log('Текущий выбранный бренд:', filters);
  useEffect(() => {
    const page = localStorage.getItem('page')
    if(+page == 5){
      setCurrentNumber(5)
    }
    console.log(page);
    
  }, [])


  const handleChangeNumber = (delta) => {
    const newValue = currentNumber + delta;
    if (newValue < 1 || newValue > 8) return;

    setAnimationDirection(delta > 0 ? 'right' : 'left');
    setTimeout(() => setAnimationDirection(''), 500); // Убираем класс анимации через 500ms

    setCurrentNumber(newValue);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className={`mt-[20px] transition-transform duration-500 ${
          animationDirection === 'right' ? 'animate-slide-right' : ''
        } ${animationDirection === 'left' ? 'animate-slide-left' : ''}`}
      >
        {
          currentNumber == 1 && 
          <div className='fle flex-col justify-center items-center'>
            <First/>
          </div>
        }
        {
          currentNumber == 2 && 
            <Second/>
        }
        {
          currentNumber == 3 && 
            <Third/>
        }
        {/* {
          currentNumber == 4 && 
            <Forth/>
        } */}
        {
          currentNumber == 4 && 
            <Fifth/>
        }
        {
          currentNumber == 5 && 
            <Six/>
        }
        {
          currentNumber == 6 && 
            <Seven/>
        }
        {/* {
          currentNumber == 7 && 
            <Eight/>
        } */}
        {
          currentNumber == 7 && 
            <Nine/>
        }
        {
          currentNumber == 8 && 
            <Ten/>
        }
      </div>
      <ControlButtons
        className='mt-[20px]'
        currentNumber={currentNumber}
        changeNumber={handleChangeNumber}
      />
      <Footer />
    </div>
  );
}

export default CalculatorPage;
