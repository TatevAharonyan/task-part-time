

const Search = ({ onClick, onChange, value }) => {
    return (
        <div id="demo-layout">
            <div id="header">
                Принцип работы
            </div>
            <div id="desc" >
                На примере категории "одежда":
                <br />
                Введите артикул товара на Wildberries
            </div>
            <input
                type="text"
                id="art"
                value={value}
                onChange={onChange}
            />
            <button
                id="demo-test"
                onClick={onClick}
            >
                Подобрать шаблон
            </button>
        </div>
    )
}

export default Search