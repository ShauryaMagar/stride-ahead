import React from 'react';
import Loader from "react-loader-spinner";
const FetchImage=()=>{
    const [disp,setDisp]=React.useState('');
    React.useEffect(() => {
        
            fetch(`https://avatars.dicebear.com/api/avataaars/example.svg?clothes[]=blazer`)
                .then((response) => response.blob())
                .then((images) => {
                    let upd=(URL.createObjectURL(images))
                    let dt=(
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-5 col-8">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <img src={upd} alt="avatar"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    setDisp(dt);
                    
                })   

    }, [])
    if(disp===''){
        return(
        <div className="container" style={{marginTop:'5rem'}}>
            <div className="row justify-content-center" style={{textAlign:"center"}}>
                <Loader/>
            </div>
            
        </div>
            
        )
    }else{
        return (
            <>
                {disp}
            </>
            );
    }
}
export default FetchImage;