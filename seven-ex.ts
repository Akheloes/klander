class Homelander {
    readonly immutable = 1;

    display() {
        (this as any).immutable += 7;
        console.log(this.immutable);
    }
}


new Homelander().display();
new Homelander().display();