export class Note {
    constructor(
        public id: string,
        public title: string,
        public body: string,
        public folder: string,
        public color: string,
        public pinned: boolean,
        public discard: boolean
    ){}
}