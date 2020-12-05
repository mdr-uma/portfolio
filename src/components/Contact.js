import React from 'react'
import Button from './Button';

export default class extends React.Component {
    constructor(props) {
    super(props);
	this.state = { 
        feedback: '', 
        name: 'Name', 
        email: 'email@example.com'
     }
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
                            <a href="https://twitter.com/imoohma"><i className="fab fa-twitter-square s-icon"></i></a>
                            <a href=" https://github.com/mdr-uma"><i className="fab fa-github-square s-icon"></i></a>
                            <a href="https://www.linkedin.com/in/uma-manandhar"><i className="fab fa-linkedin s-icon"></i></a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

