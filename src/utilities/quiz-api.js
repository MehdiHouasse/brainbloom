import sendRequest from "./send-request";
const BASE_URL = '/api/quiz';

export async function startQuiz(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function Question(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}
