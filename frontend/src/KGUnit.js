import React from 'react';
import { Vega, createClassFromSpec } from 'react-vega';
import circleunscale from './spec/circle/unscale';
import circlescale from './spec/circle/scale';
import emojiscale from './spec/emoji/scale';
import emojiunscale from './spec/emoji/unscale';
import { Handler } from 'vega-tooltip';
import testspec from './spec/_test/test';

export default class KGUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data,
            param : this.props.param
        };
    }

    render() {
        var { data, param } = this.state;
        const specx = emojiunscale(param);
        console.log("received spec", specx)
        const Spec = createClassFromSpec(specx);
        return (
            <div>
                <Vega spec={specx} data={data} />
            </div>
        );
    }
}