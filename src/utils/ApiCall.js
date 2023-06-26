import axios from "axios";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});

/**
 * Retrieve user activity
 * @param {string} id
 * @returns {Array}
 */
export const getUserActivity = async id => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Infos
 * @param {string} id
 * @returns {object}
 */

export const getUserInfos = async id => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get User Performance
 * @param {string} id
 * @returns {object}
 */

export const getUserPerformance = async id => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return new Performance(res.data);
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Average Session
 * @param {string} id
 * @returns {object}
 */

export const getUserAverageSessions = async id => {
  try {
    const res = await api.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return new AverageSessions(res.data);
  } catch (e) {
    console.log(e);
  }
};
