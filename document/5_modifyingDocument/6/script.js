function addChildrenNumber(ul) {
    const lis = ul.querySelectorAll("li");

    for (const li of lis) {
        const nestedElementsQuantity = li.querySelectorAll("li").length;
        
        if (nestedElementsQuantity) {
            li.firstChild.textContent += `[${nestedElementsQuantity}]`;
        }
    }
}

const ul = document.getElementById("unordered-list");

addChildrenNumber(ul);