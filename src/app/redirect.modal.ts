export class Redirect {
    public url;
    public showModal;

    constructor(showModal: boolean, url: string) {
        this.url = url;
        this.showModal = showModal;
    }

    getUrl() {
        return this.url;
    }
    getShowModal() {
        return this.showModal;
    }
}
