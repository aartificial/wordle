import Box from "./box";
import {BoxStatus} from "./types";
import styles from "./row.module.scss"

interface RowCurrentProps {
    word: string
}

export default function RowCurrent({ word }: RowCurrentProps) {
    return <div className={styles.row}>
        {word.split('').map((letter, i) => (
            <Box key={i} value={letter} status="EDIT"/>
        ))}
        {Array.from(Array(5-word.length)).map((letter, i) => (
            <Box key={i} value={letter} status="EDIT"/>
        ))}
    </div>
}