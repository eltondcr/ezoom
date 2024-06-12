// src/apiService.ts
import { CapacitorHttp } from '@capacitor/core';
import { Posts } from './models/Posts';


const url: String = 'https://jsonplaceholder.typicode.com'

const apiService = {


  async fetchPosts(): Promise<Posts[]> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${url}/posts`,
      });

      return response.data.map((post: any) => ({
        id: post.id,
        title: post.title,
        body: post.body,
      }))//.slice(0, 4);
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
      return [];
    }
  }
  ,
  async fetchPost(id: number): Promise<Posts | null> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${url}/posts/${id}`,
      });

      
      let post: Posts = {
        id: response.data.id,
        title: response.data.title,
        body:response.data.body,
        userId: 0
      };

      return post
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }
};

export default apiService;
