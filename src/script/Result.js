const Result = ({sales, salesValue}) => {
    return (

        <div id="demo-result">
            <div id="template"></div>
            <div id="photo-from-wb"></div>
           {sales && <p id = "sales"  > {salesValue} </p>}
            <div id="error-msg" >
                Фото не найдено!
                <br />
                Впишите в поле реальный артикул
            </div>
        </div>
    )
}

export default Result;