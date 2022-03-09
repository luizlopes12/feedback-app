import React,{useState} from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
function FeedbackForm() {
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
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                    <RatingSelect/>
                    <div className="input-group">
                        <input 
                        type="text" 
                        value={text} 
                        onChange={handleTextChange} 
                        placeholder='Write a review'/>
                        <Button isDisabled={btnDisabled} type="submit" version='primary'>Send</Button>
                    </div>
                    {message&& <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;