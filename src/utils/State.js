import { URL } from "./Vars";

class State{
    constructor(){
        this.characters = [];
        this.filterKeys = ['status', 'species', 'type', 'gender', 'origin', 'location', 'episode']
        this.filterCount = new Filters();
        this.factory = new FactoryRequester();
    }

    setRequester(type){
        
    }

    setCharacters(list){
        this.characters = [...list];
        this.updateFilters();
        return this.updatedState();
    }

    updateFilters(){
        this.characters.forEach( char =>{
            this.filterCount = new Filters().setKeys(char);
        });
    }

    updatedState(){
        let state = { ...this };
        Object.setPrototypeOf(state, State.prototype);
        return state;
    }
};

class Filters{
    constructor(){
        this.status = new Set();
        this.species =  new Set();
        this.type = new Set();
        this.gender = new Set();
        this.origin =  new Set();
        this.location =  new Set();
        this.episode =  new Set();
    }

    setKeys(char){
        this.status.add(char.status);
        this.species.add(char.species);
        this.type.add(char.type);
        this.gender.add(char.gender);
        this.origin.add(char.origin);
        this.location.add(char.location);
        this.episode.add(char.episode);
    }
};


class Requester{
    constructor(label, base, category, requester, ){
        this.label = label;
        this.baseURL = base;
        this.category = category;
        this.requester = requester;
    }

    build(){
        return `${this.baseURL}/${this.category}/`
    }
};

class CharacterRequester extends Requester{
    constructor(){
        super('Characters', URL.BASE, URL.CATEGORY.CHAR)
    }
};

class LocationRequester extends Requester{
    constructor(){
        super('Locations', URL.BASE, URL.CATEGORY.LOC)
    }
};

class EpisodeRequester extends Requester{
    constructor(){
        super('Episodes', URL.BASE, URL.CATEGORY.EP)
    }
};

class FactoryRequester{
    getRequester(type){
        if(type === URL.CATEGORY.CHAR){
            return new CharacterRequester();
        }
        else if( type === URL.CATEGORY.LOC){
            return new LocationRequester();
        }
        else if(type === URL.CATEGORY.EP){
            return new EpisodeRequester();
        }
    }
}

export default State;

/* 
EPISODES
count 51
pages 3
next url / null
prev url / null
results: list
	id num
	*name 
	air_date
	*episode S00E00
	characters list<character>
	url

LOCATION
count 126
pages 7
next url / null
prev url / null
results: list
	id
	*name
	*type
	*dimension
	residents list<character>
	url

CHARACTER
count 826
pages 42
next url / null
prev url / null
results: list
	id num
	*name
	*status
	*species
	*type
	*gender
	origin
	location
	image
	episode
	url
	created
 */