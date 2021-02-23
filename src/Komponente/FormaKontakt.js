import React from 'react';

class FormaKontakt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            email: '',
            comment: '',
        }
    }

    resetForm() {
        this.setState({ email: '', coment: '' })
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" >                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email:</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Komentar:</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.coment} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={() => alert('Vaš komentar je prosleđen. Email: ' + this.state.email + ', komentar: '+ this.state.comment )}> Prosledi komentar </button>
                    </div>
                </form>
            
            </div>
        );
    }    

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ comment: event.target.value })
    }
}

export default FormaKontakt;