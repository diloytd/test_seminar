//В файле находятся 3 функции, которые выполняют fetch запрос с методами  get, patch, delete
// url используется с помощью плагина json-server
const infoSeminars = "http://localhost:3001/seminars";
export async function fetchSeminars() {
  try {
    const response = await fetch(infoSeminars);
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении списка карточек:", error);
    throw error;
  }
}

export async function deleteSeminar(id) {
  try {
    const response = await fetch(`${infoSeminars}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Ошибка при удалении семинара: ${response.status}`);
    }
    return response;
  } catch(error) {
    console.error("Ошибка при удалении", error);
  }
}

export async function editFetchSeminar({ newInfo, id }) {
  try {
    const response = await fetch(`${infoSeminars}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfo),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch {
    console.error("не удалось отправить запрос на изменение данных");
  }
}
