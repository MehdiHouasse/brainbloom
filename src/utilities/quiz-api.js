import sendRequest from "./send-request";
const BASE_URL = '/api/quiz';

export async function startQuiz(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}
export async function save(data) {
  return sendRequest(`${BASE_URL}/save`, 'POST', data);
}
export async function getQuizs() {
  return sendRequest(BASE_URL);
}
export async function deleteQuiz(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
