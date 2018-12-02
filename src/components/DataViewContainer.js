import React from 'react';
import _ from 'lodash';
import { Row, Col, Radio } from 'antd';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
    }

    onMinCountChange = (minCount) => {
        this.setState({ minCount });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    }

    render() {
        return (
            <div className = "data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                />
                <div className="filters">
                    <Row className="filter-row">
                        <Col span={2} offset={3} className="filter-label" >Shots:</Col>
                        <Col span={16} className="filter-control">
                            <CountSlider onMinCountChange={_.debounce(this.onMinCountChange, 500)} className="filter-control" />
                        </Col>
                    </Row>

                </div>


            </div>
        );
    }
}
