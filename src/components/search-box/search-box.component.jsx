import { Component } from 'react'
import './search-box.style.css'

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props
        return (
            <input
                type="search"
                className={`search-box ${className}`}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
        )
    }
}

export default SearchBox
