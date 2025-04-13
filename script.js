
function lookupHL7Field(query) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const match = query.toUpperCase().match(/^([A-Z0-9]{3})(?:-(\d+))?$/);
    if (!match) {
        resultDiv.innerHTML = '<p>Please enter a valid segment or field (e.g., PID-5)</p>';
        return;
    }

    const segment = match[1];
    const field = match[2];

    if (!hl7Dict[segment]) {
        resultDiv.innerHTML = `<p>No data found for segment: ${segment}</p>`;
        return;
    }

    if (field) {
        const fieldData = hl7Dict[segment][field];
        if (!fieldData) {
            resultDiv.innerHTML = `<p>No field ${field} found in segment ${segment}</p>`;
            return;
        }
        resultDiv.innerHTML = `
            <h3>${segment}-${field}</h3>
            <p><strong>Name:</strong> ${fieldData.name}</p>
            <p><strong>Type:</strong> ${fieldData.type}</p>
            <p><strong>Description:</strong> ${fieldData.description}</p>
        `;
    } else {
        resultDiv.innerHTML = `<h3>Segment: ${segment}</h3><ul>`;
        for (const num in hl7Dict[segment]) {
            const fieldData = hl7Dict[segment][num];
            resultDiv.innerHTML += `<li>${segment}-${num}: ${fieldData.name} (${fieldData.type})</li>`;
        }
        resultDiv.innerHTML += `</ul>`;
    }
}

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.trim();
    if (query.length > 1) {
        lookupHL7Field(query);
    } else {
        document.getElementById('result').innerHTML = '';
    }
});
