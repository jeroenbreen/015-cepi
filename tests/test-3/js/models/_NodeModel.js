function _NodeModel() {}

_NodeModel.prototype.createCanvas = function(name) {
    var canvas = document.createElement('CANVAS'),
        canvasModel;
    canvas.width = this.app.config.container.width;
    canvas.height = this.app.config.container.height;
    this.app.container.appendChild(canvas);
    canvasModel = new Canvas(this, this.app, canvas, name);
    this.app.canvases.push(canvasModel);
    return canvasModel;
};


_NodeModel.prototype.getRandomPosition = function(margin) {
    return {
        x: margin + this.app.random(this.width - 2 * margin),
        y: margin + this.app.random(this.height - 2 * margin)
    }
};

_NodeModel.prototype.getRandomPositionInCircle = function() {
    var radius = Math.min(this.width, this.height) / 2,
        pt_angle = Math.random() * 2 * Math.PI,
        pt_radius_sq = Math.random() * radius * radius,
        x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle) + radius,
        y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle) + radius;
    return {
        x: x + this.position.x + (this.width - 2 * radius) / 2,
        y: y + this.position.y + (this.height - 2 * radius) / 2
    }
};

_NodeModel.prototype.getGridPosition = function(i, l, margin) {
    var unitsPerLine = Math.ceil(Math.sqrt(l)),
        x = i % unitsPerLine,
        y = Math.floor(i / unitsPerLine);
    return {
        x: x * (this.width / unitsPerLine) + margin,
        y: y * (this.height / unitsPerLine) + margin
    }
};

_NodeModel.prototype.getCenter = function() {
    return {
        x: this.width / 2,
        y: this.height / 2
    }
};

_NodeModel.prototype.contains = function(mx, my) {
    var x = this.getX(),
        y = this.getY();
    return  (x <= mx) &&
        (x + this.getWidth() >= mx) &&
        (y <= my) &&
        (y + this.getHeight() >= my);
};