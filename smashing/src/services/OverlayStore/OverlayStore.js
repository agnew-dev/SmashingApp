const electron = window.require("electron")
const path = require('path');
const fs = window.require('fs');

export class OverlayStore {
    constructor(opts) {
        this.userDataPath = (electron.app || electron.remote.app).getPath('userData');
        this.path = path.join(this.userDataPath, '/Overlay/', opts.overlayName + '.json');
        this.data = opts;
    }

    set(val) {
        this.data = val;
        console.log(this.path);
        if(!fs.existsSync(this.userDataPath + '/Overlay/'))
            fs.mkdirSync(this.userDataPath + '/Overlay/');
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
    
}

