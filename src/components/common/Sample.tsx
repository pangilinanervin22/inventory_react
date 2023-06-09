import { useNavigate } from "react-router-dom";
import styles from "../../styles/sample.module.scss"

interface thisProps {
  message: string;
}

export default function Sample({ message }: thisProps) {

  const navigate = useNavigate();


  return (
    <>
      <div className={styles['div-red']}>{message}</div>
      <button onClick={() => { navigate("/", { replace: true }) }}> home</button>
    </>
  )
}

