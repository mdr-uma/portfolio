import emailjs from 'emailjs-com'
import React from 'react'
import Button from './Button'

export default class extends React.Component {
    constructor(props) {
    super(props)
	this.state = { 
        feedback: '', 
        name: 'Name', 
        email: 'email@example.com'
     }
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
  }

    render() {
        return (
            <div className="container">
                <br/>
                <h2>Contact Me</h2>
                <form onSubmit={this.handleSubmit} className="test-mailing">
                    <div className="row h-100 d-flex justify-content-center align-items-center">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea
                                className="form-control"
                                id="test-mailing"
                                cols="30"
                                rows="6"
                                name="message"
                                onChange={this.handleChange}
                                placeholder="Your message"
                                required
                                value={this.state.feedback}
                            />
                        </div>
                        <div className="col-8 mx-auto">
                            <Button>Send Message</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ 
            feedback: event.target.value 
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const templateId = 'contact_form'

        emailjs.sendForm(
            'service_2y6l4eg', templateId,
            ".test-mailing", "user_mXSUTB5nAt998TioGXozW"
        ).then(res => {
            console.log('Email successfully sent!', res)
            })
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        }

    }

