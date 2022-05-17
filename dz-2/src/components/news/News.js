import classes from "./News.module.css"
export const News = (props) => {
    return(
       
        <ul  className={classes.serul} >
            {props.news.map ((el, key) =>{
                return <li className={classes.link}>{el}</li>
            })}
        </ul>
    )
     
}