import styles from "./Buttonscontainer.module.css"
const Buttonscontainer=(props)=>{
    const buttonnames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return (
    <div className={styles.buttonscontainer}>
        {
            buttonnames.map((buttonname)=>{
                return (
                    <button className={styles.button} onClick={props.changeval}>{buttonname}</button>
                )
            })
        }
    
    
    </div>
)
}
export default Buttonscontainer