import React from 'react';
import Game from './components/Game';
import Result from './components/Result';
import { IQuestion } from './types/types';
import { Context } from './context/Context'

import cl from './styles/App.module.scss'


const questionsArray: IQuestion[] = [
  { title: 'Какой двигатель в BMW?', variants: ['M52B28', '2JZGTE', 'SR20DE'], correct: 1 },
  { title: 'Какой двигатель в Toyota?', variants: ['M52B28', '2JZGTE', 'SR20DE'], correct: 2 },
  { title: 'Какой двигатель в Nissan?', variants: ['M52B28', '2JZGTE', 'SR20DE'], correct: 3 }
]


const App: React.FC = () => {
  const [step, setStep] = React.useState<number>(0)
  const [score, setScore] = React.useState<number>(0)
  const questionObj: IQuestion = questionsArray[step]
  const percentage: number = (Math.floor((score / questionsArray.length * 100)))

  const changeStepAndScore = (i: number): void => {
    setStep(step + 1)
    if (i + 1 === questionObj.correct) {
      setScore(score + 1)
    }
  }

  return (
    <Context.Provider value={percentage}>
      <div className={cl['App']}>
        {step < questionsArray.length
          ? <Game {...questionObj} changeStepAndScore={(i) => changeStepAndScore(i)} />
          : <Result score={score} length={questionsArray.length} />
        }
      </div>
    </Context.Provider>

  );
}

export default App;
