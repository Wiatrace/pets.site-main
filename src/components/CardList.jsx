import React from 'react';

const CardList = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://pets.xn--80ahdri7a.site/api/users/", requestOptions)
        .then(response => response.text())
        .then(result =>
        {console.log(result)

        })
        .catch(error => console.log('error', error));

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                Личные данные
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Имя: <button className="btn btn-primary">Изменить</button></li>
                <li className="list-group-item">Номер телефона: <button className="btn btn-primary">Изменить</button></li>
                <li className="list-group-item">E-mail: <button className="btn btn-primary">Изменить</button></li>
            </ul>
        </div>
    );
}

export default CardList;