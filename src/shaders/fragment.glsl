uniform sampler2D uTexture;

varying vec2 vUv;
void main() {

    vec4 textureColor = texture2D(uTexture,vUv);
    // gl_FragColor = vec4(vUv,0.3, 1);
    gl_FragColor = textureColor;
}