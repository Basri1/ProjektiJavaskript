









// Assuming we have an array of insurance policies
let policies = [
    { id: '12345', type: 'Auto', expiryDate: '2024-12-31' }
    // ... other policy data
];

function openEditModal(policyId) {
    const policy = policies.find(p => p.id === policyId);
    if (policy) {
        document.getElementById('editPolicyId').value = policy.id;
        document.getElementById('editPolicyType').value = policy.type;
        document.getElementById('editPolicyExpiryDate').value = policy.expiryDate;
        $('#editPolicyModal').modal('show');
    }
}

function updatePolicy() {
    const id = document.getElementById('editPolicyId').value;
    const type = document.getElementById('editPolicyType').value;
    const expiryDate = document.getElementById('editPolicyExpiryDate').value;

    const policyIndex = policies.findIndex(p => p.id === id);
    if (policyIndex !== -1) {
        policies[policyIndex] = { id, type, expiryDate };
        refreshPoliciesTable();
    }

    $('#editPolicyModal').modal('hide');
}

function deletePolicy(policyId) {
    policies = policies.filter(p => p.id !== policyId);
    refreshPoliciesTable();
}

function refreshPoliciesTable() {
    const tableBody = document.getElementById('policiesTableBody');
    tableBody.innerHTML = '';

    policies.forEach(policy => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.type}</td>
            <td>${policy.expiryDate}</td>
            <td>
                <button onclick="openEditModal('${policy.id}')" class="btn btn-primary">Modifikoj</button>
                <button onclick="deletePolicy('${policy.id}')" class="btn btn-danger">Nxjerr</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// When the page loads, fill the table with the current policies
document.addEventListener('DOMContentLoaded', refreshPoliciesTable);


