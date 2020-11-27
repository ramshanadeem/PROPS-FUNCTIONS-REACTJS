import React from 'react'
class Toggle1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tog: true,
            tog1: false

        }
    }
    toggle = () => {

        this.setState({
            tog: !this.state.tog
        })


    }
    toggle1 = () => {

        this.setState({
            tog: !this.state.tog1
        })


    }
    render() {
        return (
            <div>
                {/* <button onClick={this.toggle}>toggle</button> */}
                {this.state.tog ? (<button onClick={this.toggle}>Login</button>) : (<button onClick={this.toggle1}>logout</button>)}

            </div>
        )
    }
}
export default Toggle1;
