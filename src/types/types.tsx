export interface IQuestion {
    title: string
    variants: Array<string>
    correct: number
}

export interface IGameProps extends IQuestion {
    changeStepAndScore(i: number): void
}

export interface IResultProps {
    score: number
    length: number
}

export type ListProps = {
    question: IGameProps
}

export type ListItemProps = {
    index: number
    question: IGameProps
    answer: string
}