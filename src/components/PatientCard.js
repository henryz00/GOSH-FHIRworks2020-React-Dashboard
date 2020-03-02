import React, { Component } from "react";
import { Card } from "antd";

class PatientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    const { patientData, loading } = this.props;

    return (
      <Card
        title={patientData.name}
        extra={<a href="#">View Detail</a>}
        style={{ width: 300 }}
        loading={loading}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}

export default PatientCard;
