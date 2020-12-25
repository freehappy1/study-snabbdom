import h from './mysnabbdom/h.js';
import patch from './mysnabbdom/patch.js';

const myVnode1 = h('section', {}, [
    h('p', {}, 'A'),
    h('p', {}, 'B'),
    h('p', {}, 'C')
]);

// 得到盒子和按钮
const container = document.getElementById('container');
const btn = document.getElementById('btn');

// 第一次上树
patch(container, myVnode1);

// 新节点
const myVnode2 = h('section', {}, [
    h('p', {}, 'A'),
    h('p', {}, 'B'),
    h('p', {}, 'C')
]);

btn.onclick = function() {
    patch(myVnode1, myVnode2);
}