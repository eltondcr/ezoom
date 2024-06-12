export interface Posts {
    id:        number;
    title:     string;
    body:      string;
    userId:    number;
}

export interface Reactions {
    likes:    number;
    dislikes: number;
}
