import React, { useEffect, useState } from "react"

function QuestionHandler() {

    const [question, setQuestion] = useState('');
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // got form submit working
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter your question.."/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default QuestionHandler