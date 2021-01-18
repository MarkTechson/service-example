import { Chapter } from "./chapter";

export class Book {

    title: string;
    description: string;
    chapters: Chapter[];

    /**
     * Create a book with a title, description and chapters - 
     * then we can provide a default value in case
     * the params aren't provided.
     */
    constructor(title: string, description: string = "", chapters: Chapter[] = []) {
        this.title = title; // assign the passed in params to the class variables
        this.description = description;
        this.chapters = chapters;
    }

}
