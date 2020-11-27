import React from 'react'
class OnOff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onColor: 'white',
            offCOLOR: 'white',
            toggle: true
        }
    }

    handleOff = () => {
        console.log('add new blackcolor ')
        this.setState({

            offCOLOR: 'green'

        })


    }

    handleOn = () => {
        console.log('add new whitecolor ')
        this.setState({
            onColor: 'blue'

        })
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.offCOLOR }}  >
                <button onClick={this.handleOn} >On</button>
                <button onClick={this.handleOff}>Off</button>

            </div>

        )
    }
}
export default OnOff;
