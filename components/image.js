import Image from 'next/image'

export default function MyImage(props){
    let fname = './' + props.fname
    let width = props.size + 'px'
    return(
        <img width={width}  border='1' src={fname} />
    )
}