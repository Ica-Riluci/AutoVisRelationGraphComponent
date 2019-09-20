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
    var graph = specInit(param);
    graph.data = graph.data.concat(graphGen(false, 1600, false), legendSetGen(false));
    graph.scales = graph.scales.concat(legendScaleGen(false));
    graph.marks = graph.marks.concat(graphMarkGen(false)).concat(coverMarkGen(false, 1600));
    return graph;
}