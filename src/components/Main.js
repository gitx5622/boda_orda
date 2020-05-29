import React, {Component} from 'react';
import {Col, Row} from "antd";
import pic1 from "../images/pic1.png"

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col span={8}>
                       <img width={200} height={400} src={pic1} alt={pic1}/>
                    </Col>
                    <Col span={16}>
                        <h1>Get your parcel delivered on time</h1>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;