import axios from "axios";
import { apiUrl } from "../config.json";

export async function getActivities() {
  return axios.get(`${apiUrl}view.php`);
}

export async function getMoto() {
  return axios.get(`${apiUrl}moto.php`);
}

export async function getWebBanner() {
  return axios.get(`${apiUrl}web_tv_banner.php`);
}
export async function getWebchannels() {
  return axios.get(`${apiUrl}channel.php`);
}

export async function getBooks() {
  return axios.get(`${apiUrl}book.php`);
}

export async function getAllBooks() {
  return axios.get(`${apiUrl}books_detail.php`);
}
export async function getAlbums() {
  return axios.get(`${apiUrl}gallery.php`);
}

export async function getAllvideos() {
  return axios.get(`${apiUrl}videos.php`);
}
export async function getAlbumImages() {
  return axios.get(`${apiUrl}book_images.php`);
}

export async function getAllEvents() {
  return axios.get(`${apiUrl}news_event.php`);
}

export async function getAllAudios() {
  return axios.get(`${apiUrl}audio.php`);
}

export async function getAudioCategory() {
  return axios.get(`${apiUrl}audio_category.php`);
}

export async function getVideoCategory() {
  return axios.get(`${apiUrl}video_category.php`);
}

export async function getBookCategories() {
  return axios.get(`${apiUrl}book_category.php`);
}

export async function getWebTvVideos() {
  return axios.get(`${apiUrl}web-tv.php`);
}
export async function getBanners() {
  return axios.get(`${apiUrl}slider.php`);
}

export async function getMenu() {
  return axios.get(`${apiUrl}menu.php`);
}
export function getBlogContent(path) {
  // console.log(`User services log:`, data);
  return axios.post(`${apiUrl}blog_content.php`, {
    path: path,
    // date: user.password,
  });
}

export async function doSearch(payload) {
  return axios.post(`${apiUrl}live_search.php`, payload);
}

export async function getSingleEvent(payload) {
  return axios.post(`${apiUrl}single_event.php`, payload);
}

export async function resendActivation(payload) {
  return axios.post(`${apiUrl}resend_mail.php`, payload);
}

export async function logout() {
  return axios.get(`${apiUrl}logout.php`);
}
