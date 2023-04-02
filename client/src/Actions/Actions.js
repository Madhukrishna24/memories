import axios from 'axios'
export const fetchData = (token) => (dispatch) =>{
    axios.get('/dashboard',{
        headers:{
            "x-token":token
        }
    }).then(res=>{
        const data = res.data;
        dispatch({
            type:'FETCH_DATA',
            payload: data
        })
    }).catch(err=> console.log(err.message)) 
}



export const postPerson = (data,token) => (dispatch)=> {
    axios.post('/dashboard',data, {
        headers:{
            "x-token":token
    }}).then(res=> {
        const data = res.data
        dispatch({
            type: "POST_PERSON",
            payload: data
        })
    }).catch((err) => console.log(err))
}



export const fetchLogin = (data) =>  (dispatch) => {
    axios.post('/login',data).then((res)=>{
        const token = res.data.token;
        dispatch({
            type:"FETCH_TOKEN",
            payload:token
        })
    }).catch(err => console.log(err))
}

export const fetchUser = (user) => (dispatch) => {
    axios.post('/sigup',user).then(res => {
        dispatch({
            type: 'POST_DATA',
            payload : user
        })
    })
}

export const postDelet = (id,token) => (dispatch) => {
    axios.delete(`/post/${id}`,{
        headers:{
            'x-token': token
        }
    }).then(res => {
        dispatch({
            type : "POST_DELETE", 
        })
    })
}



