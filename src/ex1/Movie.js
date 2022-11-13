import React, { Component } from 'react'
import Listchair from './Listchair'
import Result from './Result'

export default class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Đặt vé xem phim</h1>
                <div className="row">
                    <div className="col-8">
                        <Listchair />
                    </div>
                    <div className="col-4">
                        <Result />
                    </div>
                </div>
            </div>
        )
    }
}
