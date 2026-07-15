import * as THREE from "three";
import {Texture, TextureEventMap} from "three";
import { lerp } from "./utils";
global.THREE = THREE;
import createGeometry from "three-bmfont-text";
import MSDFShader from "three-bmfont-text/shaders/msdf";
export const loadTextAssets = (assets, loader) => {
    if (assets.font) {
        assets.font = assets.font;
    }
    if (assets.glyphs) {
        assets.glyphs = assets.glyphs;
    }
};

export const createTextMaterial = (glyphs, options = {}) => {
    const mdsf = MSDFShader({
        transparent: true,
        side: THREE.DoubleSide,
        map: glyphs,
        color: "rgb(255,255,255)",
        negate: false,
        ...options
    });
    const material = new THREE.RawShaderMaterial({ ...mdsf });
    return material;
};

export class Text {
    private sceneManager: any;
    private glyphs: any;
    private font: any;
    private text: any;
    private baseScale: number;
    private scaleY: number;
    private scaleX: number;
    private scaleMultX: number;
    private scaleMultY: number;
    private mesh: any;
    constructor(sceneManager: any, text: any) {
        this.sceneManager = sceneManager;
        this.glyphs = null;
        this.font = null;
        this.text = text;

        this.baseScale = 1;
        this.scaleY = 1;
        this.scaleX = 1;

        this.scaleMultX = 1;
        this.scaleMultY = 1;

        this.mesh = null;
    }
    load(loader) {
        if (loader && loader.begin) {
            loader.begin("glyphs");
            loader.end("glyphs");
        }
    }
    init() {
        if (!this.font || !this.glyphs) {
            throw new Error("Text assets are not loaded.");
        }
        const geometry = createGeometry({
            font: this.font,
            align: "center",
            text: this.text
        });
        const material = createTextMaterial(this.glyphs);
        const mesh = new THREE.Mesh(geometry, material);
        this.mesh = mesh;
        this.resizeText(true);
        this.sceneManager.scene.add(mesh);
    }
    updateText(text) {
        if (text === this.text) return;
        this.text = text;
        const geometry = createGeometry({
            font: this.font,
            align: "center",
            text
        });

        this.mesh.geometry = geometry;
        this.mesh.geometry.needsUpdate = true;
        let multX = 1;
        let multY = 1;

        this.setScale(
            this.baseScale * this.scaleMultX,
            this.baseScale * this.scaleMultY
        );

        this.resizeText();
    }
    update() {
        let scaleXChange = lerp(this.scaleX, this.baseScale, 0.1, 0.00001);
        let scaleYChange = lerp(this.scaleY, this.baseScale, 0.1, 0.00001);
        if (scaleXChange !== 0 || scaleYChange !== 0) {
            this.setScale(this.scaleX + scaleXChange, this.scaleY + scaleYChange);
        }
    }
    resizeText(force = false) {
        let scale = 0.1;
        let scaleMultX = 1.3;
        let scaleMultY = 1.05;
        if (window.innerWidth >= 800) {
            scaleMultX = 1.3;
            scaleMultY = 1.05;
            scale = 0.15;
        }
        if (window.innerWidth >= 1200) {
            scaleMultX = 1.3;
            scaleMultY = 1.05;
            scale = 0.2;
        }

        this.scaleMultX = scaleMultX;
        this.scaleMultY = scaleMultY;
        this.baseScale = scale;
        if (force) {
            this.setScale(scale, scale);
        }
    }
    setScale(scaleX, scaleY) {
        const mesh = this.mesh;
        const layout = mesh.geometry.layout;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        mesh.scale.x = scaleX;
        mesh.scale.y = -scaleY;
        mesh.position.x = (-layout.width / 2) * scaleX;
        mesh.position.y = (-layout.xHeight / 2) * scaleY;
    }
    onResize(width, height) {
        this.resizeText(true);
    }
}
