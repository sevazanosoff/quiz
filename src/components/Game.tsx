import React from 'react'
import { IGameProps } from '../types/types'

import cl from '../styles/Game.module.scss'
import Progress from './ui/Progress/Progress'
import List from './List'


const Game: React.FC<IGameProps> = (question) => {
    const [isLoading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        setLoading(false)
        setTimeout(() => setLoading(true), 1)
    }, [question.title])

    return (
        <div className={cl['game']}>
            <div className={cl['wrapper']}>
                <Progress />
                {isLoading
                    ? <h3 className={cl['game__title']}>{question.title}</h3>
                    : ''
                }
                <List question={question} />
            </div>
        </div>
    )
}

export default Game
