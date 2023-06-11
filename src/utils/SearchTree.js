const SearchTree = {
    type: 'multi',
    values:{
        character: {
            type: 'multi',
            values: {
                name: {
                    type: 'string',
                    value: ''
                },
                status: {
                    type: 'list',
                    values: ['alive', 'dead', 'unknown']
                },
                species: {
                    type: 'string'
                },
                type: {
                    type: 'string'
                },
                gender: {
                    type: 'list',
                    values: [ 'female', 'male', 'genderless', 'unknow' ]
                }
            }
        },
        location: {
            multi:true,
            values: {
                name: {
                    type: 'string'
                },
                type: {
                    type: 'string'
                },
                dimension: {
                    multi: false
                }
            }
        },
        episode: {
            multi: true,
            values: {
                name: {
                    type: 'string'
                },
                episode: {
                    type: 'multi',
                    values: {
                        season:{
                            type: 'list',
                            values: ['S01', 'S02', 'S03', 'S04', 'S05']
                        },
                        episode:{
                            type: 'list',
                            values: ['E01', 'E02', 'E03', ]
                        }
                    }
                }

            }
        }
    }
}