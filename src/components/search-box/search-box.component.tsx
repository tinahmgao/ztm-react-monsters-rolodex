import { ChangeEvent } from 'react'
import './search-box.style.css'

type SearchBoxProps = {
    className: string
    placeholder?: string
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({
    className,
    placeholder,
    onChangeHandler,
}: SearchBoxProps) => {
    return (
        <input
            type="search"
            className={`search-box ${className}`}
            onChange={onChangeHandler}
            placeholder={placeholder}
        />
    )
}

export default SearchBox
