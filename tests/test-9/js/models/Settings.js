function Settings(app) {
    this.app = app;
    this.pixelRatio = this.getPixelRatio();
    this.container =  this.measureContainer();
    this.stage = {
        x: 0,
        y: 0
    };
    this.chunk =  {
        n: 16,
        staticElements: 0,
        radius: 20,
        margin: 40
    };
    this.snippet = {
        n: 150,
        width: 3,
        height: 5,
        speed: 5
    };
    this.sidestream = {
        length: 300,
        sets: [
            {
                name: '',
                color: 'rgb(0,0,0)',
                startFrame: 85
            }, {
                name: '',
                color: 'rgb(80,120,120)',
                startFrame: 173
            }, {
                name: '',
                color: 'rgb(140,140,80)',
                startFrame: 248
            }, {
                name: '',
                color: 'rgb(140,180,180)',
                startFrame: 314
            }, {
                name: '',
                color: 'rgb(200,240,200)',
                startFrame: 368
            }, {
                name: '',
                color: 'rgb(200,240,200)',
                startFrame: 415
            }, {
                name: '',
                color: 'rgb(200,200,200)',
                startFrame: 'end'
            }, {
                name: '',
                color: 'rgb(200,190,190)',
                startFrame: 'end'
            }, {
                name: '',
                color: 'rgb(240,220,220)',
                startFrame: 'end'
            }
        ]
    };
    this.grid = {
        width: 400,
        height: 400,
        position: {
            x: 200,
            y: 1000
        }
    };
    this.greyness = 0.9;
    this.lightness = 0.3;
    this.animation = {
        frequency: (1000 / 20),
        snippetsPerFrame: 4
    };
    this.typography = {
        title: {
            font: '14px Arial',
            color: '#000'
        }
    };
    this.pipeline = new Path({x:250,y:280}, 'M0,0v404.068c0,11.597,9.435,21.03,21.031,21.03 c11.597,0,21.031-9.434,21.031-21.03V246.129c0-6.773,5.509-12.282,12.281-12.282s12.281,5.509,12.281,12.282v157.938 c0,11.596,9.434,21.03,21.03,21.03c11.597,0,21.03-9.435,21.03-21.03V267.646c0-6.773,5.51-12.282,12.282-12.282 c6.771,0,12.281,5.509,12.281,12.282v136.421c0,11.597,9.434,21.031,21.029,21.031c11.597,0,21.03-9.435,21.03-21.031V292.646 c0-6.773,5.51-12.282,12.282-12.282c6.771,0,12.279,5.509,12.279,12.282v111.422c0,11.596,9.435,21.03,21.031,21.03 s21.031-9.435,21.031-21.03v-82.94c0-6.772,5.509-12.281,12.281-12.281c6.771,0,12.28,5.509,12.28,12.281v82.94 c0,11.596,9.435,21.03,21.03,21.03s21.031-9.435,21.031-21.03v-57.94c0-6.772,5.509-12.281,12.28-12.281 c6.772,0,12.281,5.509,12.281,12.281v57.939c0,11.597,9.435,21.031,21.03,21.031c11.597,0,21.03-9.435,21.03-21.031v-32.939 c0-6.772,5.51-12.281,12.281-12.281c6.772,0,12.281,5.509,12.281,12.281v32.939c0,11.597,9.434,21.031,21.03,21.031H496', this.snippet.speed);
}

Settings.prototype.getPixelRatio = function() {
    // see: http://stackoverflow.com/questions/15661339/how-do-i-fix-blurry-text-in-my-html5-canvas
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;
    return dpr / bsr;
};

Settings.prototype.measureContainer = function(canvases) {
    return {
        width: $(this.app.container).outerWidth(),
        height: $(this.app.container).outerHeight(),
        margin: 20
    }
};