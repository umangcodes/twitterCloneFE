import styles from "./PostForm.module.css"
import{useState} from "react"

// check from 1:09:25 till
function PostForm() {
    function useUserInfo(){
        return{userInfo:"",status:""}
    }
    const [text, setText] = useState("")
    const formInputMsg = "What's happening?"
    const {userInfo, status} = useUserInfo()
    function handleSubmit(e){
        e.preventDefault()
        console.log(text)
    }
    function handleChange(e){
        setText(e.target.value)
    }
    if(status === "loading"){
        return''
    }
    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formContainer}>
            <div>
                <div className={styles.avatar}>
                <img src="" alt="img" />
                </div>
            </div>
            <div className={styles.textareaContainer}>
                <textarea className={styles.textarea} placeholder={formInputMsg} text={text} onChange={(e)=> handleChange(e)}/>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Tweet</button>
                </div>
            </div>
            </div>
        </form>
    )
}

export default PostForm