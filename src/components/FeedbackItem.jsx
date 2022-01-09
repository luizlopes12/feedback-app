import React,{useState} from 'react'
function FeedbackItem({rating, text}) {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('this is a example of feedback item')
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
        </div>
    )
}

export default FeedbackItem
