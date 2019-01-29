export class Quotesclass {
    public showAuthor: Boolean
    constructor(public id:number,public name:string, public quotes:string ,public upvotes:number,public downvotes:number,author:string,public completeDate:Date ){
        this.showAuthor=false
    }
}
