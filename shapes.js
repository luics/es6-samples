class Shape {
    getArea() {
        console.warn("NOT IMPLEMENTED")
        return -1
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    toString() {
        return `Rect(${this.width} x ${this.height})`
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }

    toString() {
        return `Circle(radius=${this.radius})`
    }
}

export {Rect, Circle} 