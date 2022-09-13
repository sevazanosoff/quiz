import React from 'react'
import { Line } from 'rc-progress'

import cl from './Progress.module.scss'
import { Context } from '../../../context/Context'
// import { IProgressProps } from '../../types/types'

const Progress: React.FC = () => {
    const percentage = React.useContext(Context)


    console.log(percentage)

    return (
        <div className={cl['progress']}>
            <Line
                percent={percentage}
                strokeWidth={1}
                strokeColor="white"
                trailWidth={0.5}
                trailColor="gray"
                strokeLinecap='round'
                className={cl['progress__bar']}
            />
        </div>
    )
}

export default Progress
