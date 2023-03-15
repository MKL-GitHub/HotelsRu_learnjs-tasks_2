const genres = document.getElementById("genres");

alert(genres.selectedOptions[0].value);
alert(genres.selectedOptions[0].text);

const option = new Option("Классика", "classic");

genres.append(option);
option.selected = true;