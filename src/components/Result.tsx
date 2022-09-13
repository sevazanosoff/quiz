import React from 'react'
import { IResultProps } from '../types/types'

import cl from '../styles/Result.module.scss'

const Result: React.FC<IResultProps> = ({ score, length }) => {
    const badOrGoodResult: number = score / length
    return (
        <div className={cl['result']}>
            <div className={cl['wrapper']}>
                <h3 className={cl['result__title']}>Игра закончена!</h3>
                <p className={cl['result__score']}>Ваше количество отчков: <span style={badOrGoodResult > 0.5 ? { color: 'green' } : { color: 'red' }}>{score}</span> из {length} возможных в этой игре!</p>
                <a className={cl['result__back']} href="/">Попробывать еще раз</a>
            </div>
        </div>
    )
}

export default Result
