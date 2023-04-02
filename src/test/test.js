export default class Test {
    constructor(parameters) {
        this.time = 0;
        this.isTestRunning = false;
        this.parameters = parameters;
        this.data = {};
        this.lat = 34.0689;
        this.long = -118.4552;
    }

    addParameters() {
        let dataObject = {};
        this.parameters.forEach((element) => {
            const curr_param = this.generateParameter(element);
            dataObject[curr_param.name] = curr_param.value;
        });

        const coordinates = this.generateLocation();

        dataObject['GPS latitude'] = coordinates.lat;
        dataObject['GPS longtitude'] = coordinates.long;

        this.data[this.time] = dataObject;
        this.time += 1000;
    }

    generateParameter(name) {
        let min = 10;
        let max = 4000;
        return {
            name: name,
            value: parseInt(Math.random() * (max - min) + min),
        };
    }

    generateLocation() {
        let latChange = (parseInt(Math.random() * 3) - 1) * 0.0001;
        let longChange = (parseInt(Math.random() * 3) - 1) * 0.0001;

        this.lat += latChange;
        this.long += longChange;

        return {
            lat: this.lat,
            long: this.long,
        };
    }

    startTest() {
        this.isTestRunning = true;
    }

    endTest() {
        this.isTestRunning = false;
    }

    generateTest() {
        if (this.isTestRunning) {
            return;
        }

        this.startTest();

        const id = setInterval(() => {
            if (this.isTestRunning) {
                this.addParameters();
            } else {
                console.log('ending test');
                clearInterval(id);
            }
        }, 1000);
    }

    getData() {
        return this.data;
    }
}
