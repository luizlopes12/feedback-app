import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback}) {
    if(!feedback || feedback.length ===0){
        return <p>No feedbak yet</p>
    }
    return (
        <>
           List
        </>
    )
}

export default FeedbackList
