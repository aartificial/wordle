import styles from './box.module.scss'
import classNames from 'classnames/bind'

const classes = classNames.bind(styles);

interface BoxProps {
    value: string
    status: BoxStatus
}

export default function Box({ value, status }:BoxProps) {
    const boxStatus = classes({
        correct: status === "CORRECT",
        present: status === "PRESENT",
        absent: status === "ABSENT",
        empty: status === "EMPTY",
        edit: status === "EDIT"
    })
    return <div className={boxStatus}>{value}</div>
}