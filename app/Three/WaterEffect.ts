import * as THREE from "three";
import { Effect } from "postprocessing";

export class WaterEffect extends Effect {
    constructor(options = {
        texture: undefined
    }) {
        super("WaterEffect", fragment, {
            uniforms: new Map([["uTexture", new THREE.Uniform(options.texture)]])
        });
    }
}
export default WaterEffect;

const fragment = `

uniform sampler2D uTexture;

void mainUv(inout vec2 uv) {
    vec4 tex = texture2D(uTexture, uv);
    vec2 offset = (tex.rg * 2.0 - 1.0) * tex.b * 0.08;
    uv += offset;
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor;
}
    

`;
