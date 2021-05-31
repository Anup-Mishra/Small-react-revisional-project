import React, { Component } from 'react';
import Link from 'next/link';

class indexPage extends Component{
    static getInitialProps(context){
        console.log(context);
        const Promise = new Promise((resolve,reject)=> {
            setTimeout(()=>{
                resolve({appName: 'Super App'});
            },1000);
        });
        return Promise;
    }
    render(){
        return(
            <div>
        <h1>The Index Page {this.props.appName}</h1>
        <p>go to <Link href='/auth'><a>auth</a></Link></p>
    </div>
        );
    }
} 

export default indexPage;