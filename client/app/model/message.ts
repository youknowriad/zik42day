export class Message {
    type: string;
    content: string;
    constructor(content: string, type: string = 'info') {
        this.type = type;
        this.content = content;
    }
}
