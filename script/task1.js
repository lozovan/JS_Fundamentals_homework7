class CreateBrowserWindow {
    constructor({ width, height, xCoordinate, yCoordinate }) {
        this.width = width;
        this.height = height;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.wind = window.open('', '', `width=${this.width}, height=${this.height}`);
    }

    resizeWindow() {
        this.wind.resizeTo(this.xCoordinate, this.yCoordinate);
    }

    moveWindow() {
        this.wind.moveTo(this.xCoordinate - this.width, this.yCoordinate - this.height);
    }

    closeWindow() {
        this.wind.close();
    }
}

const windowParameters = {
    width: 300,
    height: 300,
    xCoordinate: 500,
    yCoordinate: 500,
};

const newWindow = new CreateBrowserWindow(windowParameters);

const methods = [newWindow.resizeWindow.bind(newWindow), newWindow.moveWindow.bind(newWindow), newWindow.closeWindow.bind(newWindow)];
const cycle = setInterval(() => {
    if (methods.length > 0) {
        methods.shift()();
    } else {
        clearInterval(cycle);
    }
}, 2000);
