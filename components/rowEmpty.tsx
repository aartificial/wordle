import Box from "./box";
import styles from "./row.module.scss"

export default function RowEmpty() {
    return <div className={styles.row}>
        {Array.from(Array(5)).map((_, index) => (
            <Box key={index} value="" status="EMPTY"/>
        ))}
    </div>
}