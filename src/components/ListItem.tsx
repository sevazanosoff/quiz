import React from 'react'
import { ListItemProps } from '../types/types'

import cl from '../styles/ListItem.module.scss'


const ListItem: React.FC<ListItemProps> = ({ index, question, answer }) => {
    return (
        <li
            className={cl['game__list-question']}
            key={index}
            onClick={() => question.changeStepAndScore(index)}
        >
            {answer}
        </li>
    )
}

export default ListItem
