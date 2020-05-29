import glslang from '@webgpu/glslang';
import path from 'path';
import fs from 'fs';

const extensions = {
    frag: 'fragment',
    vert: 'vertex'
};

const defaultOptions = {
    source: './',
    target: './'
};

export default (options = defaultOptions) => {
    const compiler = glslang();
    return {
        name: 'glslang',
        generateBundle() {
            const targetDirectory = path.dirname(options.target);
            if (!fs.existsSync(targetDirectory)) {
                fs.mkdirSync(targetDirectory);
            }

            const files = fs.readdirSync(options.source);
            for (const file of files) {
                const extension = file.substr(file.lastIndexOf('.') + 1);
                if (extensions.hasOwnProperty(extension)) {
                    const sourcePath = path.join(options.source, file);
                    const targetPath = path.join(options.target, file + '.spv');
                    const glsl = fs.readFileSync(sourcePath, 'utf8');
                    fs.writeFileSync(targetPath, compiler.compileGLSL(glsl, extensions[extension]));
                }
            }
        }
    };
};