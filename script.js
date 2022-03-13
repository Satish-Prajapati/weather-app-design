document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    alert(`Weather in ${e.target.location.value} is sunny`)
})

const locations = ["Delhi", "Ahemdabad", "Punjab", "Uttar Pradesh", "Himachal Pradesh", "Karnatka", "Kerela", "Maharashtra", "Gujrat", "Rajasthan", "Bihar","Tamil Nadu", "Haryana"]

document.querySelector('input').addEventListener("keyup", (e) => {
    const value = e.target.value
    document.getElementById('datalist').innerHTML = '';
    locations.forEach((location) => {
        if(((location.toLowerCase()).indexOf(value.toLowerCase()))>-1)
        {
            const node = document.createElement("option");
            const val = document.createTextNode(location);
            node.appendChild(val);    
            document.getElementById("datalist").appendChild(node);
        }
    })
})
