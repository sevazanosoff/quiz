import React from 'react'
import { ListProps } from '../types/types'

import cl from '../styles/List.module.scss'
import ListItem from './ListItem'


const List: React.FC<ListProps> = ({ question }) => {
    return (
        <ul className={cl['game__list-questions']}>
            {question.variants.map((answer: string, i: number) => (
                <ListItem
                    index={i}
                    question={question}
                    answer={answer}
                />
            ))}
        </ul>
    )
}

export default List
