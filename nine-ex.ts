class AService {
    public aServes(): void {
        console.log('A');
    }
}

class BService {
    public bServes(): void {
        console.log('B');
    }
}

class Container {
    private serviceA: AService;
    private serviceB: BService;

    constructor(serviceA: AService, serviceB: BService) {
        this.serviceA = serviceA;
        this.serviceB = serviceB;
    }

    public useServices(): void {
        this.serviceA.aServes();
        this.serviceB.bServes();
    }
}

const serviceA = new AService();
const serviceB = new BService();
const container = new Container(serviceA, serviceB);

container.useServices();
