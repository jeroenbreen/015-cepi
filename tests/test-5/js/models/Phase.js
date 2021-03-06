function Phase(app) {
    this.app = app;
    this.current = 0;
    this.end = 2;
    this.elements = this.app.getSnippets();

}

Phase.prototype.prev = function() {
    if (this.current > 0) {
        this.current--;
    }
    this.play();
};

Phase.prototype.next = function() {
    if (this.current < this.end) {
        this.current++;
    }
    this.play();
};

Phase.prototype.play = function() {
    console.log(this.current);
    switch (this.current) {
        case 0:
            this.intro();
            break;
        case 1:
            this.pipeline();
            break;
        case 2:
            this.grid();
            break;
    }
};


// 

Phase.prototype.intro = function() {
    var elements = this.elements;
    // set elements to new position
    for (var i = 0, l = elements.length; i < l; i++) {
        var element = elements[i],
            newPoint = element.parent.canvas.main.getRandomPositionInCircle();
        element.points.new = element.updatePoints(newPoint, true);
        element.animation.style = 0;
    }
    this.app.animate(1000);
};



Phase.prototype.pipeline = function() {
    var elements = this.elements;
    for (var i = 0, l = elements.length; i < l; i++) {
        var element = elements[i];
        element.position.new = element.path.getStart();
        element.initPathWalk(15);
    }
    this.app.animate(10000);
};

Phase.prototype.pipelineMovement = function() {
    var elements = this.elements,
        pipeline = this.app.paths[0];
    // set elements to new position
    for (var i = 0, l = elements.length; i < l; i++) {
        var element = elements[i],
            newPoint = pipeline.getRandomPosition(10);
        element.points.new = element.updatePoints(newPoint, true);
    }
    this.app.animate(1000);
};

Phase.prototype.grid = function() {
    var elements = this.elements;
    // set elements to new position
    for (var i = 0, l = elements.length; i < l; i++) {
        var element = elements[i];
        element.position.new = element.parent.getRandomPositionInCircle();
    }
    this.app.animate(1000);
};