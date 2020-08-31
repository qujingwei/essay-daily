let vDom = {
    tag: 'div',
    props: {
        id:'div',
    },
    children:[{
        tag: 'ul',
        children:[{
            tag:'li',
            props:{
                id:'li',
                class:'li-1'
            },
            children:['第',1]
        }]
    }]
}

const nodePathTypes = {
    CREATE:'create node',
    REMOVEL:'remove node',
    REPLACE:'replace node',
    UPDATE:'update node'
}


const propPathTypes = {
    REMOVEL:'remove prop',
    UPDATE:'update prpop'
}
