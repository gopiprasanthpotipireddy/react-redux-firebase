const initState={
    projects:[
        {id:1,title:'skkgkdgldgkdg',content:'sdgdfgddfhfdhfh'},
        {id:2,title:'skkgkdgldgkdg',content:'sdgdfgddfhfdhfh'},
        {id:3,title:'skkgkdgldgkdg',content:'sdgdfgddfhfdhfh'}
    ]
}
const projectReducer=(state=initState,action)=>{
  switch(action.type){
    case 'CREATE_PROJECT':console.log(action)
  }

    
    return state;
}

export default projectReducer