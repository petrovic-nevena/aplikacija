import React from 'react';
import '../App.css';
import { Button } from './Button';
import { ImgItems } from "../ImgItems";
import './index.css';
import Sat from '../Sat';


function Home() {
    return (<div>
        <div className="container">
        
        <h1>Meni</h1>
        </div>
      
        <div className="container">
            <div class="row">

                {ImgItems.map((item, index) => {
                    return (
                        <div class="content col-sm-4 text-center" key={index}>
                            <img class="img-responsive" src={item.url} alt="" width="100%"/>
                            <div>{item.opis}</div>
                            <Button onClick={() => { alert('Poručili ste: ' + item.opis) }} buttonStyle='btn--primary'>Poruči</Button>
                        </div>
                    )
                })}
            </div>

        </div>
        <Sat></Sat>
    </div>
    );


}

export default Home;