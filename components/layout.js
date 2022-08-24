import Header from './Header'
import Footer from './Footer'

export default function Layout(props){
    return(
        <div>
        <Header header={props.title}/>
        <div>
            <h3>{props.title}</h3>
            {props.children}
        </div>
        <Footer footer='これはfooterです。'/>


        </div>
    )

}