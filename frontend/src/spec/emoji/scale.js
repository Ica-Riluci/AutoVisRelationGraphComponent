import specInit from '../specInit';
import graphGen from '../graphSetGen';
import legendSetGen from '../legendSetGen';
import legendScaleGen from '../legendScaleGen';
import graphMarkGen from '../graphMarkGen';
import coverMarkGen from '../coverMarkGen';

export default function unscale(param, debug) {
    debug = typeof debug !== 'undefined' ? debug : true;
    if (debug) {
        console.log('canvas parameter', param);
    }
    var graph = specInit(param, true);
    graph.data = graph.data.concat(graphGen(false, 1600, true), legendSetGen(true));
    graph.scales = graph.scales.concat(legendScaleGen(true));
    graph.marks = graph.marks.concat(graphMarkGen(true, true, 1600)).concat(coverMarkGen(true, true, 1600));
    return graph;
}