import Box from "./box";
import {BoxStatus} from "./types";
import styles from "./row.module.scss"

interface RowProps {
    word: string
    solution: string
}

export default function RowCompleted({ word, solution }:RowProps) {

    function checkLetter(letter: string, pos: number): BoxStatus {
        if (solution.includes(letter)) {
            if (solution[pos] === letter) return "CORRECT"
            return "PRESENT"
        }
        return "ABSENT"
    }

    return <div className={styles.row}>
        {Array.from(Array(5)).map((_, i) => (
                <Box key={i} value={word[i]} status={checkLetter(word[i], i)}/>
            ))
        }
    </div>
}