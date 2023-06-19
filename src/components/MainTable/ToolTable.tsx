import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/search.svg";
import { ReactComponent as Add } from "../../assets/search.svg";
import styles from '../../styles/components/Table.module.scss'

interface thisProps {
  text: string;
  changeText: Function;
}

export default function ToolTable({ text, changeText }: thisProps) {
  console.log(text);

  return (
    <section className={styles.tool_table}>
      <div>
        <input type="text" placeholder="Seach Name" title="name"
          onChange={(event) => changeText(event.target.value)} value={text} />
        <Logo />
      </div>
      <Link to={"/"}>
        <Add />
        <button>ADD Employee</button>
      </Link>
    </section>
  )
}