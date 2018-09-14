//// [logicalAndOperatorStrictMode.ts]
const a = [0];
const s = "";
const x = 0;
const b = false;
const v: void = undefined;
const u = undefined;
const n = null;
const z = s || x || u;

const a1 = a && a;
const a2 = a && s;
const a3 = a && x;
const a4 = a && b;
const a5 = a && v;
const a6 = a && u;
const a7 = a && n;
const a8 = a && z;

const s1 = s && a;
const s2 = s && s;
const s3 = s && x;
const s4 = s && b;
const s5 = s && v;
const s6 = s && u;
const s7 = s && n;
const s8 = s && z;

const x1 = x && a;
const x2 = x && s;
const x3 = x && x;
const x4 = x && b;
const x5 = x && v;
const x6 = x && u;
const x7 = x && n;
const x8 = x && z;

const b1 = b && a;
const b2 = b && s;
const b3 = b && x;
const b4 = b && b;
const b5 = b && v;
const b6 = b && u;
const b7 = b && n;
const b8 = b && z;

const v1 = v && a;
const v2 = v && s;
const v3 = v && x;
const v4 = v && b;
const v5 = v && v;
const v6 = v && u;
const v7 = v && n;
const v8 = v && z;

const u1 = u && a;
const u2 = u && s;
const u3 = u && x;
const u4 = u && b;
const u5 = u && v;
const u6 = u && u;
const u7 = u && n;
const u8 = u && z;

const n1 = n && a;
const n2 = n && s;
const n3 = n && x;
const n4 = n && b;
const n5 = n && v;
const n6 = n && u;
const n7 = n && n;
const n8 = n && z;

const z1 = z && a;
const z2 = z && s;
const z3 = z && x;
const z4 = z && b;
const z5 = z && v;
const z6 = z && u;
const z7 = z && n;
const z8 = z && z;

function f1<T extends string | number | boolean | undefined | null>(t: T) {
    const r1 = t && [0];
}


//// [logicalAndOperatorStrictMode.js]
var a = [0];
var s = "";
var x = 0;
var b = false;
var v = undefined;
var u = undefined;
var n = null;
var z = s || x || u;
var a1 = a && a;
var a2 = a && s;
var a3 = a && x;
var a4 = a && b;
var a5 = a && v;
var a6 = a && u;
var a7 = a && n;
var a8 = a && z;
var s1 = s && a;
var s2 = s && s;
var s3 = s && x;
var s4 = s && b;
var s5 = s && v;
var s6 = s && u;
var s7 = s && n;
var s8 = s && z;
var x1 = x && a;
var x2 = x && s;
var x3 = x && x;
var x4 = x && b;
var x5 = x && v;
var x6 = x && u;
var x7 = x && n;
var x8 = x && z;
var b1 = b && a;
var b2 = b && s;
var b3 = b && x;
var b4 = b && b;
var b5 = b && v;
var b6 = b && u;
var b7 = b && n;
var b8 = b && z;
var v1 = v && a;
var v2 = v && s;
var v3 = v && x;
var v4 = v && b;
var v5 = v && v;
var v6 = v && u;
var v7 = v && n;
var v8 = v && z;
var u1 = u && a;
var u2 = u && s;
var u3 = u && x;
var u4 = u && b;
var u5 = u && v;
var u6 = u && u;
var u7 = u && n;
var u8 = u && z;
var n1 = n && a;
var n2 = n && s;
var n3 = n && x;
var n4 = n && b;
var n5 = n && v;
var n6 = n && u;
var n7 = n && n;
var n8 = n && z;
var z1 = z && a;
var z2 = z && s;
var z3 = z && x;
var z4 = z && b;
var z5 = z && v;
var z6 = z && u;
var z7 = z && n;
var z8 = z && z;
function f1(t) {
    var r1 = t && [0];
}
