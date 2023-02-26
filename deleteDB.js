const axios = require('axios');


// для изменения адреса необходимо сменить ссылку в обеих функциях


// Функция для удаления данных по id
async function deleteDataById(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/scrap/${id}`);
    console.log(`Data with id ${id} deleted:`, response.data);
  } catch (error) {
    console.error(error);
  }
}

// Удаление всех данных из базы
async function clearData() {
  try {
    const response = await axios.get('http://localhost:3000/scrap');
    const data = response.data;
    for (let i = 0; i < data.length; i++) {
      await deleteDataById(data[i].id);
    }
    console.log('All data deleted');
  } catch (error) {
    console.error(error);
  }
}

// Вызов функции для удаления всех данных
clearData();