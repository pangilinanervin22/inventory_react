import { ReactComponent as Search } from "../../assets/svg/Search.svg";
import styles from '../../styles/components/Table.module.scss'

interface thisProps {
  text: string;
  changeText: Function;
}

export default function ToolTableNoAdd({ text, changeText }: thisProps) {
  console.log(text);

  return (
    <section className={styles.tool_table_noAdd}>
      <div>
        <input type="text" placeholder="Seach Name" title="name"
          onChange={(event) => changeText(event.target.value)} value={text} />
        <Search />
      </div>
    </section>
  )
}
