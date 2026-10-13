const getBtn = document.getElementById("getBtn");
const output = document.getElementById("output");

getBtn.addEventListener("click", async function() {
    output.textContent = "Loading...";
    try {
        const response = await fetch(

        );
        if(!response.ok){
            throw new Error("HTTP Error:"+response.status);
        }
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});