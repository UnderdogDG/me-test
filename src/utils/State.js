import { URL } from "./Vars";

class State{
    constructor(){
        this.name = URL.CATEGORY.CHAR;
        this.characters = [];
        this.factory = new FactoryRequester();
        this.manager = new CharacterRM();
        this.isLogged = true;
        this.isList = false;
        this.sublist = null;
    }

    getData(){
        return this.manager.request().then(res=>[ ...res.results ] );
    }

    setRequester(type){

        this.name = type;
        this.manager = this.factory.getRequester(type);

        if(type === URL.CATEGORY.CHAR){
            this.sublist = null;
        }
        else{
            this.sublist = [];
        }

        return this.updatedState();
    }

    setCharacters(list){
        this.characters = [...list]
        /* this.updateFilters(); */
        return this.updatedState();
    }

    setSublist(list){
        this.sublist = [...list];
        return this.updatedState();
    }

    changeToList(value){
        this.isList = value;
        return this.updatedState();
    }

    changeViewToggle(){
        if(this.isList){
            this.isList = false;
        }
        else{
            this.isList = true;
        }
        return this.updatedState();
    }

    updateFilters(){
        this.characters.forEach( char =>{
            this.filterCount.setKeys(char)
        });
    }

    updatedState(){
        let state = { ...this };
        Object.setPrototypeOf(state, State.prototype);
        return state;
    }

    closeModal(){
        this.modalOpen = false;
        return this.updatedState();
    }
};

class RequestManager{
    constructor(label, base, category){
        this.label = label;
        this.baseURL = base;
        this.category = category;
        this.next = null;
        this.prev = null;
        this.pages = 0;
        this.count = 0;
        this.page = 1;
    }

    request(){
        let header = new Headers();
        header.append( "Content-Type", "application/json; charset=UTF-8" );
        return fetch(this.buildURL()).then(res=>res.json())
    }

    getGroup(str){
        let header = new Headers();
        header.append( "Content-Type", "application/json; charset=UTF-8" );
        return fetch('https://rickandmortyapi.com/api/character/'+str).then(res=>res.json())
    }

    buildURL(){
        return `${this.baseURL}/${this.category}/`
    }

    getNext(){
        const getData = async()=>{
            let res = await fetch(this.next).then(res=>res.json());
            this.next = res.info.next;
            this.prev = res.info.prev;
            return res;
        }

        return (this.next) ? getData() : null
    }

    getPrev(){

        const getData = async()=>{
            let res = await fetch(this.prev).then(res=>res.json());
            this.next = res.info.next;
            this.prev = res.info.prev;
            return res;
        }

        return (this.prev) ? getData() : null

    }
};


class CharacterRM extends RequestManager{
    constructor(){
        super('Characters', URL.BASE, URL.CATEGORY.CHAR)
        this.sublist = null;
    }
};

class LocationRM extends RequestManager{
    constructor(){
        super('Locations', URL.BASE, URL.CATEGORY.LOC)
        
    }

    getSublist(){
        const getData = async()=>{
            let res = await fetch(this.buildURL() + `?page=${this.page}`).then(res=>res.json());
            this.next = res.info.next;
            this.prev = res.info.prev;
            return res;
        }

        return getData();
    }

    
};

class EpisodeRM extends RequestManager{
    constructor(){
        super('Episodes', URL.BASE, URL.CATEGORY.EP)
    }

    getSublist(){
        const getData = async()=>{
            let res = await fetch(this.buildURL() + `?page=${this.page}`).then(res=>res.json());
            this.next = res.info.next;
            this.prev = res.info.prev;
            return res;
        }

        return getData();
    }
};


class FactoryRequester{
    getRequester(type){
        if(type === URL.CATEGORY.CHAR){
            return new CharacterRM();
        }
        else if( type === URL.CATEGORY.LOC){
            return new LocationRM();
        }
        else if(type === URL.CATEGORY.EP){
            return new EpisodeRM();
        }
    }
}

export default State;