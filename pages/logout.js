import {useEffect} from "react"
import {signOut} from "next-auth/react"
function Logout() {
  return (
    <div>
        <button onClick={async () => { await signOut()}}>Logout</button>
    </div>
  )
}

export default Logout