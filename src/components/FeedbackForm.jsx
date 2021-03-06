import React,{useState} from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 caracters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Como gostaria de avaliar o nosso produto?</h2>
                    <RatingSelect select={(rating)=> setRating(rating)}/>
                    <div className="input-group">
                        <input 
                        type="text" 
                        value={text} 
                        onChange={handleTextChange} 
                        placeholder='Escreva uma avaliação'/>
                        <Button isDisabled={btnDisabled} type="submit" version='primary'>Enviar</Button>
                    </div>
                    {message&& <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;