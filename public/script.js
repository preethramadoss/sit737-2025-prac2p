function searchFunction() {
    let searchInput = document.getElementById("searchBar").value.toLowerCase();
    let selectedOption = document.getElementById("dropdownMenu").value;

    if (searchInput) {
        alert(`Searching Google Cloud Service: ${searchInput}`);
    } else {
        alert(`Exploring Google Cloud Product: ${selectedOption.toUpperCase()}`);
    }
}
