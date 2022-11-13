import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chair from "./Chair"
class Listchair extends Component {
    render() {
        const { listchair } = this.props
        return (
            <div>
                {listchair.map((item) => {
                    return (
                        <div key={item.hang} className="d-flex justify-content-center" >
                            <div className="d-flex align-items-center justify-content-center " style={{ width: " 40px" }}>
                                {item.hang}
                            </div>
                            <div className="d-flex">
                                {item.danhSachGhe.map((chair) => {
                                    return (
                                        <Chair key={chair.soGhe} chair={chair} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div >
        )
    }
}

const mapStateToProp = (state) => {
    return {
        listchair: state.chair.listChair
    }
}


export default connect(mapStateToProp)(Listchair)