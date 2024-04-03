import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xtjwbbpbzaqueeztzyhm.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0andiYnBiemFxdWVlenR6eWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNzI4OTksImV4cCI6MjAyMzk0ODg5OX0.uf5UW0YbYkTzfyBzcAgZab2m4Jbo3uCn22JUMb3EpQs",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0andiYnBiemFxdWVlenR6eWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNzI4OTksImV4cCI6MjAyMzk0ODg5OX0.uf5UW0YbYkTzfyBzcAgZab2m4Jbo3uCn22JUMb3EpQs"
    }
})



// npm run dev 

