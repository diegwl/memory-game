import './styles.css'

export interface CardProps {
    id: string
    flipped?: boolean
    back: string
    handleClick?: (id: string) => void
    solved?: boolean
}

function Card({ flipped = false, back, handleClick, id }: CardProps) {
    const cardContentClassNames = ['card__content']
    const cardContentBackClassNames = ["card__face", "card__face--back"]

    flipped && cardContentClassNames.push('card__content--flipped')

    const handleClickFn = (id: string) => {
        if(handleClick) {
            handleClick(id)
        }
    }

    return (
        <div className="card" onClick={() => handleClickFn(id)}>
            <div className={cardContentClassNames.join(' ')}>
                <div className="card__face card__face--front">❓</div>
                <div className={cardContentBackClassNames.join(" ")}>{back}</div>
            </div>
        </div>
    )
}

export default Card
