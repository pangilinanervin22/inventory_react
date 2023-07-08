import { ReactComponent as Search } from "../../assets/svg/Search.svg";
import { ReactComponent as Add } from "../../assets/svg/Add.svg";

import styles from '../../styles/components/Table.module.scss'

interface thisProps {
  text: string;
  title: string;
  isEditable: boolean;
  changeText: Function;
  handleAdd: Function;
}

export default function ToolTable({ text, title, changeText, handleAdd, isEditable }: thisProps) {
  console.log(text);

  return (
    <section className={styles.tool_table}>
      <div className={styles.search}>
        <input type="text" placeholder="Seach Name" title="name"
          onChange={(event) => changeText(event.target.value)} value={text} />
        <Search />
      </div>
      {isEditable &&
        <div className={styles.add_button} onClick={() => handleAdd()}>
          <Add />
          <button>Add {title}</button>
        </div>
      }
    </section>
  )
}
