import { Error } from '../../error'
import { Loading } from '../../loading'
import './style.css'

export const SubmitComment = ({ handleSubmit  }) => (
 
    <form className="message-container" onSubmit={handleSubmit}>
            <textarea className="message" placeholder="Write your message here..." rows="3" ></textarea>
            <button className="sub-button" type="submit">Send Message</button>
    </form>
)    