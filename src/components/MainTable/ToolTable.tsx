import { ReactComponent as Search } from "../../assets/svg/Search.svg";
import { ReactComponent as Add } from "../../assets/svg/Add.svg";

import styles from '../../styles/components/Table.module.scss'

interface thisProps {
  text: string;
  title: string;
  changeText: Function;
  handleAdd: Function;
}

export default function ToolTable({ text, title, changeText, handleAdd }: thisProps) {
  console.log(text);

  return (
    <section className={styles.tool_table}>
      <div>
        <input type="text" placeholder="Seach Name" title="name"
          onChange={(event) => changeText(event.target.value)} value={text} />
        <Search />
      </div>
      <div onClick={() => handleAdd()}>
        <Add />
        <button>Add {title}</button>
      </div>
    </section>
  )
}
