class Wookie {

    constructor(id, title, date, name, image, comments) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.name = name;
        this.image = image;
        this.comments = comments;
    }

    get idwookie () {
        return this.id;
    }

    set idwookie (id) {
        this.id = id;
    }

    get selfieTitle() {
        return this.selfieTitle;
    }

    set selfieTitle (title) {
        this.selfieTitle = selfieTitle;
    }

    get dateselfie () {
        return this.date;
    }

    set dateselfie (date) {
        this.date = date;
    }

    get wookiename() {
        return this.name;
    }

    set wookiename (name) {
        this.name = name;
    }

    get wookieimage () {
        return this.image;
    }

    set wookieimage (image) {
        this.image = image;
    }

    get selfiecomments () {
        return this.comments;
    }

    set selfiecomments (comments) {
        this.comments = comments;
    }
}

