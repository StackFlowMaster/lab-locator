import React, { Component } from 'react'
import { connect } from 'react-redux'

class StudioPage extends Component {

    render() {
        return(
            <h1>
                Studio Page Here
            </h1>
        )
    }
}

export default connect()(StudioPage)