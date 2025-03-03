function calculate() {
    const fatherBloodType = document.getElementById('fatherBloodType').value;
    const motherBloodType = document.getElementById('motherBloodType').value;
    const result = document.getElementById('result');

    // 血型遗传规则
    const bloodTypeRules = {
        'A': {
            'A': ['A', 'O'],
            'B': ['A', 'B', 'AB', 'O'],
            'AB': ['A', 'B', 'AB'],
            'O': ['A', 'O']
        },
        'B': {
            'A': ['A', 'B', 'AB', 'O'],
            'B': ['B', 'O'],
            'AB': ['A', 'B', 'AB'],
            'O': ['B', 'O']
        },
        'AB': {
            'A': ['A', 'B', 'AB'],
            'B': ['A', 'B', 'AB'],
            'AB': ['A', 'B', 'AB'],
            'O': ['A', 'B']
        },
        'O': {
            'A': ['A', 'O'],
            'B': ['B', 'O'],
            'AB': ['A', 'B'],
            'O': ['O']
        }
    };

    // 获取可能的血型
    const possibleBloodTypes = bloodTypeRules[fatherBloodType][motherBloodType];

    // 显示结果
    result.textContent = `可能的子代血型：${possibleBloodTypes.join('型, ')}型`;
}

function reset() {
    document.getElementById('fatherBloodType').value = 'A';
    document.getElementById('motherBloodType').value = 'A';
    document.getElementById('result').textContent = '';
}