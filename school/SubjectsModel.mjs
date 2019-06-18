export class SubjectsModel {
    constructor({ title, lessons, description = null }) {
        this._validation(title, 'string', 'Title')
        ._validation(lessons, 'number', 'Lessons');
        // ._validation(description, 'null','Description');

        this.title = title;
        this.lessons = lessons;
        this.description = description;
        if (this.id >= 0) {
            this.id++
        } else this.id = 0;
        return this.id;
    }

    _validation(key, type, arg) {
        if (typeof key !== type) {
            throw new Error(`${arg} is required and must be ${type}`);
        }
        return this
    }
}