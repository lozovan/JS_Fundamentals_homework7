deleteOptionperson.addEventListener('click', () => {
    try {
        if (persons.value === '') throw new ReferenceError("There are no any persons");
        const currentPerson = persons.querySelector("option[value=" + persons.value + "]");
        currentPerson.remove();
        if (persons.length === 0) throw new ReferenceError("That was the last person");
    } catch (e) {
        alert(e);
    } finally {
        if (persons.length === 0) persons.previousSibling.previousSibling.textContent = "There are no any persons";
    }
});