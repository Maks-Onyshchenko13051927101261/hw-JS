function createUsers(users) {
    for (let user of users) {
        document.write(`<ul>
                            <li>${user.id}</li>
                            <li>${user.name}</li>
                            <li>${user.age}</li>
                        </ul>`);
    }
}

createUsers([]);