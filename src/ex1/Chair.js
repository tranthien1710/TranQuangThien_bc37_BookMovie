import React, { Component } from 'react'
import "./chair.css"

import clsx from "clsx"
import { connect } from 'react-redux'

class Chair extends Component {
    render() {
        const { chair, selectedList, handleBooking } = this.props
        return (
            <div>
                <button onClick={() => {
                    handleBooking(chair)
                }} className={clsx("chair", { "booked": chair.daDat },
                    { "booking": selectedList.find(ele => ele.soGhe === chair.soGhe) })} disabled={chair.daDat} >
                    {chair.soGhe}
                </button>
            </div >
        )
    }
}

const mapStateToProp = (state) => {
    return {
        selectedList: state.chair.selectedChair
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        handleBooking: (item) => {
            dispatch({
                type: "CHANGE_CHAIR",
                payload: item
            })
        }
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(Chair)