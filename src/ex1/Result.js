import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const { selectedchair, handlePay, handleDelete } = this.props
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ghế</th>
                            <th>Giá</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedchair.map((item) => {
                            return (
                                <tr key={item.soGhe}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia}</td>
                                    <td><button onClick={() => { handleDelete(item) }} className="btn btn-dark">Xóa</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Tổng tiền :</td>
                            <td>{selectedchair.reduce((total, item) => {
                                return total += item.gia
                            }, 0).toLocaleString()} VND</td>
                            <td><button onClick={handlePay} className="btn btn-dark">Thanh Toán</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        selectedchair: state.chair.selectedChair
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        handlePay: () => {
            dispatch({
                type: 'CHANGE_PAY',
            })
        },
        handleDelete: (item) => {
            dispatch({
                type: "DELETE",
                payload: item
            })
        }
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(Result)